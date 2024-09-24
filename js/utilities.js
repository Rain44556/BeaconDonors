

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