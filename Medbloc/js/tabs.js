/*let tab = document.querySelectorAll(".tabset li");

for(let i=0; i<tab.length; i++){
    tab[i].addEventListener('click', tab_click);      
}

function tab_click(e){
    e.preventDefault(); 

    document.querySelector('.tabset li.active_tabset').classList.remove('active_tabset');
    document.querySelector(".tabintab .active").classList.remove('active'); 
    this.classList.add('active_tabset');        
    document.querySelector('.tabintab [data-id=" '+this.dataset.id+'"]').classList.add('active');  
 }*/


 /*let tab = document.querySelectorAll(".tabset .tab");

 for (let i = 0; i < tab.length; i++) {
   tab[i].addEventListener('click', tab_click); 
   
   function tab_click(){
      let clk = this.closest('.tab-wrap');    
      clk.querySelectorAll('.active_tabset').forEach(rt); */
    /*mama.querySelectorAll('.active').forEach(e => e.classList.remove('active'));*/
      
    /*  function rt(e){
       e.classList.remove('active_tabset');
      }
      
      this.classList.add('active_tabset');
      clk.querySelectorAll('.tabintab')[i].classList.add('active_tabset');  
   }
 
 }*/
 
/*===================== Вложенные Табы ===================*/
let tabon = document.querySelectorAll(".tabs .tabon");
for (let i = 0; i < tabon.length; i++){ 
  tabon[i].addEventListener('click', tabon_click);  

  function tabon_click(){
  
  	for(let i = 0; i < this.parentNode.children.length;i++){       
       	this.parentNode.children[i].classList.remove("active");
    }
   
    this.classList.add("active");    
    let out = this.parentNode.parentNode.querySelector(".output");
    
    for(let i = 0; i < out.children.length;i++){
    	  out.children[i].classList.remove("active")
    }  
    
    out.children[Array.from(this.parentNode.children).indexOf(this)].classList.add("active");    
    
  }
  
}