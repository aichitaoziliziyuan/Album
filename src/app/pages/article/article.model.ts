import { image } from 'src/app/shared/image.model';

export interface Article {
  id: number;
  articleTitle: string;
  articleContent: string;
  images: image[];
  select?: boolean;
}
