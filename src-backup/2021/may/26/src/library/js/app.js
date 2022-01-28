const ProjectPath = '';

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
 
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
document.querySelector("section").addEventListener("click",function(){
  document.querySelector(".mobile-menu").classList.remove("show");
  });
  //submenu
  document.getElementById("home").addEventListener("click",function(){
    document.querySelector(".mobile-menu .menu .home").style.display="flex";
    document.querySelector(".mobile-menu .menu .main-menu").style.display="none";
    });
    document.querySelector(".mobile-menu .menu .back").addEventListener("click",function(){
      document.querySelector(".mobile-menu .menu .home").style.display="none";
      document.querySelector(".mobile-menu .menu .main-menu").style.display="flex";
      });



        