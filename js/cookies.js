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