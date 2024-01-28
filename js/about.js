document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');

    setTimeout(function() {
        header.classList.add('fade-in');
    }, 500); 
});


function inquire() {
    console.log("Redirecting to the home page.");
    var name = document.getElementById('name').value;

    alert("Hi " + name + "! We've received your message. Our team is working on it, and a reply will be sent to you shortly. Thank you for reaching out!")
    window.location.assign("about.html");
}