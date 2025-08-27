// =====================================================
//  CLASE: Fundamentos de JavaScript (Ejemplos Prácticos)
// =====================================================

// 1) console.log--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("Hola Mundo");

// 2) Variables: var, let, const --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var nombre;
let nombre2;
const nombre3 = "Arturo";
console.log(nombre, nombre2, nombre3);

var nombre = "Rubern"; // var can be redeclared
nombre2 = "Duque";     // let can be reassigned
// nombre3 = "Ramirez"; // ❌ const no redeclare/assign
console.log(nombre, nombre2, nombre3);

// 3) Tipos de datos --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let name = "Kevin";
let age = 35;
let decimales = 10.1;
let isCool = false;
let mayor_edad = true;
let numerox;
let x = null;
let array1 = [1,5,6,7]
let object1 = {
    "id" : 3
}

console.log(typeof name)
console.log(typeof age)
console.log(typeof decimales)
console.log(typeof isCool)
console.log(typeof mayor_edad)
console.log(typeof numerox)
console.log(typeof x)
console.log(typeof array1)
console.log(typeof object1)


// 4) Strings y Ejercicios simples--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Concatenación tradicional

const nombres =  "Kevin Arturo";
const apellidos = "Jacome Duque";

console.log(nombres,apellidos)
console.log(nombres + " " + apellidos)

// Ahora, Template Strings (más moderno y legible)
let sentence = `My name is ${nombres} and  my last name is ${apellidos} `;
console.log(sentence)
//Métodos de String 

console.log(nombres.length)
console.log(nombres.toUpperCase())
console.log(nombres.toLowerCase())
console.log(nombres.substring(0,5));
console.log(nombres.split(""))


// 6) Operaciones numéricas --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let numero1 = 6;
let numero2  = 10;

let numero_total = numero1 + numero2;
console.log(numero_total)


console.log("Multiplicacion", numero1 * numero2 );


let greeting = "hola";

console.log(greeting + numero1)

console.log("Divis:" , numero2 / numero1 )

console.log("Es divisible", numero2 % numero1)


// 7) Condicionales--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let porducto_agotado = 5;

if (porducto_agotado == 1) {
    console.log("THis is sold out")
} else {
    console.log("This is in storage")
}


let age2 = 20 ;
if (age2<15){
    console.log("You are a kiddo")
} else if (age2<18) {
    console.log("Ok, you are not as young as before but still under age")
} else {
    console.log("You are an adult!")
}

let hombre = true;

if(hombre){
    console.log("Si es hombre")
} else {
    console.log("Es mujer ")
}


let numberz = 11;

if (numberz % 5 == 0) {
    console.log("Es multiplo de 5")
} else {
    console.log("No es multiplo de 5")
}



let tieneDinero = true;
let tieneTiempo = false;


if(tieneDinero && tieneTiempo){
    console.log("Me voy de vacaciones")
} else if (tieneDinero || tieneTiempo )
{
    console.log("Te falta algo, pero ya casi")
}

else {
    console.log("Me falta algo")
}




// 8) Arrays--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



var listaSuper = ["Arroz", "Frijoles", "Lentejas", "Pan" ];

console.log(listaSuper[0])

let producto = listaSuper[0];

console.log(producto);


listaSuper[0] = "Jamon";

console.log(listaSuper);


listaSuper.push("Vino");
console.log(listaSuper);


listaSuper.pop();
console.log(listaSuper)




let nnew_list = listaSuper.slice(2,4)
console.log(nnew_list)


