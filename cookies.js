const cookieNotification = document.querySelector('.cookie-notification');
const cookieAccept = document.querySelector('#cookie-accept');

if (!localStorage.getItem('cookieAccepted')) {
  cookieNotification.style.display = 'block';
}

cookieAccept.addEventListener('click', () => {
  localStorage.setItem('cookieAccepted', true);
  cookieNotification.style.display = 'none';
});