
function handleMarkAsSold(button) {
    let trans = button.closest(".trans");
    let transBtns = button.closest(".trans-btns");
    let statusElement = trans.querySelector(".trans-details .details p.status"); 

    statusElement.textContent = "Status: SOLD";

    trans.classList.remove("trans");
    trans.classList.add("trans-done");

    transBtns.remove();
    
    let transactionCards = trans.closest(".transaction-cards");
    transactionCards.appendChild(trans);
}

function handleCancel(button) {
    let trans = button.closest(".trans");
    let transBtns = button.closest(".trans-btns");
    let statusElement = trans.querySelector(".trans-details .details p.status"); 

    statusElement.textContent = "Status: CANCELLED";

    trans.classList.remove("trans");
    trans.classList.add("trans-done");

    transBtns.remove();
    
    let transactionCards = trans.closest(".transaction-cards");
    transactionCards.appendChild(trans);
}