document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
        } else {
        navbar.classList.remove('scrolled');
        }
    });
});

const menu = document.querySelector(".menu");
let open;

function openMenu() {
  if (open) {
    menu.style.display = "none";
    open = false;
  } else if (!open) {
    menu.style.display = "block";
    open = true;
  }
}

