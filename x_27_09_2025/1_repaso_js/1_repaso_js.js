const numero = 10;
let numero2 = 20;

// numero = 20;
numero2 = 30;


const arreglo = [3,6,7];
arreglo[0] = 10;
console.log(arreglo);


let numero3;
console.log(numero3)


const numero4;
console.log(numero4)


// -----------------------FUnciones


function suma (a,b){
    return a + b
}

console.log(suma(10,20));


// arrow functions

const suma2 = (a, b) => {
    return a + b 
}

console.log(suma2(3,2));


const suma3 = (a,b) => a + b;
console.log(suma3(3,4))

// funcion anonima
function () {

}

()=> {}

// --------------calllbacks



function layer_outside(fn) {
    console.log("Ejecutando funcion afuera")
    fn();
}

function layer_inside(){
    console.log("Ejecutando funcion adentro")
}

layer_outside(layer_inside);

// layer_outside(layer_inside());



const layer_outside2 = fn => {
    console.log("Afuera");
    fn();
}

const layer_inside2 = () => {
    console.log("adentro")
}


layer_outside2(layer_inside2);



// ------------funciones por default


// map
let superHeores = ["Flash", "Batman", "Aquaman", "Wonderwoman"];
const superHeoresModified = superHeores.map(
    superHeroe => superHeroe + "_"
);

console.log(superHeoresModified);



let numeroz = [10,20,15,50];

const numerozCopia = numeroz.map(
    numero => numero / 2
)
console.log(numerozCopia);








//filter


const apellidos = ["Jacome", "Jamenez", "Jaarez", "Martinez", "Rengifo"];

const apellidosFiltrados = apellidos.filter(
    apellido => apellido.includes("Ja")
)
console.log(apellidosFiltrados);

const modelos = [1990, 2000, 2010, 2025, 2024];

const modelosFiltrados = modelos.filter(
    modelo => modelo > 2010
)

console.log(modelosFiltrados)


const superHeores2 = [
    {name: "Flash", edad: 25, gender: false}, {name: "aquaman", edad: 40, gender: false}, {name: "WonderWoman", edad: 100, gender: true}
]


// const superHeores2Modified = superHeores2.filter(
//     superx => superx.edad > 30
// )

// console.log(superHeores2Modified);


// const superHeores2Modified = superHeores2.filter(
//     superx => superx.gender == true
// )


// const superHeores2Modified2 = superHeores2Modified.map(
//     superz => superz.name
// )
// console.log(superHeores2Modified2);


const superHeroesModifiedx = superHeores2.filter(heroe => heroe.gender == true).map(heroe => heroe.name);
console.log(superHeroesModifiedx);




const heroes = [
    {name: "Flash", edad: 25, gender: false}, 
    {name: "aquaman", edad: 40, gender: false}, 
    {name: "WonderWoman", edad: 100, gender: true},
    {name: "Falcon", edad: 30, gender: true},
    {name: "Bataman", edad: 40, gender: false}
]

// const heroesModified = heroes.filter(heroe => heroe.gender == true && heroe.edad > 30 ).map(heroe => heroe.name);
// console.log(heroesModified)

const heroesModified = heroes.filter(heroe => heroe.gender == true || heroe.edad > 30 ).map(heroe => heroe.name);
console.log(heroesModified)






// foreach
let numeroxx = [[4],[5]]
numeroxx.forEach(
    arreglo => 
        // arreglo.push(10)
        console.log(arreglo)
)
console.log(numeroxx)



let numeros = [10,50,20];

numeros.forEach(
    numero => numero * 2
)

 console.log(numeros)


//  ====

let total = 0;

let numerosz = [10,50,20];

numerosz.forEach(
    numero => total = total + numero
)

 console.log(total)

//  ------

let numeroq = [10,50,20];

numeroq.forEach(
    (numero, i )=> numeroq[i] = numero *2
)

 console.log(numeroq)



//  ;;;;;


const numerosExtra = [10,5,4,8,9];
const numerosExtra2 = [];


numerosExtra.forEach(
    numero => numerosExtra2.push(numero * 2)
)

console.log(numerosExtra2);


// find
const frutas = [
    {name: "Banana", price: 5},
    {name: "Blueberry", price: 10},
    {name: "Aplle", price: 15}
]


const fruta_filter_find = frutas.find(
    fruta => fruta.price > 5
)
console.log(fruta_filter_find)



//////Operador ternarion

let edad = 24;
// if (edad>=18) {
//     console.log("Es mayor de edad")
// } else {
//     console.log("No es mayor de edad")
// }

// console.log(
// edad>=18? "Es mayor de edad" : "No es mayor de edad"
// )


const verificador = input => input>=18? "Es mayor de edad" : "No es mayor de edad";
console.log(verificador(edad))



// ------------------ternario anidado

const verificador2 = input => input<18? "Joven" : input < 65? "adulto" : "viejo";
console.log(verificador2(17));



// inmutabilidad

const test3 = [10,5,4,8,9];
Object.freeze(test3);

// test3.push(4)
test3[0] = 5;
console.log(test3)

