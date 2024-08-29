//abre e fecha menu
function abre(id){
    document.getElementById(id).style.width = '22%';
    document.getElementById(id).style.boxShadow = '0px 5px 2px 10000px rgba(0, 0, 0, 0.521)'
}
function fecha(id){
    document.getElementById(id).style.width = '0%';
    document.getElementById(id).style.boxShadow = '0px 0px 0px 0px rgba(0, 0, 0, 0.521)'
}

//transição de divs