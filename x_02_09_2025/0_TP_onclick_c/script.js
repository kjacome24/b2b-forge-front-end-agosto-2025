console.log("Js is up and running");



function cerrar_sesion(input) {
    input.innerText = "Cerrar Sesion";
    input.style.background = "red";
}


function elminar(input) {
    input.remove();
}

let contador1 = 0;
let contador2 = 0;

function me_gusta(input) {
    contador1++;
    input.innerText = contador1 + " me gusta";
    alert("Gato was liked")
}

function me_gusta2(input) {
    contador2++;
    input.innerText = contador2 + " me gusta";
    alert("Golden Retriever was liked")
}