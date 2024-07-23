export interface IReviewList {
  reviews: Array<IReview>;
}

export interface IReview {
  avatar?: string | undefined;
  email?: string;
  comment?: string;
  rating?: number;
}
