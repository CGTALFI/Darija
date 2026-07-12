export interface UserProfile {
  id: string;
  displayName: string;
  /** Référence vers un avatar SVG local — pas d'upload. */
  avatarKey: string;
  createdAt: string;
  isGuest: boolean;
}
