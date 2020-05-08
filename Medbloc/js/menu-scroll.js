window.addEventListener('load', () => {
    const anchors = document.querySelectorAll('.menu li a');
  
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
  
            const blockID = anchor.getAttribute('href');
  
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
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
  
            // если верхняя граница экрана находится ниже чем верхняя граница блока минус высота меню и
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