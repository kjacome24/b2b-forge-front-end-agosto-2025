let leyenda = document.querySelector("p");
let tipo = document.querySelector("#tipo");



tipo.addEventListener("change", function(){
    leyenda.innerText = tipo.value; 
})
