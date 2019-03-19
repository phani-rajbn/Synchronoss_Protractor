function $(element){
    return document.getElementById(element);
}

function $click(element, func){
    $(element).addEventListener('click', func);
}