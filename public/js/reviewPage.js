const updateReview = async (reviewId, rating, review) => {
    // return console.log(data)
    try {
      const res = await axios({
        method: 'PATCH',
        url: `http://localhost:3000/api/v1/reviews/${reviewId}`,
        data: {
          rating, review
        }
      });
      if (res.data.status === 'success') {
        showAlert('success', 'Review updated successfuly!', 2);
        window.setTimeout(() => {
          location.reload();
        }, 2000);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
};
  
const deleteReview = async reviewId => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: `http://localhost:3000/api/v1/reviews/${reviewId}`
      });
  
      if (!res.data) {
        showAlert('success', 'Review deleted successfully!', 1);
        window.setTimeout(() => location.reload(), 1000);
      }
    } catch (err) {
      showAlert('error', err.response.data.message);
    }
};
  
const reviewPage = document.getElementById('review__page');
if (reviewPage) {
    const btnDelete = document.querySelectorAll('.btn-delete');
    const btnUpdate = document.querySelectorAll('.btn-update');
    const rating = document.querySelectorAll('#rating');
    const review = document.querySelectorAll('#review');
    console.log({ rating, review });
    btnUpdate.forEach((btn, i) => {
      btn.addEventListener('click', e => {
        btn.textContent = 'Save'
        rating[i].disabled = false;
        review[i].disabled = false;
        btn.addEventListener('click', e => {
          const reviewId = btn.dataset.reviewId
          console.log(rating[i].value);
          btn.disabled = true
          btn.textContent = 'Saving...'
          updateReview(reviewId, rating[i].value, review[i].value);
        })
      })
    });
  
    btnDelete.forEach((btn, i) => {
      btn.addEventListener('click', e => {
        const reviewId = btn.dataset.reviewId
        btn.textContent = 'Removing...'
        btn.disabled = true
        deleteReview(reviewId);
      })
    })
}