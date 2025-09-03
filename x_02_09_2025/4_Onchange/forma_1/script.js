// let leyenda = document.getElementById("leyenda");
let leyenda = document.querySelector("p");

function select_filtro(input){
    leyenda.innerText = input.value;
}