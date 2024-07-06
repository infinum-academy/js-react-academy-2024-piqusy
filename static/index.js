let reviews = [];

function renderReviews(reviews) {
  const reviewList = document.getElementById('review-listing');
  reviewList.innerHTML = '';

  reviews.forEach((review) => {
    const reviewSingleElement = createReviewElement(review);
    reviewList.appendChild(reviewSingleElement);
  });

  getAverageRating(reviews);
}

function createReviewElement(review) {
  const reviewSingleElement = document.createElement('div');
  reviewSingleElement.classList.add('review__single');

  const reviewSingleComment = document.createElement('div');
  reviewSingleComment.classList.add('review__comment');
  reviewSingleComment.innerHTML = review.content;

  const reviewSingleRatingWrapper = document.createElement('div');
  reviewSingleRatingWrapper.classList.add('review__rating-wrapper');

  const reviewSingleRating = document.createElement('div');
  reviewSingleRating.classList.add('review__rating');
  reviewSingleRating.textContent = `Rating: ${review.rating} / 5`;

  const reviewSingleStarWrapper = document.createElement('div');
  reviewSingleStarWrapper.classList.add('review__star-wrapper');

  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.classList.add('rating__star');
    if (i < review.rating) {
      star.classList.add('review__star--active');
    }
    reviewSingleStarWrapper.appendChild(star);
  }

  const reviewSingleDeleteButton = document.createElement('button');
  reviewSingleDeleteButton.classList.add('review__delete');
  reviewSingleDeleteButton.textContent = 'Delete';
  reviewSingleDeleteButton.addEventListener('click', () => {
    reviews = reviews.filter((r) => r !== review);
    renderReviews(reviews);
    saveReviews(reviews);
  });

  reviewSingleElement.appendChild(reviewSingleComment);
  reviewSingleElement.appendChild(reviewSingleRatingWrapper);
  reviewSingleRatingWrapper.appendChild(reviewSingleRating);
  reviewSingleRatingWrapper.appendChild(reviewSingleStarWrapper);
  reviewSingleElement.appendChild(reviewSingleDeleteButton);

  return reviewSingleElement;
}

function loadReviews() {
  const reviewsString = localStorage.getItem('reviews');
  if (reviewsString) {
    reviews = JSON.parse(reviewsString);
    return reviews;
  }

  return [];
}

function saveReviews(reviews) {
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

function addReview() {
  const reviewInput = document.getElementById('movie-review');
  const newReviewContent = reviewInput?.value;

  const reviewRadio = document.querySelector('input[name="rating"]:checked');
  const newReviewValue = reviewRadio?.value;

  if (!newReviewContent || !newReviewValue) {
    return;
  }
  const newReview = {
    content: newReviewContent,
    rating: newReviewValue,
  };

  reviews.push(newReview);
  renderReviews(reviews);

  reviewInput.value = '';
  reviewRadio.checked = false;

  saveReviews(reviews);
}

function getAverageRating(reviews) {
  const ratings = reviews.map((review) => parseInt(review.rating));
  const averageRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;
  const movieRatingElement = document.getElementById('movie-rating');
  movieRatingElement.innerHTML = `Average rating: ${averageRating.toFixed(0)} / 5`;

}

reviews = loadReviews();
renderReviews(reviews);
