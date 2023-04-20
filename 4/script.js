const container = document.querySelector('.container');
const span = document.querySelectorAll('span');

container.addEventListener('click', () => {
  span.forEach((res) => {
    res.classList.toggle('mover');
  });
});
