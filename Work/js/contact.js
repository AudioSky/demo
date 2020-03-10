/*let form = document.getElementById("contact-form");
let butsubmit = document.getElementById("but-submit");


form.onsubmit = async (e) => {
    e.preventDefault();

    let contact = await fetch('php/contact.php',{
      method: 'POST',
      body: new FormData(form)
    });

    alert("Ваше Сообщение Отправленно");
   
  };


butsubmit.onclick = function() {

  function ValidMail() {

    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let myMail = document.getElementById("email").value;
    let valid = re.test(myMail);
   
    let mail = document.getElementById("email");
    let errormail = document.getElementById("error-email");

    let submit = document.getElementById('but-submit');

    if (valid){

      mail.classList.remove('invalid');
      errormail.innerHTML = "";
    //submit.style.cursor = null;

    }
    else{

      mail.classList.add('invalid');
      errormail.innerHTML = 'Please Enter Valid Email';
    //  submit.style.cursor = "not-allowed";
      mail.setCustomValidity("I expect an e-mail, darling!");

    }  
 
}

 ValidMail();

};

//=============Проверка Имени==============================================
let name = document.getElementById("name");
let errorname = document.getElementById("error-name");

name.onblur = function() {
  if ( name.value.trim() === '') { // если не заполнено
    name.classList.add('invalid');
    errorname.innerHTML = 'Your Name is Required.'
    
  }
};

name.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    errorname.innerHTML = "";
  }
};
//=============================================================================

//=============Проверка E-Mail=================================================

let mail = document.getElementById("email");
let errormail = document.getElementById("error-email");

mail.onblur = function() {

  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  if (re.test(mail.value)){

    mail.classList.remove('invalid');
    errormail.innerHTML = "";   
  
  }
  else{

    mail.classList.add('invalid');
    errormail.innerHTML = 'Please Enter Valid Email';
    mail.setCustomValidity("I expect an e-mail, darling!");

  }
};

mail.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    errormail.innerHTML = "";
   
    console.log("Не Работает");
  }
};
//=============================================================================

//=============Проверка Сообщение==============================================
let message = document.getElementById("message");
let errormessage = document.getElementById("error-message");

message.onblur = function() {
  if ( message.value.trim() === '') { // если не заполнено
    message.classList.add('invalid');
    errormessage.innerHTML = 'Please, Leave us a message.'
  }
};

message.onfocus = function() {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    errormessage.innerHTML = "";
  }
};*/
//=============================================================================
//======Переменные============================================================
let form = document.getElementById("contact-form");//форма
let fSubmit = document.getElementById("but-submit");//кнопка

let name = document.getElementById("name");//поле ввода Имени
let errorname = document.getElementById("error-name");//ошибка ввода Имени

let mail = document.getElementById("email");//поле ввода Почты
let errormail = document.getElementById("error-email");//ошибка ввода Почты

let message = document.getElementById("message");//поле ввода Сообщения
let errormessage = document.getElementById("error-message");//ошибка ввода Сообщения

let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;//проверка почты
//=========================================================================

//============Валидация Имени, Почты и Сообщения===========================

function validName() {
   if (name.value.trim() === '') { // если не заполнено
       name.classList.add('invalid');
       errorname.innerHTML = 'Your Name is Required.';

   //   name.setCustomValidity("Your Name is Required.");
 //      fSubmit.style.cursor = "not-allowed";
       return false;
    }
  return true;
}

function validEmail() {

  let valid = re.test(mail.value);

   if (!valid) {
      mail.classList.add('invalid');
      errormail.innerHTML = 'Your Name is Required.';

 //      mail.setCustomValidity("Please Enter Valid Email.");
 //     fSubmit.style.cursor = "not-allowed";
      return false;
    }
  return true;
}

function validMessage() {
  if (message.value.trim() === '') { // если не заполнено
      message.classList.add('invalid');
      errormessage.innerHTML = 'Please, Leave us a message.';

    //  message.setCustomValidity("Please, Leave us a message.");
   //   fSubmit.style.cursor = "not-allowed";
      return false;
   }
 return true;
}

//=========================================================================

//============Проверка формы перед отправкой===============================
form.onsubmit = async function(e) {
   e.preventDefault(); // Останавливаем форму.

   let error = 0;
   if (!validName()) error++;
   if (!validEmail()) error++;
   if (!validMessage()) error++;

   if (!error){
  // e.target.submit();
      let contact = await fetch('php/contact.php',{
      method: 'POST',
      body: new FormData(form)
    });

    let result = await contact.text();
    alert(result);
  //  alert("Ваше Сообщение Отправленно");
   }else{
   alert("Заполните Все Поля!");
   }
};
//=========================================================================

//============Фокус полей ввода============================================

//Имя
name.onblur = function() {
   validName();
};

name.onfocus = function() {
   if (this.classList.contains('invalid')) {
      // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
      this.classList.remove('invalid');
       errorname.innerHTML = "";
    //  fSubmit.style.cursor=null;
   //  name.setCustomValidity(""); 
    }
};

//Почта
mail.onblur = function() {   
   validEmail();
};

mail.onfocus = function() {
   if (this.classList.contains('invalid')) {

     this.classList.remove('invalid');
     errormail.innerHTML = "";
  //   message.setCustomValidity(""); 
  //   fSubmit.style.cursor=null;
  }
};

//Сообщение
message.onblur = function() {
  validMessage();
};

message.onfocus = function() {
  if (this.classList.contains('invalid')) {
     // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
     this.classList.remove('invalid');
     errormessage.innerHTML = "";
 //    message.setCustomValidity(""); 
   //  fSubmit.style.cursor=null;
   }
};
//=========================================================================

