const contenedorx = document.getElementById("contenedor");


contenedorx.addEventListener('mouseover', 
    function(){
    contenedorx.style.background = "green";
    contenedorx.style.border = "2px solid green";
})

contenedorx.addEventListener('mouseout', function(){
    contenedorx.style.background = "aqua";
})

