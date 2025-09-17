// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Operador ternario
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// El operador ternario (condición ? valorSiVerdadero : valorSiFalso) es una forma corta y elegante de escribir un if...else.
// 1)if...else

let edad = 20;

if(edad>= 18){
    console.log("Es mayor de edad")
} else {
    console.log("No es mayor de edad")
}

// 2)  Operador ternario (misma lógica en una sola línea)
console.log(edad >= 18 ? "Es mayor de edad" : "No es mayor de edad")

// 3) Ejemplo con variables
let temperatura = 20;
let estado = temperatura > 25 ? "Hace calor" : "Hace frio";
console.log(estado)

// 4) Usando operadore tenrario en una funcion

// long version
const validador_pares = input => {
    let result = input %2 ==0 ? "Par": "Impar";
    return result
}
console.log(validador_pares(9))

//SHort version
const validador_pares2 = input => input %2 ==0 ? "Par": "Impar";
console.log(validador_pares2(10))



// 5) Ternario anidado

let nota_examen = 95;

let resultado = 
    nota_examen>= 90 ? "Excelente":
    nota_examen >= 70 ? "aprobado" :
        "Reprobado";

console.log(resultado);




