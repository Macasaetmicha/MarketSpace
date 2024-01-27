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
