

console.log("JS is up and running");

let hydrogen = document.getElementById("h");
let lithium = document.getElementById("li");
let beryllium = document.getElementById("be");


hydrogen.addEventListener("click", function() {
    alert(hydrogen.dataset.info)
})


lithium.addEventListener("click", function() {
    alert(lithium.dataset.info)
})

beryllium.addEventListener("click", function() {
    alert(beryllium.dataset.info)
})