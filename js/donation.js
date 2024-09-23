
 function addClickListener(buttonId, inputId, donationId){
    document.getElementById(buttonId).addEventListener('click', function(event){
        event.preventDefault();
    
        const donationAmount = getInputValueById(inputId);
        const addDonation = getInnerTextValueById(donationId);
        const mainBalance = getInnerTextValueById('main-balance');

        // alert
        if(isNaN(donationAmount) || donationAmount < 0 || mainBalance < donationAmount){
            alert("Failed to add amount");
            return;
        }
     
    
        const updateDonation = donationAmount + addDonation;
        document.getElementById(donationId).innerText = updateDonation;
    
        const updateBalanceAmount = mainBalance - donationAmount;
        document.getElementById('main-balance').innerText = updateBalanceAmount;
    
        document.getElementById(inputId).value = '';
        // modal
        document.getElementById("my_modal").showModal();
    });
}

addClickListener('btn-quota-injured', 'quota-injured-donation-input', 'quota-injured-donation-addMoney');
addClickListener('btn-noakhali', 'noakhali-donation-input', 'noakhali-donation-addMoney');
addClickListener('btn-comilla', 'comilla-donation-input', 'comilla-donation-addMoney');
addClickListener('btn-feni', 'feni-donation-input', 'feni-donation-addMoney');

