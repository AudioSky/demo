function show(){
   let appl = document.querySelector('.cont-appl');
   let elem = document.querySelectorAll('.cont-appl .progress-barer');
   
   if( window.innerHeight  >= appl.getBoundingClientRect().top ){
      
     for (let i = 0; i < elem.length; i++){
          function countd(){  
            elem[i].classList.add('active');
          }  
     setTimeout(countd, i*200); 
     }      
  } 
}

document.addEventListener('scroll', show);
window.addEventListener('load', show);