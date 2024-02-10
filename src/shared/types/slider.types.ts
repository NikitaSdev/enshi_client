export interface IAnimeSlider {
  id: number;
  image_url: string | null;
  preview_image_url: string | null;
  title: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  anime_id: number;
  rating: number;
  season: number;
}
