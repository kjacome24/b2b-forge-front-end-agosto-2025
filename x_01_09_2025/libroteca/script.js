console.log("My JS is up ")
let generox = document.querySelector('#genero');


function inicio_de_sesion() {
    alert("Inicio de sesion exitoso!")
}


function genero(input){

    console.log(input)
    generox.innerText = input.innerText;
}


function rentar(input){
    input.innerText = "No disponible";
    input.style.background = "red";
    input.style.color = "white";

}