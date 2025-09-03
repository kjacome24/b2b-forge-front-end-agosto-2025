let leyenda = document.querySelector("#leyenda");
let input_text = document.querySelector("#input_text");

input_text.addEventListener("input", function(){
    leyenda.innerText = input_text.value;
})
