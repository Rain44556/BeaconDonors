
 function addClickListener(btnId, inputId, donationId){
    document.getElementById(btnId).addEventListener('click', function(event){
        event.preventDefault();
    
        const quotaInjuredDonation = getInputValueById(inputId);
        const addDonation = getInnerTextValueById(donationId);
        const mainBalance = getInnerTextValueById('main-balance');
    
        const updateDonation = quotaInjuredDonation + addDonation;
        document.getElementById(donationId).innerText = updateDonation;
    
        const updateBalanceAmount = mainBalance - quotaInjuredDonation;
        document.getElementById('main-balance').innerText = updateBalanceAmount;
    
        document.getElementById(inputId).value = '';
        document.getElementById(my_modal).style.display = block;
    });
}
addClickListener('btn-quota-injured', 'quota-injured-donation-input', 'quota-injured-donation-addMoney');
addClickListener('btn-noakhali', 'noakhali-donation-input', 'noakhali-donation-addMoney');
addClickListener('btn-comilla', 'comilla-donation-input', 'comilla-donation-addMoney');
addClickListener('btn-feni', 'feni-donation-input', 'feni-donation-addMoney');

// document.getElementById('btn-quota-injured').addEventListener('click', function(event){
//     event.preventDefault();

//     const quotaInjuredDonation = getInputValueById('quota-injured-donation-input');
//     const addDonation = getInnerTextValueById('quota-injured-donation-addMoney');
//     const mainBalance = getInnerTextValueById('main-balance');

//     const updateDonation = quotaInjuredDonation + addDonation;
//     document.getElementById('quota-injured-donation-addMoney').innerText = updateDonation;

//     const updateBalanceAmount = mainBalance - quotaInjuredDonation;
//     document.getElementById('main-balance').innerText = updateBalanceAmount;

//     document.getElementById('quota-injured-donation-input').value = '';
// });

