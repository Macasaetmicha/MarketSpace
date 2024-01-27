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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("homeSlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 5000); 
}

function getUserType() {
  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split('=');
      if (cookie[0] === 'userType') {
          return decodeURIComponent(cookie[1]);
      }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function () {
  var currentItemCards = document.querySelectorAll('.current-item-card');
  var userType = getUserType();

  currentItemCards.forEach(function (card) {
      card.addEventListener('click', function () {
        if (userType === 'buyer') {
          console.log("BUYER LINK SET");
          window.location.href = 'trans.html';
        } else if (userType === 'seller') {
          console.log("SELLER LINK SET");
          window.location.href = 'trans2.html';
        } else {
            console.log("Unknown user type or not logged in.");
            window.location.href = '#';
        }
      });
  });
});
