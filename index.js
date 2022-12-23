const leftBtn = document.getElementById('left-btn');

leftBtn.addEventListener('click', () => {
  document.getElementById('scroll-content').scrollLeft += 100;
});