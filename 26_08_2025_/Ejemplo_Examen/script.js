function lefclick(){

    var mainbanner = document.querySelector("#mainbanner");
    mainbanner.src = "images/stonepunk.png"
};

function rightclick(){

    var mainbanner = document.querySelector("#mainbanner");
    mainbanner.src = "images/pixel-ninjas-2.png"
};

function linuxicon(){
    var numshoppingcart = document.querySelector("#numshoppingcart");
    alert("The game is supported on Linux")
}

var num=0;
function shoppingcar(){
    num +=1;
    numshoppingcart.innerText=num;
}