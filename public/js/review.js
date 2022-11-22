const submitReview = async (rating, review, tourId) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `http://localhost:3000/api/v1/tours/${tourId}/reviews`,
      data: {
        rating,
        review
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Review added successfully!🎉');
      window.setTimeout(() => {
        location.reload();
      }, 2000);
    }
  } catch (err) {
    if (err.response.data.message.includes('duplicate'))
      return showAlert('error', 'You have already added a review!🙂');
    showAlert('error', err.response.data.message);
  }
};

document.querySelector('.form--review').addEventListener('submit', e => {
    e.preventDefault();
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    const tourId = header.dataset.tourId;
    submitReview(rating, review, tourId);
});

