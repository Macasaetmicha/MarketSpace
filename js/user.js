function previewImage(event) {
    const input = event.target;
    const image = document.getElementById('preview-image');

    const reader = new FileReader();

    reader.onload = function () {
        image.src = reader.result;
    };

    if (input.files[0]) {
        reader.readAsDataURL(input.files[0]);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const ratingContainer = document.querySelector('.rating-container');
    const rating = parseFloat(ratingContainer.dataset.rating);

    const filledStarsCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        
        if (i < filledStarsCount) {
          star.classList.add('filled-star');
          star.innerHTML = '<i class=" filled-star fa-solid fa-star"></i>'; 
        } else if (i === filledStarsCount && hasHalfStar) {
            star.innerHTML = '<i class="half-star fa-solid fa-star-half-stroke"></i>'; 
        } else {
            star.innerHTML = '<i class="unfilled-star fa-regular fa-star"></i>';
        }

        ratingContainer.appendChild(star);
      }
});

function checkUser(){
    const userTypeCookie = getUserType();

    if (userTypeCookie) {
      window.location.assign("report.html");
    } else {
      alert('Oops! You have to be logged in to make a report!');
      window.location.assign("signin.html");
    }
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