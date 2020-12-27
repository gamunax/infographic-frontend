import { Image } from './image';

export interface Tag {
  id: string;
  name: string;
  order: number;
  image: Image;
}
