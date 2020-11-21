export interface Infographic {
  id: string;
  title: string;
  url: string;
  shared: number;
  views: number;
  votes: number;
  tag: InfographicTags;
  images: InfographicImages[];
}

export interface InfographicImages {
  id: string;
  name: string;
  url: string;
  alternativeText: string;
}

export interface InfographicTags {
  id: string;
  image: InfographicImages;
  name: string;
}