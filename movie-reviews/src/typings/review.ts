interface IReviewList {
  reviews: Array<IReview>;
}

interface IReview {
  email?: string;
  avatar?: string | undefined;
  rating?: number;
  comment?: string;
}
