const leftBtn = document.getElementById('left-btn');
const hexDots = document.querySelectorAll('.hex-dot');
const mobileHexDots = document.querySelectorAll('.mobile-hex-dot');

leftBtn.addEventListener('click', () => {
  document.getElementById('scroll-content').scrollLeft += 100;
});

hexDots.forEach(dot => {
  dot.addEventListener('click', (e) => clickCb(e,hexDots));
});

mobileHexDots.forEach(dot => {
  dot.addEventListener('click', (e) => clickCb(e,mobileHexDots));
});

function clickCb(e, dotsNodeArr) {
    let pk = e.target.getAttribute('pk');
    removeAllDots(pk,dotsNodeArr);
    e.target.classList.add('--selected');
}

function removeAllDots(pk,dotsNodeArr) {
  dotsNodeArr.forEach(dot => {
    if(dot.getAttribute('pk') == pk){
      dot.classList.remove('--selected');
    }
  });
}