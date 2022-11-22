const logout = async () => {
    try {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:3000/api/v1/users/logout'
      });
      console.log(res.data);
      if (res.data.status === 'success') location.reload(true);
    } catch (err) {
      showAlert('error', 'Error logging out! Try again.');
    }
};
document.querySelector('.nav__el--logout').addEventListener('click', e => {
    logout();
});