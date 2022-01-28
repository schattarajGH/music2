//aos 
AOS.init();
// sticky header
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//showing mobile menu
document.getElementById("menu-bar").addEventListener("click",function(){
document.querySelector(".mobile-menu").classList.toggle("show");
document.querySelector("#menu-bar").classList.toggle("cross");
});
// document.querySelector("section").addEventListener("click",function(){
//   document.querySelector(".mobile-menu").classList.remove("show");
//   });
  //submenu
  document.getElementById("home").addEventListener("click",function(){
    document.querySelector(".mobile-menu .menu .home").style.display="flex";
    document.querySelector(".mobile-menu .menu .main-menu").style.display="none";
    });
    document.querySelector(".mobile-menu .menu .back").addEventListener("click",function(){
      document.querySelector(".mobile-menu .menu .home").style.display="none";
      document.querySelector(".mobile-menu .menu .main-menu").style.display="flex";
      });    
//modal
function register(){
  document.querySelector(".modal .register").style.display="block";
  document.querySelector(".modal .login").style.display="none";
}
function login(){
  document.querySelector(".modal .login").style.display="block";
  document.querySelector(".modal .register").style.display="none";

}
//social
function youtube(){
  document.querySelector(".social .background img").src="assets/images/braden-collum-396248-unsplash.jpg";
}
function facebook(){
  document.querySelector(".social .background img").src="assets/images/melanie-van-leeuwen-83775.jpg";
}
function instagram(){
  document.querySelector(".social .background img").src="assets/images/mikky-koopac-1056364-unsplash.jpg";
}
function twitter(){
  document.querySelector(".social .background img").src="assets/images/joe-watts-149049.jpg";
}
//change images index.html
// let image=document.querySelectorAll(".hidden");
// let url = location.href;
// let src=document.getElementById("changeImage").src;

// function changeImagePlus(){
// for(let i=0; i<3; i++){
// if(url+image[i].innerText===src){
// i++;
// document.getElementById("changeImage").src=url+image[i].innerText;
// }
// }
// }
// function changeImageMinus(){
//   for(let i=0; i<image.length; i++){
    
//     if(url+image[i].innerText===src){
//       i--;
//       document.getElementById("changeImage").src=url+image[i].innerText;
//       console.log(image[i]);
//     }
//   }
//   }


///////////w3 school slider -index.html
var slideIndex = 1;
if(document.querySelectorAll(".mySlides").length>0){
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }
}
