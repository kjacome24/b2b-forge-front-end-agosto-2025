console.log("Js is up and running!");


// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");


// btn1.addEventListener("click", 
//     function(){
//     this.innerText = "Off"
// }

// )

// btn2.addEventListener("click", 
//     function(){
//     this.innerText = "Off"
// }

// )

// btn3.addEventListener("click", 
//     function(){
//     this.innerText = "Off"
// }

// )


const buttons = document.querySelectorAll("button");

console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener("click",
        function(){
            this.innerText = "Off"
        }

    )
})
