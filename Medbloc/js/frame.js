let modal = document.querySelector(".modal-fr");
let btn = document.querySelector(".img-mac");
let span = document.querySelector(".close-frame");

let myScope = document.getElementById('frame-content');   
let iframes = myScope.getElementsByTagName("iframe");

function stopVideo() {
  if (iframes != null) {
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].src = iframes[i].src;
    }
  }
}

function butn(){
   modal.style.display = "block";
}
btn.addEventListener('click', butn);

function spann(){
  modal.style.display = "none"; 
  stopVideo();
}
span.addEventListener('click', spann);

function close(event){
  if (event.target == modal) {
    modal.style.display = "none";
    stopVideo();
  }
}
window.addEventListener('click', close);

