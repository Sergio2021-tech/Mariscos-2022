
document.querySelectorAll(".products-list product-item").forEach(el=>{
 el.addEventListener("click", function(ev){
    ev.stop
   this.parentNode.classList.add("active"); 
})
});

document.querySelectorAll(".products-list .product-item img").forEach(el=>{
    el.addEventListener("click", function(ev){
       ev.stop
      this.parentNode.classList.add("active"); 
   })
   });

document.querySelectorAll("product-item").forEach(el=>{
    el.addEventListener("click", function(ev){
      this.parentNode.classList.remove("active");    
   })
})

    document.querySelectorAll(".products-list .product-item img").forEach(image =>{
    image.onclick = () =>{
      document.querySelector(".product-item").style.display = 'block';
      document.querySelector(".product-item").src= image.getAttribute('src'); 
    }   
   });

   document.querySelectorAll(".product-item").forEach(img =>{
    img.onclick = () =>{
      document.querySelector(".popup-image").style.display = 'block';
      document.querySelector(".popup-image img").src= image.getAttribute('src'); 
    }   
   });