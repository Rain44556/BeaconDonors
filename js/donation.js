document.getElementById('btn-quota-injured').addEventListener('click', function(event){
    event.preventDefault();

    const quotaInjuredDonation = getInputValueById('quota-injured-donation-input');
    console.log(quotaInjuredDonation);

    const addDonation = getInnerTextValueById('quota-injured-donation-addMoney');
    console.log(addDonation);

    const mainBalance = getInnerTextValueById('main-balance');
    console.log(mainBalance);

    const updateDonation = quotaInjuredDonation + addDonation;
    document.getElementById('quota-injured-donation-addMoney').innerText = updateDonation;
    console.log(updateDonation);
});

