
(function(){

    let text = ["Leo Morro", "A Designers", "A Developer"]; 
    let delay = 120;
    let blue = document.getElementById("yellowe");
    
    let curr = 0; /* Текущий элемент массива */
    let i = 0; /* Текущая буква */
    
    setTimeout(function type(){
      blue.textContent += text[curr][i];
      if( text[curr][i+1] ){ /* Если существует следующая буква */
        i++;
        setTimeout( type, delay ); /* Напечатать следующую */
      } else {
        /* Иначе - обнулить индекс буквы, сменить слово */
        i = 0;
        curr = curr == text.length - 1 ? 0 : curr + 1;
        
        /* Запуск удаления */
        setTimeout(function delText(){
          /* Независимо от 'i', удалить последнюю букву */
          blue.textContent = blue.textContent.slice(0, -1);
          if( blue.textContent ){ /* Если элемент еще не пустой, удалить следующую букву*/
            setTimeout(delText, delay/2);
          } else {
            /* Иначе - запустить печать следующего слова */
            setTimeout( type, delay );
          }
        }, delay*40 ); /* Задержка между печатью и началом удаления - сильно больше. */   
      }
    }, delay);
    
    })();
    
    