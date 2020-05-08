function fc(){
    let nav = document.querySelector('.header');
    let logo = document.querySelector('.logo img');

      if (window.pageYOffset > 90 ) {
         nav.classList.add('header-scroll');
         logo.classList.add('logo-scroll');
      } else {
        nav.classList.remove('header-scroll');
        logo.classList.remove('logo-scroll');
      }
  }
  
  window.addEventListener('scroll', fc);  
  window.addEventListener('load', fc);

  /*============ Mobile menu ================*/

  let icon_mobile= document.querySelector(".icon-mobile-menu");
  let menu_mobile = document.querySelector(".menu");
  let menus_mobile = document.querySelectorAll(".menu li a"); 
 
  /* функция изменения иконки моб. меню  и добовления класса mobile-menu*/
  function iconClick(){  

    if( window.innerWidth < 992 ){      
        icon_mobile.classList.toggle("on");   
        menu_mobile.classList.toggle("mobile-menu");        
    }
  }//end function iconClick()

  icon_mobile.addEventListener("click", iconClick);//вывод  function iconClick()

  let timerId = null; 

  function WidthWin(){
    clearTimeout(timerId);
    timerId = setTimeout(function() {
      
       if( window.innerWidth < 992 )
       {
          menu_mobile.classList.add("show");         
       }
       else{
          menu_mobile.classList.remove("show");
       }       
    }, 20);
  }
 
  window.addEventListener('resize', WidthWin);    
    
    if( window.innerWidth < 992 )
    {
      menu_mobile.classList.add("show");          
    }
    
    /* функция сворачивания меню и иконки по клику */
    function menuClick(ed){
       if( window.innerWidth < 992 ){
           if( menu_mobile.contains(ed.target) ){
               icon_mobile.classList.remove("on");
               menu_mobile.classList.remove("mobile-menu");  
           }    
       }      
    }/* конец функция сворачивания меню и иконки по клику */

    for (let i = 0; i < menus_mobile.length; i++) {     
          menus_mobile[i].addEventListener('click', menuClick);           
    }
  /*======================================*/
