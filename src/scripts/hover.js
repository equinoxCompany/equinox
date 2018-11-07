window.onload = function(){

  let logo = document.getElementById('wrapper');
  let day = document.getElementsByClassName('day');

  console.log(logo)

  if(logo){
    logo.addEventListener('mouseenter', () => {
    // day.style.color = 'black';
    console.log('ended')
  })
}}