# Le Palais du Darija

Application narrative immersive d'apprentissage du darija marocain. Le joueur incarne un
voyageur explorant un palais marocain abandonné ; il progresse dans l'apprentissage de la
langue en explorant le palais, jusqu'à atteindre 100 % de progression et révéler le secret
qu'il renferme.

## Modules

- **Les Chroniques du Royaume** — culture, histoire, géographie, gastronomie du Maroc
- **Salle des Explorateurs** — profil, progression, badges, objectifs CECRL
- **L'Académie de la Darija** — cours A1→C2 (phonétique, grammaire, vocabulaire, dialogues, écriture, exercices)
- **La Bibliothèque des Trésors** — ressources externes (vidéos, podcasts, liens)

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · progression locale
(`localStorage`), architecture prête pour Supabase.

## Développement

```bash
npm install
npm run dev
```

## Historique

Le manuel HTML/CSS statique dont ce projet est issu est archivé dans
[`legacy-html-book/`](legacy-html-book/) (contenu source pour la migration des cours).

## Déploiement

Cible : Netlify (voir `netlify.toml`).
