

console.log("JS is up and running");

let hydrogen = document.getElementById("h");
let lithium = document.getElementById("li");
let beryllium = document.getElementById("be");


hydrogen.addEventListener("click", function() {
    alert(this.dataset.info)
})


lithium.addEventListener("click", function() {
    alert(this.dataset.info)
})

beryllium.addEventListener("click", function() {
    alert(this.dataset.info)
})