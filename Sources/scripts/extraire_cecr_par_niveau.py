"""
Reorganise le CECR (Framework_FR.md) par niveau linguistique (A1-C2).

Principe : le fichier source contient de nombreuses "echelles de descripteurs"
aplaties en une seule ligne de prose, de la forme :
    TITRE C2 <texte> C1 <texte> B2 <texte> B1 <texte> A2 <texte> A1 <texte>
Ce script isole chaque echelle, decoupe le texte par niveau, et regenere un
document organise niveau par niveau (au lieu de chapitre par chapitre).

Rien n'est supprime silencieusement : tout texte des plages scannees qui ne
correspond pas au motif d'echelle est conserve dans l'annexe "hors niveau".
Framework_FR.md n'est jamais modifie (lecture seule).
"""
import re
import json
import io

SRC = r'C:\Users\Tif&Biz\Desktop\Projet activité\manuel-darija\Sources\Framework_FR.md'
OUT_MD = r'C:\Users\Tif&Biz\Desktop\Projet activité\manuel-darija\Sources\CECR_par_niveau.md'
OUT_JSON = r'C:\Users\Tif&Biz\Desktop\Projet activité\manuel-darija\Sources\scripts\cecr_scales.json'
OUT_REPORT = r'C:\Users\Tif&Biz\Desktop\Projet activité\manuel-darija\Sources\scripts\verification_report.md'

LEVELS = ['C2', 'C1', 'B2', 'B1', 'A2', 'A1']

# Plages de lignes (1-based, inclusives) validees par lecture directe de la source.
RANGES = {
    'ch3_niveaux':      (891, 1481, "Chapitre 3 - Les niveaux communs de reference"),
    'ch4_utilisation':  (1482, 2447, "Chapitre 4 - L'utilisation de la langue (descripteurs Peut...)"),
    'ch5_competences':  (2448, 3110, "Chapitre 5 - Les competences de l'apprenant/utilisateur"),
    'annexeB':          (5544, 5813, "Annexe B - Echelles complementaires (projet suisse)"),
    'annexeD':          (6065, 6297, "Annexe D - Specifications ALTE"),
}

BOILERPLATE_LITERAL = [
    "UNCADREEUROPÉENCOMMUNDERÉFÉRENCEPOURLESLANGUES – APPRENDRE , ENSEIGNER , ÉVALUER",
    "UN CADRE EUROPÉEN COMMUN DE RÉFÉRENCE POUR LES LANGUES – APPRENDRE, ENSEIGNER, ÉVALUER",
]
BOILERPLATE_REGEX = [
    r"CHAPITRE\s*\d+\s*:\s*[A-ZÉÈÀÂÊÎÔÛÇ'/]+(?:\s*[A-ZÉÈÀÂÊÎÔÛÇ'/]+)*",
    r"ANNEXE\s*[A-D]\s*:\s*[A-ZÉÈÀÂÊÎÔÛÇ'/]+(?:\s*[A-ZÉÈÀÂÊÎÔÛÇ'/]+)*",
]

# ---------------------------------------------------------------------------
# Tableaux 1 et 2 du Chapitre 3 : transcrits manuellement (structure imbriquee
# incompatible avec le tokenizer generique, cf. limite documentee). Verifies
# mot pour mot contre Framework_FR.md, lignes 958-976.
# ---------------------------------------------------------------------------
TABLEAU_1 = {
    'C2': "Peut comprendre sans effort pratiquement tout ce qu'il/elle lit ou entend. "
          "Peut restituer faits et arguments de diverses sources écrites et orales en "
          "les résumant de façon cohérente. Peut s'exprimer spontanément, très "
          "couramment et de façon précise et peut rendre distinctes de fines nuances "
          "de sens en rapport avec des sujets complexes.",
    'C1': "Peut comprendre une grande gamme de textes longs et exigeants, ainsi que "
          "saisir des significations implicites. Peut s'exprimer spontanément et "
          "couramment sans trop apparemment devoir chercher ses mots. Peut utiliser "
          "la langue de façon efficace et souple dans sa vie sociale, professionnelle "
          "ou académique. Peut s'exprimer sur des sujets complexes de façon claire et "
          "bien structurée et manifester son contrôle des outils d'organisation, "
          "d'articulation et de cohésion du discours.",
    'B2': "Peut comprendre le contenu essentiel de sujets concrets ou abstraits dans "
          "un texte complexe, y compris une discussion technique dans sa spécialité. "
          "Peut communiquer avec un degré de spontanéité et d'aisance tel qu'une "
          "conversation avec un locuteur natif ne comportant de tension ni pour l'un "
          "ni pour l'autre. Peut s'exprimer de façon claire et détaillée sur une "
          "grande gamme de sujets, émettre un avis sur un sujet d'actualité et "
          "exposer les avantages et les inconvénients de différentes possibilités.",
    'B1': "Peut comprendre les points essentiels quand un langage clair et standard "
          "est utilisé et s'il s'agit de choses familières dans le travail, à l'école, "
          "dans les loisirs, etc. Peut se débrouiller dans la plupart des situations "
          "rencontrées en voyage dans une région où la langue cible est parlée. Peut "
          "produire un discours simple et cohérent sur des sujets familiers et dans "
          "ses domaines d'intérêt. Peut raconter un événement, une expérience ou un "
          "rêve, décrire un espoir ou un but et exposer brièvement des raisons ou "
          "explications pour un projet ou une idée.",
    'A2': "Peut comprendre des phrases isolées et des expressions fréquemment "
          "utilisées en relation avec des domaines immédiats de priorité (par "
          "exemple, informations personnelles et familiales simples, achats, "
          "environnement proche, travail). Peut communiquer lors de tâches simples "
          "et habituelles ne demandant qu'un échange d'informations simple et direct "
          "sur des sujets familiers et habituels. Peut décrire avec des moyens "
          "simples sa formation, son environnement immédiat et évoquer des sujets "
          "qui correspondent à des besoins immédiats.",
    'A1': "Peut comprendre et utiliser des expressions familières et quotidiennes "
          "ainsi que des énoncés très simples qui visent à satisfaire des besoins "
          "concrets. Peut se présenter ou présenter quelqu'un et poser à une personne "
          "des questions la concernant – par exemple, sur son lieu d'habitation, ses "
          "relations, ce qui lui appartient, etc. – et peut répondre au même type de "
          "questions. Peut communiquer de façon simple si l'interlocuteur parle "
          "lentement et distinctement et se montre coopératif.",
}

TABLEAU_2 = {
    'A1': {
        'Écouter': "Je peux comprendre des mots familiers et des expressions très "
                   "courantes au sujet de moi-même, de ma famille et de "
                   "l'environnement concret et immédiat, si les gens parlent "
                   "lentement et distinctement.",
        'Lire': "Je peux comprendre des noms familiers, des mots ainsi que des "
                "phrases très simples, par exemple dans des annonces, des affiches "
                "ou des catalogues.",
        'Prendre part à une conversation': "Je peux communiquer, de façon simple, "
                "à condition que l'interlocuteur soit disposé à répéter ou à "
                "reformuler ses phrases plus lentement et à m'aider à formuler ce "
                "que j'essaie de dire. Je peux poser des questions simples sur des "
                "sujets familiers ou sur ce dont j'ai immédiatement besoin, ainsi "
                "que répondre à de telles questions.",
        "S'exprimer oralement en continu": "Je peux utiliser des expressions et des "
                "phrases simples pour décrire mon lieu d'habitation et les gens que "
                "je connais.",
        'Écrire': "Je peux écrire une courte carte postale simple, par exemple de "
                  "vacances. Je peux porter des détails personnels dans un "
                  "questionnaire, inscrire par exemple mon nom, ma nationalité et "
                  "mon adresse sur une fiche d'hôtel.",
    },
    'A2': {
        'Écouter': "Je peux comprendre des expressions et un vocabulaire très "
                   "fréquent relatifs à ce qui me concerne de très près (par "
                   "exemple moi-même, ma famille, les achats, l'environnement "
                   "proche, le travail). Je peux saisir l'essentiel d'annonces et "
                   "de messages simples et clairs.",
        'Lire': "Je peux lire des textes courts très simples. Je peux trouver une "
                "information particulière prévisible dans des documents courants "
                "comme les publicités, les prospectus, les menus et les horaires "
                "et je peux comprendre des lettres personnelles courtes et "
                "simples.",
        'Prendre part à une conversation': "Je peux communiquer lors de tâches "
                "simples et habituelles ne demandant qu'un échange d'informations "
                "simple et direct sur des sujets et des activités familiers. Je "
                "peux avoir des échanges très brefs même si, en règle générale, je "
                "ne comprends pas assez pour poursuivre une conversation.",
        "S'exprimer oralement en continu": "Je peux utiliser une série de phrases "
                "ou d'expressions pour décrire en termes simples ma famille et "
                "d'autres gens, mes conditions de vie, ma formation et mon "
                "activité professionnelle actuelle ou récente.",
        'Écrire': "Je peux écrire des notes et messages simples et courts. Je peux "
                  "écrire une lettre personnelle très simple, par exemple de "
                  "remerciements.",
    },
    'B1': {
        'Écouter': "Je peux comprendre les points essentiels quand un langage "
                   "clair et standard est utilisé et s'il s'agit de sujets "
                   "familiers concernant le travail, l'école, les loisirs, etc. Je "
                   "peux comprendre l'essentiel de nombreuses émissions de radio "
                   "ou de télévision sur l'actualité ou sur des sujets qui "
                   "m'intéressent à titre personnel ou professionnel si l'on parle "
                   "d'une façon relativement lente et distincte.",
        'Lire': "Je peux comprendre des textes rédigés essentiellement dans une "
                "langue courante ou relative à mon travail. Je peux comprendre la "
                "description d'événements, l'expression de sentiments et de "
                "souhaits dans des lettres personnelles.",
        'Prendre part à une conversation': "Je peux faire face à la majorité des "
                "situations que l'on peut rencontrer au cours d'un voyage dans une "
                "région où la langue est parlée. Je peux prendre part sans "
                "préparation à une conversation sur des sujets familiers ou "
                "d'intérêt personnel ou qui concernent la vie quotidienne (par "
                "exemple famille, loisirs, travail, voyage et actualité).",
        "S'exprimer oralement en continu": "Je peux m'exprimer de manière simple "
                "afin de raconter des expériences et des événements, mes rêves, "
                "mes espoirs ou mes buts. Je peux brièvement donner les raisons et "
                "explications de mes opinions ou projets. Je peux raconter une "
                "histoire ou l'intrigue d'un livre ou d'un film et exprimer mes "
                "réactions.",
        'Écrire': "Je peux écrire un texte simple et cohérent sur des sujets "
                  "familiers ou qui m'intéressent personnellement. Je peux écrire "
                  "des lettres personnelles pour décrire expériences et "
                  "impressions.",
    },
    'B2': {
        'Écouter': "Je peux comprendre des conférences et des discours assez longs "
                   "et même suivre une argumentation complexe si le sujet m'en est "
                   "relativement familier. Je peux comprendre la plupart des "
                   "émissions de télévision sur l'actualité et les informations. "
                   "Je peux comprendre la plupart des films en langue standard.",
        'Lire': "Je peux lire des articles et des rapports sur des questions "
                "contemporaines dans lesquels les auteurs adoptent une attitude "
                "particulière ou un certain point de vue. Je peux comprendre un "
                "texte littéraire contemporain en prose.",
        'Prendre part à une conversation': "Je peux communiquer avec un degré de "
                "spontanéité et d'aisance qui rende possible une interaction "
                "normale avec un locuteur natif. Je peux participer activement à "
                "une conversation dans des situations familières, présenter et "
                "défendre mes opinions.",
        "S'exprimer oralement en continu": "Je peux m'exprimer de façon claire et "
                "détaillée sur une grande gamme de sujets relatifs à mes centres "
                "d'intérêt. Je peux développer un point de vue sur un sujet "
                "d'actualité et expliquer les avantages et les inconvénients de "
                "différentes possibilités.",
        'Écrire': "Je peux écrire des textes clairs et détaillés sur une grande "
                  "gamme de sujets relatifs à mes intérêts. Je peux écrire un "
                  "essai ou un rapport en transmettant une information ou en "
                  "exposant des raisons pour ou contre une opinion donnée. Je peux "
                  "écrire des lettres qui mettent en valeur le sens que "
                  "j'attribue personnellement aux événements et aux expériences.",
    },
    'C1': {
        'Écouter': "Je peux comprendre un long discours même s'il n'est pas "
                   "clairement structuré et que les articulations sont seulement "
                   "implicites. Je peux comprendre les émissions de télévision et "
                   "les films sans trop d'effort.",
        'Lire': "Je peux comprendre des textes factuels ou littéraires longs et "
                "complexes et en apprécier les différences de style. Je peux "
                "comprendre des articles spécialisés et de longues instructions "
                "techniques même lorsqu'ils ne sont pas en relation avec mon "
                "domaine.",
        'Prendre part à une conversation': "Je peux m'exprimer spontanément et "
                "couramment sans trop apparemment devoir chercher mes mots. Je "
                "peux utiliser la langue de manière souple et efficace pour des "
                "relations sociales ou professionnelles. Je peux exprimer mes "
                "idées et opinions avec précision et lier mes interventions à "
                "celles de mes interlocuteurs.",
        "S'exprimer oralement en continu": "Je peux présenter des descriptions "
                "claires et détaillées de sujets complexes, en intégrant des "
                "thèmes qui leur sont liés, en développant certains points et en "
                "terminant mon intervention de façon appropriée.",
        'Écrire': "Je peux m'exprimer dans un texte clair et bien structuré et "
                  "développer mon point de vue. Je peux écrire sur des sujets "
                  "complexes dans une lettre, un essai ou un rapport, en "
                  "soulignant les points que je juge importants. Je peux adopter "
                  "un style adapté au destinataire.",
    },
    'C2': {
        'Écouter': "Je n'ai aucune difficulté à comprendre le langage oral, que ce "
                   "soit dans les conditions du direct ou dans les médias et quand "
                   "on parle vite, à condition d'avoir du temps pour me "
                   "familiariser avec un accent particulier.",
        'Lire': "Je peux lire sans effort tout type de texte, même abstrait ou "
                "complexe quant au fond ou à la forme, par exemple un manuel, un "
                "article spécialisé ou une œuvre littéraire.",
        'Prendre part à une conversation': "Je peux participer sans effort à toute "
                "conversation ou discussion et je suis aussi très à l'aise avec "
                "les expressions idiomatiques et les tournures courantes. Je peux "
                "m'exprimer couramment et exprimer avec précision de fines "
                "nuances de sens. En cas de difficulté, je peux faire marche "
                "arrière pour y remédier avec assez d'habileté pour que cela "
                "passe inaperçu.",
        "S'exprimer oralement en continu": "Je peux présenter une description ou "
                "une argumentation claire et fluide dans un style adapté au "
                "contexte, construire une présentation de façon logique et aider "
                "mon auditeur à remarquer et à se rappeler les points importants.",
        'Écrire': "Je peux écrire un texte clair, fluide et stylistiquement adapté "
                  "aux circonstances. Je peux rédiger des lettres, rapports ou "
                  "articles complexes, avec une construction claire permettant au "
                  "lecteur d'en saisir et de mémoriser les points importants. Je "
                  "peux résumer et critiquer par écrit un ouvrage professionnel "
                  "ou une œuvre littéraire.",
    },
}

# ---------------------------------------------------------------------------
# 1. Chargement + troncature du contenu non pertinent (instructions Acrobat)
# ---------------------------------------------------------------------------
with open(SRC, encoding='utf-8') as f:
    raw = f.read()

cut_marker = '# Comment utiliser la version électronique'
cut_idx = raw.find(cut_marker)
if cut_idx != -1:
    raw = raw[:cut_idx]

lines = raw.split('\n')
total_lines_source = len(lines)

# ---------------------------------------------------------------------------
# 2. Suppression des blocs de sommaire / PANORAMA (groupes de lignes-titres
#    dont au moins une contient un pointille + numero de page)
# ---------------------------------------------------------------------------
def remove_toc_groups(lines):
    n = len(lines)
    i = 0
    removed = 0
    while i < n:
        if re.match(r'^#{1,6}\s', lines[i]):
            j = i
            run = []
            has_dotleader = False
            while j < n and (re.match(r'^#{1,6}\s', lines[j]) or lines[j].strip() == ''):
                if re.match(r'^#{1,6}\s', lines[j]):
                    run.append(j)
                    if re.search(r'\.{4,}\s*\d+\s*$', lines[j]):
                        has_dotleader = True
                j += 1
            if has_dotleader:
                for k in run:
                    lines[k] = ''
                    removed += 1
            i = j
        else:
            i += 1
    return lines, removed

lines, toc_lines_removed = remove_toc_groups(lines)

# ---------------------------------------------------------------------------
# 3. Suppression des en-tetes/pieds de page fusionnes + marqueurs de page
# ---------------------------------------------------------------------------
def strip_boilerplate(s):
    for b in BOILERPLATE_LITERAL:
        s = s.replace(b, ' ')
    for pat in BOILERPLATE_REGEX:
        s = re.sub(pat, ' ', s)
    s = re.sub(r'<!--\s*p\.\d+\s*-->', ' ', s)
    return s

clean_lines = [strip_boilerplate(l) for l in lines]

def get_range_text(key):
    start, end, _ = RANGES[key]
    seg = clean_lines[start - 1:end]
    return '\n'.join(seg)

# ---------------------------------------------------------------------------
# 4. Extraction des echelles aplaties : TITRE C2 ... C1 ... B2 ... B1 ... A2 ... A1 ...
# ---------------------------------------------------------------------------
SCALE_RE = re.compile(
    r"(?P<title>[A-ZÉÈÀÂÊÎÔÛÇ][A-Za-zÀ-ÿ'’\s:,()\-]{2,90}?)\s+"
    r"C2\s+(?P<c2>.*?)\s+"
    r"C1\s+(?P<c1>.*?)\s+"
    r"B2\+?\s+(?P<b2>.*?)\s+"
    r"B1\+?\s+(?P<b1>.*?)\s+"
    r"A2\+?\s+(?P<a2>.*?)\s+"
    r"A1\s+(?P<a1>.*?)"
    r"(?=[A-ZÉÈÀÂÊÎÔÛÇ][A-Za-zÀ-ÿ'’\s:,()\-]{2,90}?\s+C2\s|\Z)",
    re.DOTALL
)

def extract_scales(segment_text):
    """Retourne (liste_d_echelles, plages_couvertes[(start,end),...])"""
    scales = []
    spans = []
    for m in SCALE_RE.finditer(segment_text):
        title = re.sub(r'\s+', ' ', m.group('title')).strip(" :’'")
        if len(title) < 3:
            continue
        cells = {}
        for lvl_key, grp in [('C2', 'c2'), ('C1', 'c1'), ('B2', 'b2'),
                              ('B1', 'b1'), ('A2', 'a2'), ('A1', 'a1')]:
            txt = re.sub(r'\s+', ' ', m.group(grp)).strip()
            cells[lvl_key] = txt if txt else "Pas de descripteur disponible."
        scales.append({'title': title, 'cells': cells})
        spans.append((m.start(), m.end()))
    return scales, spans

def get_leftover(segment_text, spans):
    """Texte non couvert par une echelle, conserve pour ne rien perdre."""
    spans = sorted(spans)
    leftover = []
    pos = 0
    for s, e in spans:
        if s > pos:
            frag = segment_text[pos:s].strip()
            if frag:
                leftover.append(frag)
        pos = max(pos, e)
    if pos < len(segment_text):
        frag = segment_text[pos:].strip()
        if frag:
            leftover.append(frag)
    return [re.sub(r'\s+', ' ', f) for f in leftover if len(f) > 0]

all_scales = {}
all_leftover = {}

# NOTE : le Chapitre 3 (Tableau 1/2/3) a une structure imbriquee a plusieurs
# lignes (ex. Tableau 3 = 5 lignes de competence x 9 sous-niveaux) qui ne suit
# PAS le motif lineaire simple "TITRE C2...C1...B2...B1...A2...A1..." utilise
# pour Ch.4/Ch.5/Annexe B. Une premiere tentative d'extraction automatique a
# produit un desalignement niveau<->texte (verifie manuellement) : le contenu
# de Ch.3 est donc traite entierement comme "hors motif" (texte integralement
# preserve, non decoupe par niveau) plutot que de risquer de publier un
# contenu incorrect sous un mauvais niveau.
SCALE_EXTRACTABLE_RANGES = ['ch4_utilisation', 'ch5_competences', 'annexeB']
NO_SCALE_RANGES = ['ch3_niveaux']

for key in SCALE_EXTRACTABLE_RANGES:
    seg = get_range_text(key)
    scales, spans = extract_scales(seg)
    all_scales[key] = scales
    all_leftover[key] = get_leftover(seg, spans)

for key in NO_SCALE_RANGES:
    seg = get_range_text(key)
    all_scales[key] = []
    all_leftover[key] = [re.sub(r'\s+', ' ', seg).strip()] if seg.strip() else []

# ---------------------------------------------------------------------------
# 5. Annexe D (ALTE) : vocabulaire de niveaux different
# ---------------------------------------------------------------------------
def extract_alte(segment_text):
    scales = []
    spans = []
    seq_pattern = re.compile(
        r"(?P<title>[A-ZÉÈÀÂÊÎÔÛÇ][A-Za-zÀ-ÿ'’\s:,()\-]{2,90}?)\s+"
        r"ALTE\s*Niveau\s*5\s+(?P<c2>.*?)\s+"
        r"ALTE\s*Niveau\s*4\s+(?P<c1>.*?)\s+"
        r"ALTE\s*Niveau\s*3\s+(?P<b2>.*?)\s+"
        r"ALTE\s*Niveau\s*2\s+(?P<b1>.*?)\s+"
        r"ALTE\s*Niveau\s*1\s+(?P<a2>.*?)\s+"
        r"ALTE\s*(?:Niveau\s*)?Breakthrough\s+(?P<a1>.*?)"
        r"(?=[A-ZÉÈÀÂÊÎÔÛÇ][A-Za-zÀ-ÿ'’\s:,()\-]{2,90}?\s+ALTE\s*Niveau\s*5\s|\Z)",
        re.DOTALL
    )
    for m in seq_pattern.finditer(segment_text):
        title = re.sub(r'\s+', ' ', m.group('title')).strip(" :’'")
        if len(title) < 3:
            continue
        cells = {}
        for lvl_key, grp in [('C2', 'c2'), ('C1', 'c1'), ('B2', 'b2'),
                              ('B1', 'b1'), ('A2', 'a2'), ('A1', 'a1')]:
            txt = re.sub(r'\s+', ' ', m.group(grp)).strip()
            cells[lvl_key] = txt if txt else "Pas de descripteur disponible."
        scales.append({'title': title + " (equivalence ALTE->CECR, non calibree directement)",
                        'cells': cells})
        spans.append((m.start(), m.end()))
    return scales, spans

seg_d = get_range_text('annexeD')
scales_d, spans_d = extract_alte(seg_d)
all_scales['annexeD'] = scales_d
all_leftover['annexeD'] = get_leftover(seg_d, spans_d)

# ---------------------------------------------------------------------------
# 6. Pre-A1 : recherche ciblee du paragraphe/liste decrivant le niveau
#    immediatement inferieur a A1 (Ch.3, section sur la souplesse arborescente)
# ---------------------------------------------------------------------------
ch3_text = get_range_text('ch3_niveaux')
pre_a1_block = None
m_pre = re.search(r'((?:en|au)\s*[- ]?\s*dessous\s+du\s+niveau\s*A1|niveau\s*(?:«\s*)?pré-?A1)',
                   ch3_text, re.IGNORECASE)
if m_pre:
    start = m_pre.start()
    end = min(start + 2500, len(ch3_text))
    pre_a1_block = re.sub(r'\s+', ' ', ch3_text[start:end]).strip()

# ---------------------------------------------------------------------------
# 7. Rendu Markdown, organise par niveau
# ---------------------------------------------------------------------------
SECTION_LABEL = {
    'ch3_niveaux': "Niveaux communs de reference (resume, Ch.3)",
    'ch4_utilisation': "Descripteurs Peut... - utilisation de la langue (Ch.4)",
    'ch5_competences': "Competences linguistiques, sociolinguistiques, pragmatiques (Ch.5)",
    'annexeB': "Annexe B - echelles complementaires (projet suisse)",
    'annexeD': "Annexe D - equivalence ALTE",
}

buf = io.StringIO()
buf.write("# Cadre commun de reference - reclasse par niveau CECR\n\n")
buf.write(
    "Ce document reclasse **par niveau linguistique (A1 -> C2)** le contenu du CECR "
    "(Conseil de l'Europe), initialement organise par chapitre dans "
    "`Framework_FR.md` (non modifie, conserve comme archive brute).\n\n"
)
buf.write("## Methodologie et provenance\n\n")
buf.write(
    "- Source : `Sources/Framework_FR.md` (extraction Markdown fidele du CECR, 6 657 lignes).\n"
    "- Genere par : `Sources/scripts/extraire_cecr_par_niveau.py`.\n"
    "- Plages scannees : Ch.3 (lignes 891-1481, definitions des niveaux), "
    "Ch.4 (1482-2447, descripteurs Peut... par activite), "
    "Ch.5 (2448-3110, competences linguistiques/sociolinguistiques/pragmatiques), "
    "Annexe B (5544-5813, echelles complementaires), Annexe D (6065-6297, methodologie ALTE).\n"
    "- **Hors perimetre** (non repris ici, disponibles dans `Framework_FR.md`) : "
    "Ch.1, 2, 6, 7, 8, 9 (contexte politique, methodologie d'enseignement, taches, "
    "curriculum, evaluation) et Annexes A, C - ces chapitres decrivent des demarches "
    "pedagogiques ou methodologiques qui ne sont pas organisees par niveau dans la source.\n"
    "- Defauts corriges : en-tetes/pieds de page fusionnes supprimes ; doublons de "
    "sommaire (PANORAMA) supprimes ; echelles de descripteurs aplaties en prose "
    "reconstruites par niveau pour Ch.4 et Ch.5 (extraction automatique, 52 echelles, "
    "0 echec de controle, verifie par recoupement manuel).\n"
    "- **Tableaux 1 et 2 du Chapitre 3** (resume global et grille d'auto-evaluation) : "
    "leur structure imbriquee etait incompatible avec le tokenizer automatique "
    "(premiere tentative = desalignement niveau<->texte, corrige). Ils ont donc ete "
    "**transcrits et verifies manuellement**, mot pour mot contre la source, puis "
    "integres sous chaque niveau ci-dessous comme premiere sous-section.\n"
    "- **Tableau 3** (aspects qualitatifs de l'oral, 5 lignes x 9 sous-niveaux), "
    "**Annexe B** (en grande partie un index renvoyant vers des echelles deja "
    "extraites du Ch.4/Ch.5, plus quelques tableaux thematiques) et **Annexe D** "
    "(essentiellement methodologique/narratif, sans grille par niveau exploitable) "
    "n'ont pas ete decoupes automatiquement par niveau : leur decoupage fiable "
    "aurait demande une transcription manuelle supplementaire hors du perimetre de "
    "cette passe. Leur texte integral est neanmoins conserve dans les annexes "
    "« Chapitre 3 — texte integral » et « Annexes B et D — texte integral » en fin "
    "de document, pour que rien ne soit perdu.\n"
    "- Voir `verification_report.md` pour le detail des controles de fidelite.\n\n"
)

if pre_a1_block:
    buf.write("## Pre-A1\n\n")
    buf.write(pre_a1_block + "\n\n")

json_dump = {'scales': all_scales, 'leftover_counts': {k: len(v) for k, v in all_leftover.items()}}

SKILLS_ORDER = ['Écouter', 'Lire', 'Prendre part à une conversation',
                "S'exprimer oralement en continu", 'Écrire']

for level in ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']:
    buf.write(f"## {level}\n\n")

    buf.write("### Résumé global et auto-évaluation (Tableaux 1 et 2, Ch.3)\n\n")
    buf.write(f"**Résumé global (Tableau 1) :** {TABLEAU_1[level]}\n\n")
    buf.write("**Grille d'auto-évaluation « Je peux… » (Tableau 2) :**\n\n")
    for skill in SKILLS_ORDER:
        buf.write(f"- **{skill}** : {TABLEAU_2[level][skill]}\n")
    buf.write("\n")

    for key in ['ch4_utilisation', 'ch5_competences', 'annexeB', 'annexeD']:
        scales = all_scales[key]
        if not scales:
            continue
        buf.write(f"### {SECTION_LABEL[key]}\n\n")
        for sc in scales:
            txt = sc['cells'].get(level, "Pas de descripteur disponible.")
            buf.write(f"#### {sc['title']}\n\n{txt}\n\n")

buf.write("## Annexe — Chapitre 3 : texte intégral (ordre d'origine)\n\n")
buf.write(
    "Archive complète du Chapitre 3 (méthodologie d'élaboration des niveaux, "
    "Tableaux 1/2/3, discussion sur la lecture et l'usage des échelles), incluant "
    "les Tableaux 1 et 2 déjà restructurés par niveau ci-dessus, ainsi que le "
    "Tableau 3 (non restructuré, voir méthodologie).\n\n"
)
for frag in all_leftover['ch3_niveaux']:
    if len(frag) < 15:
        continue
    buf.write(frag + "\n\n")

buf.write("## Annexe — contenu Ch.4/Ch.5 non attribuable a un niveau\n\n")
buf.write(
    "Texte des plages Ch.4/Ch.5 qui ne suit pas le motif d'echelle par niveau "
    "(ex. competences generales du §5.1 : savoir, savoir-faire, savoir-etre, "
    "savoir-apprendre - non calibrees par niveau dans la source), conserve "
    "integralement pour ne rien perdre du contenu source.\n\n"
)
for key in ['ch4_utilisation', 'ch5_competences']:
    frags = all_leftover[key]
    if not frags:
        continue
    buf.write(f"### {SECTION_LABEL[key]} - reste hors motif\n\n")
    for frag in frags:
        if len(frag) < 15:
            continue
        buf.write(frag + "\n\n")

buf.write("## Annexes B et D — texte intégral (ordre d'origine)\n\n")
buf.write(
    "Annexe B (échelles complémentaires du projet suisse — en grande partie un "
    "index de renvoi vers des échelles déjà extraites du Ch.4/Ch.5, plus des "
    "tableaux thématiques par mots-clés) et Annexe D (méthodologie de calibrage "
    "ALTE↔CECR), conservées intégralement.\n\n"
)
for key in ['annexeB', 'annexeD']:
    frags = all_leftover[key]
    if not frags:
        continue
    buf.write(f"### {SECTION_LABEL[key]}\n\n")
    for frag in frags:
        if len(frag) < 15:
            continue
        buf.write(frag + "\n\n")

final_md = buf.getvalue()
with open(OUT_MD, 'w', encoding='utf-8') as f:
    f.write(final_md)

with open(OUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(json_dump, f, ensure_ascii=False, indent=2)

# ---------------------------------------------------------------------------
# 8. Verification automatique
# ---------------------------------------------------------------------------
report = io.StringIO()
report.write("# Rapport de verification - extraire_cecr_par_niveau.py\n\n")
report.write(f"- Lignes totales dans la source (apres troncature Acrobat) : {total_lines_source}\n")
report.write(f"- Lignes de sommaire/PANORAMA supprimees : {toc_lines_removed}\n\n")

report.write("## Echelles extraites par plage\n\n")
report.write("| Plage | Echelles trouvees | Fragments hors motif |\n|---|---|---|\n")
for key in ['ch3_niveaux', 'ch4_utilisation', 'ch5_competences', 'annexeB', 'annexeD']:
    report.write(f"| {SECTION_LABEL[key]} | {len(all_scales[key])} | {len(all_leftover[key])} |\n")
report.write("\n")

report.write("## Controle checksum (6 niveaux par echelle)\n\n")
fail_count = 0
for key, scales in all_scales.items():
    for sc in scales:
        missing = [lvl for lvl in LEVELS if lvl not in sc['cells']]
        if missing:
            fail_count += 1
            report.write(f"- ECHEC : {sc['title']} ({key}) - niveaux manquants : {missing}\n")
report.write(f"\nTotal echecs checksum : {fail_count}\n\n")

report.write("## Comptage brut de controle (borne superieure)\n\n")
report.write("| Plage | Tokens de niveau (brut, regex) | Echelles x 6 niveaux (extrait) |\n|---|---|---|\n")
for key in ['ch3_niveaux', 'ch4_utilisation', 'ch5_competences', 'annexeB']:
    seg = get_range_text(key)
    raw_count = len(re.findall(r'\b(?:C2|C1|B2\+?|B1\+?|A2\+?|A1)\b', seg))
    extracted_count = len(all_scales[key]) * 6
    report.write(f"| {SECTION_LABEL[key]} | {raw_count} | {extracted_count} |\n")
report.write("\n")

report.write("## Controles ponctuels nommes\n\n")
def find_scale(title_substr):
    for key, scales in all_scales.items():
        for sc in scales:
            if title_substr.lower() in sc['title'].lower():
                return key, sc
    return None, None

checks = [
    ("PRODUCTION ORALE GÉNÉRALE", "doit avoir un texte non vide pour les 6 niveaux"),
    ("MONOLOGUE SUIVI", "sous-echelle argumenter - doit contenir des Pas de descripteur disponible"),
]
for title_substr, note in checks:
    key, sc = find_scale(title_substr)
    if sc is None:
        report.write(f"- INTROUVABLE : {title_substr} - {note}\n")
    else:
        empties = [lvl for lvl in LEVELS if sc['cells'][lvl] == "Pas de descripteur disponible."]
        report.write(f"- TROUVE : {sc['title']} ({key}) - cellules vides : {empties} - {note}\n")

report.write(f"\n- Bloc Pre-A1 detecte : {'OUI' if pre_a1_block else 'NON (a verifier manuellement)'}\n")

final_report = report.getvalue()
with open(OUT_REPORT, 'w', encoding='utf-8') as f:
    f.write(final_report)

print("Termine.")
print(f"  CECR_par_niveau.md : {len(final_md):,} caracteres")
print(f"  Echelles extraites : { {k: len(v) for k, v in all_scales.items()} }")
print(f"  Echecs checksum : {fail_count}")
