document.addEventListener("DOMContentLoaded", function() {
    const userTypeCookie = getUserType();
    console.log(userTypeCookie)
    const dynamicNavbarContainer = document.getElementById("dynamicNavbar");
  
    if (userTypeCookie === "seller" || userTypeCookie === "buyer") {
      dynamicNavbarContainer.innerHTML = `
        <div class="mobileHeader">
            <a href="home2.html" class="logo">
                <i class="fa-solid fa-shop"></i>
                <span class="company-name">
                    <span class="highlight">M</span>arket<span class="highlight">S</span>pace
                </span>
            </a>
            <button onclick="openMenu()" class="hamburger">&#8801;</button>
        </div>

        <nav class="menu">
            <ul class="nav-list">
                <li class="nav-listItem header-icon">
                    <a href="messages.html" class="icon-envelope"><i class="fa-solid fa-envelope"></i></a>
                </li>

                <li class="header-icon dropdown">
                    <a href="#" class="icon-bell"><i class="fa-solid fa-bell"></i></a>
                    <div class="dropdown-content notifications">
                        <div class="notification-item">
                            <img src="img/user1.png" alt="User">
                            <div class="notification-info">
                                <p><strong>Transaction:</strong> Seller Marked the item as sold.</p>
                            </div>
                            <button class="delete-notification">X</button>
                        </div>
        
                        <div class="notification-item">
                            <img src="img/user2.png" alt="User">
                            <div class="notification-info">
                                <p><strong>Message:</strong> Seller1 sent you a message.</p>
                            </div>
                            <button class="delete-notification">X</button>
                        </div>
                    </div>
                </li>

                <li class="header-icon dropdown">
                    <a href="#" class="icon-profile"><i class="fa-solid fa-user"></i></a>
                        <div class="dropdown-content">
                            <a class="profile-opt" id="accountLink" href="#">Account</a>
                            <a class="profile-opt" id="transLink" href="#">Transactions</a>
                            <a class="profile-opt" href="#" onclick="logout();">Logout</a>
                        </div>
                </li>

                <li class="header-icon">
                    <a href="about.html" class="icon-about"><i class="fa-solid fa-circle-info"></i></a>
                </li>

            </ul>
        </nav>
      `;
    } else {
      dynamicNavbarContainer.innerHTML = `
      <div class="mobileHeader">
      <a href="index.html" class="logo">
          <i class="fa-solid fa-shop"></i>
          <span class="company-name">
              <span class="highlight">M</span>arket<span class="highlight">S</span>pace
          </span>
      </a>
     <button onclick="openMenu()" class="hamburger">&#8801;</button>
  </div>
  <nav class="menu">
     <ul class="nav-list">
        <li class="nav-listItem"><a href="index.html">Home</a></li>
        <li><a href="signin.html">Login</a></li>
        <li><a href="signup.html">Start Selling</a></li>
        <li><a href="about.html" class="icon-about"><i class="fa-solid fa-circle-info"></i></a></li>         
     </ul>
  </nav>
      `;
    }
});
  

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