export interface IShowReview {
  id: string;
  title: string;
  showsList: Array<IShowReview>;
}

export interface IShow {
  title?: string;
  description?: string;
  averageRating?: number | undefined;
  imageUrl?: string | undefined;
}
