function showSellerForm() {
    document.getElementById("sellerForm").style.display = "block";
    document.getElementById("buyerForm").style.display = "none";

    document.getElementById('cpNum_buyer').removeAttribute('required');
    document.getElementById('address_buyer').removeAttribute('required');

    document.getElementById('cpNum_seller').setAttribute('required', 'required');
    document.getElementById('address_seller').setAttribute('required', 'required');
    document.getElementById('shop-name').setAttribute('required', 'required');
    document.getElementById('description').setAttribute('required', 'required');
}

function showBuyerForm() {
    document.getElementById("sellerForm").style.display = "none";
    document.getElementById("buyerForm").style.display = "block";

    document.getElementById('cpNum_seller').removeAttribute('required');
    document.getElementById('address_seller').removeAttribute('required');
    document.getElementById('shop-name').removeAttribute('required');
    document.getElementById('description').removeAttribute('required');

    document.getElementById('cpNum_buyer').setAttribute('required', 'required');
    document.getElementById('address_buyer').setAttribute('required', 'required');
}

const formSteps = document.querySelectorAll('.signup-form');
let currentStep = 0;

function nextStep(targetStep) {
    if (targetStep >= 1 && targetStep <= formSteps.length) {
        formSteps[currentStep].style.display = 'none';
        currentStep = targetStep - 1; 
        formSteps[currentStep].style.display = 'block';
    }
}

function previousStep(targetStep) {
    if (targetStep >= 1 && targetStep <= formSteps.length) {
        formSteps[currentStep].style.display = 'none';
        currentStep = targetStep - 1; 
        formSteps[currentStep].style.display = 'block';
    }
}

function login() {
    console.log("Redirecting to the home page.");
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if (email == 'michaelamacasaet@gmail.com' && pass == 'Mica123'){
        alert("Login Success")
        window.location.assign("home2.html");
    }else{
        alert("Wrong entry, please check input.")
    }

}

function formatPhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, '');

    if (phoneNumber.length === 0) {
        input.value = '';
    } else {
        const formattedPhoneNumber = phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3');
        input.value = formattedPhoneNumber.slice(0, 13);
    }
}

const termsDialog = document.getElementById("termsDialog");

function showTermsDialog() {
    termsDialog.showModal();
}

function closeTermsDialog() {
    termsDialog.close();
}
  
function signup() {
    console.log("Redirecting to the home page.");

    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var confirmPass = document.getElementById('confirm-password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (pass.length < 8 || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass) || !/\d/.test(pass) || !/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        alert("Password must meet the following criteria:\n- At least 8 characters\n- Contains uppercase letters, lowercase letters, numbers, and symbols");
        return false;
    }

    if (pass !== confirmPass) {
        alert("Password and confirm password do not match.");
        return;
    }

    alert("Login Success");
    window.location.assign("home2.html");
}

function forgot() {
    console.log("Redirecting to the home page.");

    alert("Email was sent to change password.");
    window.location.assign("change_pass.html");
}

function change_pass() {
    console.log("Redirecting to the home page.");
    var pass = document.getElementById('password').value;
    var confirmPass = document.getElementById('c_password').value;

    if (pass.length < 8 || !/[A-Z]/.test(pass) || !/[a-z]/.test(pass) || !/\d/.test(pass) || !/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        alert("Password must meet the following criteria:\n- At least 8 characters\n- Contains uppercase letters, lowercase letters, numbers, and symbols");
        return false;
    }

    if (pass !== confirmPass) {
        alert("Password and confirm password do not match.");
        return;
    } 

    alert("Passwrod changed successfully.");
    window.location.assign("signin.html");

}
