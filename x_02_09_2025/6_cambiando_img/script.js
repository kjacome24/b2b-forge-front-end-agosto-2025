let imagen = document.querySelector("#imagen");

function cambio (input){
    console.log(imagen);
    console.log(input)
    imagen.src = "./../../x_01_09_2025/libroteca/img/" + input.innerText + ".png";
}