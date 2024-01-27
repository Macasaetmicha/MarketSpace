/*POP UP*/

/*POPUP SLIDESHOW*/
let popUpslideIndex = 1;

function changeSlide(n) {
  showProd(popUpslideIndex += n);
}

function currentSlide(n) {
  showProd(popUpslideIndex = n);
}

function showProd(n) {
  let i;
  let slides = document.getElementsByClassName("popUpSlides");
  if (n > slides.length) {popUpslideIndex = 1}
  if (n < 1) {popUpslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[popUpslideIndex-1].style.display = "block";
}

var productDetails = {
  "1": {
    thumbnail: "img/products/cabinet1.png",
    images: ["img/products/cabinet1.png", "img/products/cabinet2.png", "img/products/cabinet3.png", "img/products/cabinet4.png", "img/products/cabinet5.png"],
    name: "Pre-loved Cabinet",
    location: "Quezon City",
    qty: "3",
    category: "Home and Living",
    condition: "Used - Good",
    brand: "Custom Made",
    bulk: "no",
    descrip: "Gently used cabinet in good condition. This second-hand cabinet offers practical storage solutions for any room. Clean and well-maintained, it's a versatile and affordable option to help you declutter and organize your space. Add functionality to your home with this reliable second-hand cabinet!",
    price: "Php 3,450.00",
    seller: "John Doe",
    seller_loc: "Quezon City",
    seller_pic: "img/user3.png",
    date: "01/01/24",
    status: "Pending"
  },
  "2": {
    thumbnail: "img/products/chair1.png",
    images: ["img/products/chair1.png", "img/products/chair2.png"],
    name: "Arm Chair",
    location: "Cebu City",
    qty: "6",
    category: "Home and Living",
    condition: "New",
    brand: "Marys Furniture",
    bulk: "Yes",
    descrip: "Stylish short armchair in excellent condition. This comfortable and compact chair is perfect for cozy corners or smaller living spaces. Its red color adds a touch of elegance to any room, while the supportive armrests provide a comfortable seating experience. Well-maintained and ready to enhance your relaxation space. Don't miss out on this inviting and versatile short armchair!",
    price: "Php 700.00",
    seller: "Marys Furniture",
    seller_loc: "Cebu City",
    seller_pic: "img/user2.png",
    date: "01/03/24",
    status: "Pending"
  },
  "3": {
    thumbnail: "img/products/van1.png",
    images: ["img/products/van1.png", "img/products/van2.png"],
    name: "Van",
    location: "Mandaluyong City",
    qty: "1",
    category: "Sports and Outdoors",
    condition: "Refurbished",
    brand: "Honda",
    bulk: "no",
    descrip: "Pre-loved Honda van in excellent condition. Well-maintained and ready for its next adventure. 50,000 miles on the odometer. 2016 Honda Odyssey with spacious interior and great fuel efficiency. Perfect for those seeking reliable and cost-effective transportation. Don't miss the opportunity to own this pre-loved Honda van, ideal for various needs and journeys!",
    price: "Php 300,000.00",
    seller: "Joe",
    seller_loc: "Mandalutong City",
    seller_pic: "img/user1.png",
    date: "01/21/24",
    status: "SOLD"
  },
  "4": {
    thumbnail: "img/products/tv1.png",
    images: ["img/products/tv1.png", "img/products/tv2.png"],
    name: "Television",
    location: "Pasig City",
    qty: "1",
    category: "Appliance",
    condition: "Damaged",
    brand: "LG",
    bulk: "no",
    descrip: "Pre-owned LG TV, sold as-is due to visible damage. This older model TV has served faithfully but does exhibit wear and tear, including a cracked screen and some cosmetic imperfections. Despite the damage, the TV may still be suitable for repair or repurposing parts. Ideal for those with the skills to refurbish or for spare parts. Priced accordingly for a quick sale. Please consider the damage when making your purchase decision.",
    price: "Php 2,500.00",
    seller: "Honeylette",
    seller_loc: "Pasig City",
    seller_pic: "img/user5.png",
    date: "01/22/24",
    status: "SOLD"
  },
  "5": {
    thumbnail: "img/products/tool1.png",
    images: ["img/products/tool1.png", "img/products/tool2.png", "img/products/tool3.png", "img/products/tool4.png", "img/products/tool5.png"],
    name: "Makeup Tools and Accessories",
    location: "Taguig City",
    qty: "5",
    category: "Beauty and Personal Care",
    condition: "Used - Good",
    brand: "Variety",
    bulk: "no",
    descrip: "Gently used set of makeup tools. This bundle includes a variety of second-hand items. <br><br>1. Makeup Brushes: Assorted brushes for various applications, including foundation, eyeshadow, and blush. Soft bristles for smooth and precise makeup application.<br>2.Eyelash Curler: Used but in good working condition. Adds a beautiful curl to lashes, enhancing the eyes for a polished look.<br>3.Hair Comb: A durable second-hand hair comb suitable for detangling and styling. Ideal for daily grooming needs.<br><br>These items have been well-maintained and sanitized. Perfect for those looking for affordable and functional makeup tools. Enhance your beauty routine with this budget-friendly set!",
    price: "Php 500.00",
    seller: "Monica",
    seller_loc: "Taguig City",
    seller_pic: "img/user4.png",
    date: "01/15/24",
    status: "Cancelled"
  },
  "6": {
    thumbnail: "img/products/bed1.png",
    images: ["img/products/bed1.png", "img/products/bed2.png"],
    name: "Single Bed",
    location: "Quezon City",
    qty: "1",
    category: "Home and Living",
    condition: "Used - Excellent",
    brand: "Ikea",
    bulk: "no",
    descrip: "Single bed from IKEA, gently used for only one month and in excellent condition. This practical and space-efficient bed served its purpose well but is now available for sale due to migration. <br><br>The bed is disassembled and ready for easy transportation. It comes with all necessary parts and assembly instructions. This is a great opportunity to acquire a quality single bed at a fraction of the original cost. Don't miss out on the chance to furnish your space with this affordable and well-maintained IKEA bed!",
    price: "Php 1,200.00",
    seller: "Samantha Diaz",
    seller_loc: "Quezon City",
    seller_pic: "img/user5.png",
    date: "01/24/24",
    status: "Processing"
  },
  "7": {
    thumbnail: "img/products/earring1.png",
    images: ["img/products/earring1.png", "img/products/earring2.png"],
    name: "Pandora Earrings",
    location: "Las Pinas City",
    qty: "2",
    category: "Jewelry and Watches",
    condition: "Like New",
    brand: "Pandora",
    bulk: "no",
    descrip: "Pre-loved Pandora earrings, carefully worn and well-maintained. This collection features two unique styles: <br><br>Pandora Stud Earrings: Elegant and timeless. Despite being pre-loved, they show minimal signs of wear, maintaining their original luster.<br><br>Pandora Hoop Earrings: Stylish and versatile. The hoops are in excellent condition, with no notable scratches or damage, making them a delightful addition to any jewelry collection.<br><br>Both pairs come with their original Pandora packaging, ensuring a secure and stylish presentation. These pre-loved earrings offer a budget-friendly way to enjoy Pandora's quality craftsmanship without compromising on style. Elevate your look with these well-cared-for Pandora earrings!",
    price: "Php 5,750.00",
    seller: "Mary Rose Cruz",
    seller_loc: "Las Pinas City",
    seller_pic: "img/user4.png",
    date: "12/29/24",
    status: "SOLD"
  },
  "8": {
    thumbnail: "img/products/makeup1.png",
    images: ["img/products/makeup1.png", "img/products/makeup2.png", "img/products/makeup3.png"],
    name: "Makeup and Skin Care",
    location: "Cavite City",
    qty: "3",
    category: "Beauty and Personal Care",
    condition: "New",
    brand: "Happy Skin",
    bulk: "no",
    descrip: "Happy Skin makeup product used only once, in pristine condition. This premium beauty item is part of the renowned Happy Skin collection, known for its quality and skin-friendly formulations. Regrettably, it is being sold due to a color mismatch.<br><br>This makeup product offers a vibrant and long-lasting finish, suitable for various skin types. The single-use ensures hygiene, making it an excellent opportunity for those seeking quality makeup at a discounted price. Take advantage of this chance to own a premium Happy Skin product without compromising your budget. Don't miss out on the opportunity to enhance your beauty routine with this top-tier makeup item!",
    price: "Php 1,200.00",
    seller: "Maria Delos Reyes",
    seller_loc: "Cavite City",
    seller_pic: "img/user2.png",
    date: "01/22/24",
    status: "Pending"
  },
  "9": {
    thumbnail: "img/products/shoes1.png",
    images: ["img/products/shoes1.png", "img/products/shoes2.png", "img/products/shoes3.png"],
    name: "Assorted Pre-loved Shoes",
    location: "Paranaque City",
    qty: "3",
    category: "Fashion",
    condition: "Used - Fair",
    brand: "Addidas, Nike, and New Balance",
    bulk: "no",
    descrip: "Embrace sustainable fashion with our collection of pre-loved assorted shoes. Each pair carries a unique story and is ready to step into its next adventure with you.",
    price: "Php 550.00",
    seller: "Jepoy",
    seller_loc: "Paranaque City",
    seller_pic: "img/user1.png",
    date: "01/19/24",
    status: "Pending"
  },
  "10": {
    thumbnail: "img/products/watergun1.png",
    images: ["img/products/watergun1.png", "img/products/watergun2.png", "img/products/watergun3.png", "img/products/watergun4.png"],
    name: "Assorted Watergun",
    location: "Makati City",
    qty: "3",
    category: "Toys and Games",
    condition: "Used - Excellent",
    brand: "None",
    bulk: "no",
    descrip: "Dive into endless summer fun with our vibrant assortment of waterguns. Perfect for spirited water battles, these colorful and durable waterguns will add a splash of excitement to your outdoor activities.",
    price: "Php 340.00",
    seller: "Maria Jose",
    seller_loc: "Makati City",
    seller_pic: "img/user5.png",
    date: "01/01/24",
    status: "SOLD"
  },
  "11": {
    thumbnail: "img/products/book1.png",
    images: ["img/products/book1.png", "img/products/book2.png", "img/products/book3.png", "img/products/book4.png"],
    name: "Assorted Grade 6 Books",
    location: "Pasig City",
    qty: "4",
    category: "Books and Stationery",
    condition: "Used - Good",
    brand: "Rex Publishing",
    bulk: "no",
    descrip: "Ignite the love for learning in grade 6 with our curated collection of books. From fascinating history to mouthwatering recipes, these educational materials cover a range of subjects to inspire young minds.",
    price: "Php 480.00",
    seller: "Consing Santos",
    seller_loc: "Pasig City",
    seller_pic: "img/user4.png",
    date: "01/13/24",
    status: "Cancelled"
  },
  "12": {
    thumbnail: "img/products/lamp1.png",
    images: ["img/products/lamp1.png"],
    name: "Nordic Lamp",
    location: "Cavite City",
    qty: "8",
    category: "Home and Living",
    condition: "New",
    brand: "Ikea",
    bulk: "yes",
    descrip: "Illuminate your space with a touch of Scandinavian elegance. Our Nordic Lamp combines minimalist design with warm lighting, creating a cozy ambiance in any room. Enhance your home with this stylish and functional piece.",
    price: "Php 320.00",
    seller: "JoJo Smith",
    seller_loc: "Cavite City",
    seller_pic: "img/user2.png",
    date: "01/20/24",
    status: "Processing"
  },
  "13": {
    thumbnail: "img/products/console1.png",
    images: ["img/products/console1.png", "img/products/console2.png"],
    name: "Game Console",
    location: "Mandaluyong City",
    qty: "4",
    category: "Electronics",
    condition: "Like New",
    brand: "Nintendo",
    bulk: "no",
    descrip: "Level up your gaming experience with our high-performance gaming console. Immerse yourself in cutting-edge graphics, seamless gameplay, and a world of entertainment. Unleash the gamer in you with this ultimate gaming console.",
    price: "Php 390.00",
    seller: "Mark Reyes",
    seller_loc: "Mandaluyong City",
    seller_pic: "img/user3.png",
    date: "01/14/24",
    status: "Pending"
  },
  "14": {
    thumbnail: "img/products/bunk1.png",
    images: ["img/products/bunk1.png", "img/products/bunk2.png"],
    name: "Bunk Bed",
    location: "Manila City",
    qty: "2",
    category: "Home and Living",
    condition: "Used - Excellent",
    brand: "Ikea",
    bulk: "no",
    descrip: "Maximize space and style with our Ikea bunk bed. Designed for practicality and comfort, this space-saving solution is perfect for shared rooms or accommodating overnight guests. Create a cozy haven for rest and play.",
    price: "Php 3,550.00",
    seller: "Hannah Grace Catig",
    seller_loc: "Manila City",
    seller_pic: "img/user2.png",
    date: "12/01/24",
    status: "SOLD"
  },
  "15": {
    thumbnail: "img/products/tennis1.png",
    images: ["img/products/tennis1.png", "img/products/tennis2.png", "img/products/tennis3.png"],
    name: "Tennis Materials",
    location: "Makati City",
    qty: "1",
    category: "Sports and Outdoors",
    condition: "Used - Fair",
    brand: "Yonex",
    bulk: "no",
    descrip: "Serve up your passion for tennis with our premium tennis materials. Whether you're a seasoned player or a beginner, our high-quality racket, durable balls, and sturdy net provide the perfect equipment for endless rallies and fun on the court.",
    price: "Php 1,750.00",
    seller: "Angia Fuasan",
    seller_loc: "Makati City",
    seller_pic: "img/user2.png",
    date: "01/08/24",
    status: "SOLD"
  },

};

document.addEventListener('DOMContentLoaded', function() {
  var transCards = document.querySelectorAll('.trans-item-card');
  var listedCards = document.querySelectorAll('.listed-item-card');

  function showItemDetails(productId, pageIdentifier) {
    var details = getItemDetailsById(productId);
    var cardContentWrapper = this;
    var images = details.images || [];

    // Customize content based on the page identifier
    var content = '';
    if (pageIdentifier === 'trans') {
      content = `
        <div class="trans-img">
          <img src="${details.thumbnail}" alt="${details.name}">
        </div>
        <div class="trans-details">
            <div class="details">
              <h3>${details.name}</h3>
              <p>Date: ${details.date}</p>
              <p>Status: ${details.status}</p>
              <h3 class="price">${details.price}</h3>
            </div>
        </div>
      `;
    } else if (pageIdentifier === 'listed') {
      content = `
        <img src="${details.thumbnail}" alt="${details.name}">
        <h3>${details.name}</h3>
        <p>${details.location}</p>
        <p>Quantity: ${details.qty}</p>
        <h3 class="price">${details.price}</h3>
      `;
    }

    cardContentWrapper.innerHTML = content;
  }

  function getItemDetailsById(productId) {
    return productDetails[productId] || {};
  }

  transCards.forEach(function(card) {
    var productId = card.getAttribute('data-product-id');
    showItemDetails.call(card, productId, 'trans');
  });

  listedCards.forEach(function(card) {
    var productId = card.getAttribute('data-product-id');
    showItemDetails.call(card, productId, 'listed');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var itemDetailsPopup = document.getElementById('itemDetailsPopup');
  var closePopupButton = document.getElementById('closePopupButton');
  var popupContentWrapper = document.getElementById('popupContentWrapper');
  
  function showItemDetails(productId) {
      var details = getItemDetailsById(productId);
      var images = details.images || []; 

      // Dynamically generate slides for each image
      var slidesHtml = images.map(function (image) {
          return `<div class="popUpSlides fade">
                      <img src="${image}" alt="${details.name}" style="width: 100%;">
                  </div>`;
      }).join('');
      
      popupContentWrapper.innerHTML = `
          <div class="pop-up-slideshow-container">
            ${slidesHtml}
        
            <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
            <a class="next" onclick="changeSlide(1)">&#10095;</a>
          </div>
          <div class="product-details">
              <div class="product-info">
                  <h3 class="product-name">${details.name}</h3>
                  <h4 class="price">${details.price}</h4>
              </div>
              <div class="left-details">
                  <p class="prod-detail">Qty: ${details.qty}</p>
                  <p class="prod-detail">Category: ${details.category}</p>
                  <p class="prod-detail">Brand/Manufacturer: ${details.brand}</p>
                  <p class="prod-detail">Available for Bulk Order: ${details.bulk}</p>
                  <p class="prod-detail">Product Description: ${details.descrip}</p>
              </div>
              
              <div class="right-details">
                  <div class="seller-info">
                      <div class="seller-details">
                          <a href="view_user2.html" class="seller-name seller-name">
                              <p class="seller-name">${details.seller}</p>
                          </a>
                          <p class="location">${details.seller_loc}</p>
                      </div>
                      <a href="view_user2.html" class="seller-link">
                          <img src=${details.seller_pic} alt="Seller Image">
                      </a>
                  </div>
              </div>

              <button class="popup-button" onclick="redirect()">I am Interested!</button>
          </div>
      `;
      itemDetailsPopup.style.display = 'block';
      showProd(popUpslideIndex);

    // Check if the body has the class or attribute indicating page 1
        if (window.location.href.includes('userAcc2.html')) {
            // Hide the "I am Interested" button for page 1
            document.querySelector('.popup-button').style.display = 'none';
        }


      if (closePopupButton) {
          closePopupButton.addEventListener('click', function() {
              closeItemDetails();
          });
      } else {
          console.error("closePopupButton not found");
      }
  }

  function getItemDetailsById(productId) {
      return productDetails[productId] || {};
  }

  function closeItemDetails() {
      itemDetailsPopup.style.display = 'none';
  }

  // Example: Attach click event to card
  var cards = document.querySelectorAll('.item-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
        var productId = card.getAttribute('data-product-id');
        showItemDetails(productId);
    });
  });

});
