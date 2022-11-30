

var Navbar = document.getElementById("navbar");
var Mplace = document.getElementById("mplace");

window.onscroll = function(){
    if(window.scrollY > 20){
        navbar.classList.add('scrolled');
        Mplace.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
        Mplace.classList.remove('scrolled');
    }
}

