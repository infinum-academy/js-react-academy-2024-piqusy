let reviews = [];

function renderReviews(reviews) {
  const reviewList = document.getElementById('review-listing');
  reviewList.innerHTML = '';

  reviews.forEach((review) => {
    const reviewSingleElement = createReviewElement(review);
    reviewList.appendChild(reviewSingleElement);
  });
}

function createReviewElement(review) {
  const reviewSingleElement = document.createElement('div');
  reviewSingleElement.classList.add('review__single');

  const reviewSingleComment = document.createElement('div');
  reviewSingleComment.classList.add('review__comment');
  reviewSingleComment.innerHTML = review.content;

  const reviewSingleRating = document.createElement('div');
  reviewSingleRating.classList.add('review__rating');
  reviewSingleRating.textContent = `Rating: ${review.rating} / 5`;

  reviewSingleElement.appendChild(reviewSingleComment);
  reviewSingleElement.appendChild(reviewSingleRating);

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
  const newReviewContent = reviewInput.value;

  const reviewRadio = document.querySelector('input[name="rating"]:checked');
  const newReviewValue = reviewRadio.value;

  if (!newReviewContent) {
    return;
  }
  const newReview = {
    content: newReviewContent,
    rating: newReviewValue
  };

  reviews.push(newReview);
  renderReviews(reviews);

  reviewInput.value = '';
  reviewRadio.checked = false;

  saveReviews(reviews);
}

reviews = loadReviews();
renderReviews(reviews);
