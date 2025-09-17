// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Funciones en JavaScript
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1) Función con nombre: más fácil de depurar
function test_funcion_nombre (nombre) {
    return `hola, ${nombre}`;
}
console.log(test_funcion_nombre("XImena"));

// 2) Función anónima: ideal para callbacks
const test_anonima = function(nombre){
    return `hola, ${nombre}`;
}
console.log(test_anonima("Sebastian"));

// 3) Función flecha (Arrow Function)
const test_flecha = (nombre) => {
    return `hola, ${nombre}`;
}
console.log(test_flecha("Raul"));


// 3.1) Flecha con retorno implícito (optimizada)
const test_flecha2 = nombre => `hola, ${nombre}`;
console.log(test_flecha2("Carolina"))

// 3.2) funciones flecha con mas de un input
const suma = (a,b) => a + b; 
console.log(suma(3,2));

// 3.3) Flecha sin parámetros
const alerEjemplo = () => console.log("Hola mundo!")
alerEjemplo()


// 3.4) Diferencia de `this`
const persona = {
    nombre: "Kevin",
    funcionConNombre : function mostrarNombre () {
        console.log("Hola " + this.nombre)
    },
    funcionAnonima : function() {
        console.log("Hola " + this.nombre)
    },
    funcionFlecha : () => {
        console.log("Hola " + this.nombre)
    }
}

persona.funcionConNombre();
persona.funcionAnonima();
persona.funcionFlecha();


// 4 Ejercicio práctico para estudiantes
const avengers = [
  { nombre: "Spider-Man", edad: 17 },
  { nombre: "Iron Man", edad: 40 },
  { nombre: "Black Widow", edad: 28 },
  { nombre: "Shuri", edad: 16 },
];

// 4.1 Versión con for...of (Metodo largo)
const finderMayorEdad = (array_input) => {
    const new_array = []
    for(const element of array_input){
        if (element.edad >=18){
            new_array.push(element)
        }
    }
    return new_array
}
const new_array_mayor = finderMayorEdad(avengers);
console.log(new_array_mayor);


// 4.2 Versión idiomática con filter
const finderMayorEdad2 = (array_input) => array_input.filter(avenger => avenger.edad >=18)
console.log(finderMayorEdad2(avengers));



