let lin_like = document.querySelector("#lin_like");
let lina_like = document.querySelector("#lina_like");
let mateo_like = document.querySelector("#mateo_like");



let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

function contador1(){
    cont1++;
    lin_like.innerText = cont1 + " like(s)"
}

function contador2(){
    cont2++;
    lina_like.innerText = cont2 + " like(s)"
}

function contador3(){
    cont3++;
    mateo_like.innerText = cont3 + " like(s)"
}