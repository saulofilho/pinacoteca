export type ArtisticMovementId =
  | 'renascimento'
  | 'maneirismo'
  | 'barroco'
  | 'ouro-holandes'
  | 'rococo'
  | 'neoclassicismo'
  | 'romantismo'
  | 'realismo';

export interface Movement {
  id: ArtisticMovementId;
  name: string;
  century: string;
  period: string;
  summary: string;
  fullHistory: string;
  philosophy: string;
  keyCharacteristics: string[];
  pioneeringMasters: string[];
  famousMasterpieces: string[];
  contrastWithOther: string;
  bannerImage: string;
  colorAccent: string;
}

export interface Hotspot {
  id: string;
  xPercent: number; // 0 to 100
  yPercent: number; // 0 to 100
  title: string;
  tag: 'Técnica' | 'Simbolismo' | 'Composição' | 'História';
  description: string;
}

export interface Artwork {
  id: string;
  title: string;
  originalTitle?: string;
  artist: string;
  artistLifespan: string;
  year: string;
  movementId: ArtisticMovementId;
  museum: string;
  city: string;
  medium: string;
  dimensionsCm: { width: number; height: number };
  imageUrl: string;
  thumbUrl: string;
  description: string;
  audioGuideTranscript: string;
  hotspots: Hotspot[];
  historicalContext: string;
  techniqueAnalysis: string;
  symbolismAnalysis: string;
  paletteColors: string[];
}

export interface CuratedTour {
  id: string;
  title: string;
  subtitle: string;
  curator: string;
  durationMinutes: number;
  artworkIds: string[];
  bannerImage: string;
  introNarration: string;
  conclusionNarration: string;
  triviaQuiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export type GalleryViewMode = 'grid' | 'spotlight' | 'rooms';
export type AppTab = 'galeria' | 'movimentos' | 'tours' | 'ar' | 'offline';
