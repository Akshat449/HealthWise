const hearts=document.querySelectorAll('.far')
const a=document.querySelectorAll('.medicine-actions');
const span=document.querySelector('span');


hearts.forEach((heart,index)=>{
heart.addEventListener('click',()=>{
  a[index].classList.toggle('heart');
})
})