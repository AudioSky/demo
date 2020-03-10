/*querySelector находит первый такой элемент на странице и останавливается.
querySelectorAll находит все подходящие элементы и возвращает коллекцию элементов. 
Чтобы достать элемент из коллекции, используют его индекс... */ 
/*
let nav = document.querySelectorAll('.nav-gallery li');

// nav[ 0 ] — первый li,
// nav[ 1 ] — второй...

for (let i = 0; i < nav.length; i++) {
  nav[ i ].addEventListener('click', toggle);
}

function toggle() {
  let active = document.querySelector('.nav-gallery li.active')

  active.classList.remove('active');
  this.classList.add('active');
}
*/
//document.addEventListener("click", fc);
//-----------------------------------------

setGalleryFunctional();

function setGalleryFunctional() {
  let nav = document.querySelectorAll('.nav-gallery li ');
  let images = document.querySelectorAll('.gallery-image');

  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', function() {
      navClickHandler(i);
    });
  }

  function navClickHandler(i) {
 
    //classList.contains  — возвращает логическое значение, указывающее, имеет ли элемент указанный класс или нет.
    if (!nav[i].classList.contains('active') ){

         addClass(images, 'twist');
    // Независимо от тыкнутой кнопки, картинки вегда должны сначала поворачиваться.
    
        removeClass(nav, 'active');
        addClass(nav[i], 'active');

     }//конец function navClickHandler(i) 
    
    if( i == 0 )
      return twistImages(images);
    // Прерывает функцию, на выходе вызывает twistImages() — который показывает всё.

    /**************************/
    let imgs = filterImages();
    twistImages(imgs);    
    
    /**************************/

    function twistImages(imgsToShow) {
      setTimeout(function() {
        addClass(images, 'hide'); // Реально скрыть все картинки
        removeClass(imgsToShow, 'hide'); // Показать те, что остались после фильтра.
        // Сейчас все картинки перевернуты на бок, поэтому и без `hide` - еще невидимы.
        
        setTimeout(() => removeClass(images, 'twist'), 100);
        // 100 мс задержка, чтобы браузер анимировал, а не показывал сразу.
        
        // google → Стрелочные функции
      }, 500); // Когда анимация twist завершилась и картинки пропали
    }

    function filterImages() {
      let keyWords = nav[i].dataset.filter.split(" ");
      let arr = [];

      for (let j = 0; j < images.length; j++) {
        let imgTags = images[j].dataset.tags.split(" ");

        for (let k = 0; k < keyWords.length; k++) {
          if (imgTags.includes(keyWords[k])) {
            arr.push(images[j]);
            break;
          }
        }
      }

      return arr;
    }
  }
}

function addClass(elems, className) {
  if (elems instanceof HTMLElement) {
    elems.classList.add(className);
    return;
  }

  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.add(className);
  }
}

function removeClass(elems, className) {
  if (elems instanceof HTMLElement) {
    elems.classList.remove(className);
    return;
  }

  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove(className);
  }
}
