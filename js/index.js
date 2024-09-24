
 function addClickListener(buttonId, inputId, donationId,titleId){
    document.getElementById(buttonId).addEventListener('click', function(){
        // event.preventDefault();
    
        //------------------------ donation -----------------------
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

        // --------------history----------
        const titleDistrict = getTitleById(titleId);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="w-1/2 border-2 border-solid m-8 p-5">
        <h1 class="text-base font-semibold fontLexend">${addDonation} Taka is Donated for ${titleDistrict} </h1>
        <p class="text-xs text-gray-700 font-light fontLexend">Date: ${Date()} </p>
        </div>`
        
        document.getElementById('history-info').appendChild(div);
    });
}

addClickListener('btn-quota-injured', 'quota-injured-donation-input', 'quota-injured-donation-addMoney', 'title-quota');
addClickListener('btn-noakhali', 'noakhali-donation-input', 'noakhali-donation-addMoney', 'title-noakhali');
addClickListener('btn-comilla', 'comilla-donation-input', 'comilla-donation-addMoney', 'title-comilla');
addClickListener('btn-feni', 'feni-donation-input', 'feni-donation-addMoney', 'title-feni');