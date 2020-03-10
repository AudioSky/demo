function fc(){
    let nav = document.querySelector('.header');
    let logo = document.querySelector('.logo img');

      if (window.pageYOffset > 40 ) {
         nav.classList.add('header-scroll');
         logo.classList.add('logo-scroll');
      } else {
        nav.classList.remove('header-scroll');
        logo.classList.remove('logo-scroll');
      }
  }
  
  window.addEventListener('scroll', fc);
  
  window.addEventListener('load', fc);

/*
  window.onload = () => {
    let navLinks = document.querySelectorAll('[href^="#"]'),
      V = 0.2;  // Скорость прокрутки
      for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
          e.preventDefault();
          let w = window.pageYOffset,  // Get current scroll
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // To id, which we need
          t = document.querySelector(hash).getBoundingClientRect().top,
              start = null;
          requestAnimationFrame(step); 
          function step(time) {
          if (start === null) start = time;
          let progress = time - start,
            r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
          window.scrollTo(0,r);
          if (r != w + t) {
             requestAnimationFrame(step)
          } else {
             location.hash = hash
          }
        }
      }, false);
      }
  }
  */
/*
 const anchors = document.querySelectorAll('.menu li a');

 for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
     e.preventDefault()
     
     const blockID = anchor.getAttribute('href');
     
     document.querySelector(blockID).scrollIntoView({
       behavior: 'smooth',
       block: 'center'
     })
   });
 }
*/

/*
 let nav = document.querySelectorAll('.menu li a');

for (let i = 0; i < nav.length; i++) {
  nav[ i ].addEventListener('scroll', toggle);


}

function toggle() {
  let active = document.querySelector('.menu li a.menu-active');


  active.classList.remove('menu-active');
  this.classList.add('menu-active');


  if(nav[i].href==window.location){
    nav[i].className="menu-active"; // добавляем нужный класс для выделения пункта
  }
}


let nav = document.querySelectorAll('.menu li a');
let section = document.getElementsByTagName('section');//ищет элементы с данным тегом и возвращает их коллекцию.
let sections = {};//пустой объет, здесь будут храниться все найденые section
let active = document.querySelector('.menu li a.menu-active');


function menu_li(){
  sections = section;
 alert( sections);
}

menu_li();
*/


window.addEventListener('load', () => {
  const anchors = document.querySelectorAll('.menu li a');

  for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          const blockID = anchor.getAttribute('href');

          document.querySelector(blockID).scrollIntoView({
              behavior: 'smooth',
              block: 'center'
          })
      });
  }

  const menu = document.querySelector('.header');
  
  const menur = document.querySelector('.header');
  

  const navs =  menur.querySelectorAll('li a');

  for (let i = 0; i < navs.length; i++) {
      const id = navs[i].getAttribute('href'); // узнаем id секции которая соответстувет пункту меню в цикле.
      const section = document.querySelector(id); // находим сецкию по id
      window.addEventListener('scroll', function () {
          const {top, bottom} = getCoords(section); // деструктуризация

          // если верхняя граница екрана находится ниже чем верхняя граница блока минус высота меню и
          // выше чем нижняя граница блока минус высота меню (убрать "- menu.offsetHeight" чтобы не учитывать меню)
          if (pageYOffset >= (top - menu.offsetHeight) && pageYOffset <= (bottom - menu.offsetHeight)) {
              toggle(navs[i]);
          }
      });
  }

  function toggle(target) {
      let active = document.querySelector('.menu li a.menu-active')

      active.classList.remove('menu-active');
      target.classList.add('menu-active');
  }

  // получаем координаты элемента в контексте документа
  function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
          top: box.top + pageYOffset,
          right: box.right + pageXOffset,
          bottom: box.bottom + pageYOffset,
          left: box.left + pageXOffset,
      };
  }
});

//===========Mobile-Mene====================

let icon_mobile = document.querySelector(".icon-mobile-menu");
let menu_mobile = document.querySelector(".menu");

let menus_mobile = document.querySelectorAll(".menu li a");

function iconClick(){
 
 icon_mobile.classList.toggle("on");
 //  let curr = menu_mobile.style.height ? parseInt(menu_mobile.style.height) : 0;
  let curr = 0;
   
  if(menu_mobile.style.height){
     curr = parseInt(menu_mobile.style.height);
  }
   
 if(icon_mobile.classList.contains("on")){
    menu_mobile.style.display = "block";
    // menu_mobile.style.height ="75px";
   let interval = setInterval(count, 6);
   
   function count(){
     
     if(icon_mobile.classList.contains("on")) {
        curr += 9;
        menu_mobile.style.height = curr + "px";
        if(curr>=387){
           clearInterval(interval);
        }
     }
               
   }//---конец function count()  
 }else{
       let intervalo = setInterval(counerret, 6);
       function counerret(){
         curr -= 9;
         menu_mobile.style.height = curr + "px";  
             
        if(curr==0){
           menu_mobile.style.display = "";
           menu_mobile.style.height ="";
           clearInterval(intervalo);
        }
    }//---конец counerret() 
 } 
}//function iconClick()

//--------Клик по пунктам меню=====================
function menuClick(ed){
  
   if(menu_mobile.contains(ed.target)){
      icon_mobile.classList.remove("on");  
      menu_mobile.style.display = "";
      menu_mobile.style.height ="";
   }
}

for (let i = 0; i < menus_mobile.length; i++) {
    menus_mobile[i].addEventListener('click', menuClick);
}

icon_mobile.addEventListener("click", iconClick);