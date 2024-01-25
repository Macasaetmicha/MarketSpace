$(document).ready(function() {
    $('.delete-notification').on('click', function() {
        $(this).closest('.notification-item').remove();
      
        if ($('.notification-item').length === 0) {
            $('.notifications').html('<p style="text-align: center;">All caught up for now!</p>');
        }
    });
});

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

function redirect() {
  if (window.location.href.includes("home2.html") || window.location.href.includes("view_user2.html")) {
    console.log("Interested yarn")
    window.location.assign("messages.html");
  }
  else{
    alert("Oops! You have to be logged in to make a transaction!");
    window.location.assign("signin.html");
  }
}