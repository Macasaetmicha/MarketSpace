function toggleOtherInput() {
    var otherInput = document.getElementById('otherInput');
    var reasonSelect = document.getElementById('reason');

    if (reasonSelect.value === 'other') {
        otherInput.classList.remove('hidden');
    } else {
        otherInput.classList.add('hidden');
    }
}

function report() {
    alert("Thank you! Your report has been submitted successfully. Our team will review the information, and appropriate action will be taken if necessary. Your contribution helps maintain a safe and respectful community.");
    window.location.assign("home2.html");
}