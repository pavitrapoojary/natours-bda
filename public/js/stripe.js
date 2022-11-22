
const stripe = Stripe('pk_test_51M55XZSJNrqCoDcPBdK9VAO3wtzGWdCiVckdiVZ8Y79nO73fpK0vR1pZDMjWqGcZ7wrWVP4iw10lfkPYOQXT2rPO000CxsAv14');
const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    });

    // 2) Create checkout form + chanre credit card
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};

document.getElementById('book-tour').addEventListener('click', e => {
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    console.log(tourId);
    bookTour(tourId);
});
