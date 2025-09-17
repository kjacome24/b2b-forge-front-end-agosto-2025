// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Callbacks  
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Un callback es una función que se pasa como argumento a otra función y se ejecuta dentro de esa función.

// 1. Callbacks: pasar funciones como argumentos y ejecutarlas luego
function afuera(fn){
    console.log("Funcion de afuera empezo");
    fn();
    console.log("Funcion de afuera termino")
}

function adentro() {
    console.log("Funciond de adentero ejecutada : Callback")
}
afuera(adentro);


// 1.2 Callbacks con arrow funtion
const afuera2 = (fn) => {
    console.log("Funcion de afuera empezo");
    fn();
    console.log("Funcion de afuera termino")
}

const adentro2 = ()=> {
    console.log("Funciond de adentero ejecutada : Callback")
}

afuera2(adentro2)
// afuera2(adentro2()) no se debe hacer


// 2) callback CON PARÁMETROS
const calculadora = (funcion_entrada,a,b) => {
    let resultado = funcion_entrada(a,b);
    return resultado;
}

const sumax = (a,b) => a + b;
const restax = (a,b) => a - b;

console.log(calculadora(5,2,restax));

// 3) callback con deafult function:

const multiplicar = (a,b) => a*b;
const calculadora2 = (a,b,funcion_entrada = multiplicar) => {
    let resultado = funcion_entrada(a,b);
    return resultado;
}
const sumaz = (a,b) => a + b;
const restaz = (a,b) => a - b;

console.log(calculadora2(5,2));
console.log(calculadora2(5,2, sumaz));