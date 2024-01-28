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
                                <a id="notif1" href="#"><p><strong>Transaction:</strong> Seller Marked the item as sold.</p></a>
                            </div>
                            <button class="delete-notification">X</button>
                        </div>
        
                        <div class="notification-item">
                            <img src="img/user2.png" alt="User">
                            <div class="notification-info">
                                <a id="notif2" href="messages.html"><p><strong>Message:</strong> Seller1 sent you a message.</p></a>
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

      setAccountLink();
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

      setAccountLink();
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
  
function setAccountLink() {
    console.log("SET ACCOUNT");
    var userType = getUserType();
    /*NavBar*/
    var accountLink = document.getElementById('accountLink');
    var transLink = document.getElementById('transLink');
    var notifLink1 = document.getElementById('notif1');

    /*Messages*/
    var ImgLink = document.getElementById('recipient-img-link');
    var NameLink = document.getElementById('recipient-name-link'); 

    if (userType === 'buyer') {
        console.log("BUYER LINK SET");
        accountLink.href = 'userAcc.html';
        transLink.href = 'trans.html';
        notifLink1.href = 'trans.html';
        ImgLink.href = 'view_user2.html';
        NameLink.href = 'view_user2.html';

    } else if (userType === 'seller') {
        console.log("SELLER LINK SET");
        accountLink.href = 'userAcc2.html';
        transLink.href = 'trans2.html';
        notifLink1.href = 'trans2.html';
        ImgLink.href = 'view_user.html';
        NameLink.href = 'view_user.html';
    } else {
        console.log("Unknown user type or not logged in.");
        accountLink.href = '#'; 
        transLink.href = '#'; 
        notifLink1.href = '#';
        ImgLink.href = '#'; 
        NameLink.href = '#'; 
    }
}

setAccountLink();

function logout() {
    document.cookie = "userType=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "signin.html"; 
}