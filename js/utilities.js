

function getInputValueById(id){
    const inputs = document.getElementById(id).value;
    const inputInNum = parseInt(inputs);
    return inputInNum;
}

function getInnerTextValueById(id){
    const inputs = document.getElementById(id).innerText;
    const inputInNum = parseInt(inputs);
    return inputInNum;
}

function getSectionById(id){
document.getElementById('donate-info').classList.add('hidden');
document.getElementById('history-info').classList.add('hidden');
document.getElementById(id).classList.remove('hidden');
}

function getTitleById(id){
    const title = document.getElementById(id).innerText;
    return title;
}

// button-functionality

const historySection = document.getElementById('btn-history');
const donationSection = document.getElementById('btn-donation');

historySection.addEventListener('click',function(){
    historySection.classList.add("bg-primaryColor",);
    donationSection.classList.remove("bg-primaryColor");

    donationSection.classList.add("bg-white");
    historySection.classList.remove("bg-white");
});

donationSection.addEventListener('click',function(){
    donationSection.classList.add("bg-primaryColor");
    historySection.classList.remove("bg-primaryColor",);

    historySection.classList.add("bg-white");
    donationSection.classList.remove("bg-white");
});


