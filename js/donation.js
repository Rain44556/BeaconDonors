
 function addClickListener(buttonId, inputId, donationId,titleId){
    document.getElementById(buttonId).addEventListener('click', function(event){
        event.preventDefault();
    
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
        <h1 class = "w-1/2 text-base font-semibold fontLexend border-2 border-solid m-8 p-5">${addDonation} Taka is Donated for ${titleDistrict} </h1>
        <p> </p>`
        document.getElementById('history-info').appendChild(div);
    });
}

addClickListener('btn-quota-injured', 'quota-injured-donation-input', 'quota-injured-donation-addMoney', 'title-quota');
addClickListener('btn-noakhali', 'noakhali-donation-input', 'noakhali-donation-addMoney', 'title-noakhali');
addClickListener('btn-comilla', 'comilla-donation-input', 'comilla-donation-addMoney', 'title-comilla');
addClickListener('btn-feni', 'feni-donation-input', 'feni-donation-addMoney', 'title-feni');