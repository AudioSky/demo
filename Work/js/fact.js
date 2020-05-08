function xer(){
	
  let nav = document.querySelector('.fact-a');

   
   //if (window.pageYOffset + window.innerHeight - 100 <= nav.offsetTop ){ 
     if (window.innerHeight  >= nav.getBoundingClientRect().top){ 
     function setCounter() { 

       let curr = 0;
       let curr_two = 0;
       let curr_three = 0;
       let curr_fo = 0;
 
       let elem = document.getElementById("number-one");
       let elem_two = document.getElementById("number-two");
       let elem_three = document.getElementById("number-three");
       let elem_fo = document.getElementById("number-fo");
  
       let end = +elem.dataset.count;
       let end_two = +elem_two.dataset.two;
       let end_three = + elem_three.dataset.three;
       let end_fo = + elem_fo.dataset.fo;

//------------Первое число------------------------------- 
       let interval = setInterval(count, 5);
    
       function count(){
          if( curr >= end ) {

             clearInterval(interval);

             elem.textContent = end;
             
          }else{

             elem.textContent = ( curr += 9 );
   
          }//---конец  if
                   
       }//---конец function count()  

       count();
 //==================================================== 
 
//-------------Второе число-------------------------------
     let intervald = setInterval(countd, 20);

     function countd(){
        if( curr_two >= end_two) {

            clearInterval(intervald);

            elem_two.textContent = end_two;
      
        }else{
     
            elem_two.textContent = (  curr_two += 9 );
     
        }//---конец  if
                 
      }//---конец function countd()

      countd();
 //==================================================== 

 //-------------Третье число-------------------------------
     let intervalthree = setInterval(counthree, 20);

     function counthree(){
        if( curr_three >= end_three) {

           clearInterval(intervalthree);
     
           elem_three.textContent = end_three;

        }else{
  
          elem_three.textContent = ( curr_three += 8 );

        }//---конец  if
             
      }//---конец function counthree()
      
      counthree();
//==================================================== 

 //-------------Четвертое число-------------------------------
     let intervalfo = setInterval(countfo, 20);

     function countfo(){

       if( curr_fo >= end_fo) {

         clearInterval(intervalfo);
 
         elem_fo.textContent = end_fo;

      }else{

        elem_fo.textContent = ( curr_fo += 7 );

      }//---конец  if
         
     }//---конец function countfo()
  
     countfo();
//==================================================== 

   }//---конец functionsetCounter()

   setCounter();
   document.removeEventListener('scroll', xer);
   
  }//---конец  if (window.innerHeight  >= nav.getBoundingClientRect().bottom)
  
}//---конец function xer()  

document.addEventListener('scroll', xer);
window.addEventListener('load', xer);


