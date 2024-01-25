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