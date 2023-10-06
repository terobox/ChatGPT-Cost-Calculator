const modalLinks = document.querySelectorAll('.modal-link');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const modals = document.querySelectorAll('.modal');

modalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = link.getAttribute('href');
    const modal = document.querySelector(target);
    modal.style.display = 'flex';
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    modals.forEach((modal) => {
      modal.style.display = 'none';
    });
  }
});