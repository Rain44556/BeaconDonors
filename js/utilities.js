

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

