export interface Infographic {
  id: string;
  title: string;
  url: string;
  shared: number;
  views: number;
  vote: number;
  infographic_photos: InfographicPhotos[]
}

export interface InfographicPhotos {
  id: string;
  title: string;
  url: string;
  image: Photos[]
}

export interface Photos {
  id: string;
  name: string;
  url: string;
}