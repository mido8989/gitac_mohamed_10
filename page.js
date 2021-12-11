let hamburger = document.querySelector('.hamburger');
let gnb = document.querySelector('.gnb');

hamburger.addEventListener('click', function(){
  gnb.classList.toggle('active');
});

let section = document.querySelector('.section1');
let carousel = document.querySelectorAll('.carousel');

let current = 0;
let next = 1;
let prev = 2;

console.log(carousel);

section.addEventListener('click', function(){

  //prev 변수 값이 carousel 개수 범위를 벗어났는지 체크
  if(prev>carousel.length-1){
    prev = 0;
  }
  // html element에 불필요한 class를 제거
  for(let i=0; i<carousel.length; i++){
    carousel[i].classList.remove('current', 'prev', 'next');
  }
  // carousel 아이템별로 올바른 class를 추가 => carousel 동작
  carousel[current].classList.add('prev');
  carousel[next].classList.add('current');
  carousel[prev].classList.add('next');
  // carousel 아이템 번호별로 rolling
  current = next;
  next = prev;
  prev++;

});