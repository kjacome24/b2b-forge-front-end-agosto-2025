
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// FUnciones utiles que usan Callbacks  
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 



// 1) Función .map()
// Permite aplicar una función a cada elemento del array, creando un nuevo array con los resultados transformados, sin modificar el array original.

// Option 1 (Recomendada)
let precioUSD = [10,20, 30];
let precioPesos = precioUSD.map(
    precio => precio * 1000
);
console.log(precioPesos);

// Option 2 para practicar uso de funciones anidadas.
const convert = input => input * 1000;
let precioPesos2 = precioUSD.map(convert);
console.log(precioPesos2)






// 2) .filter()
// Devuelve un nuevo array solo con los elementos que cumplen la condición del callback. se usa cuando quieres “seleccionar” datos de un array.

// Option 1 (Recomendada)
let edades = [15,18,22,30, 12];
let mayoresEdad = edades.filter(
    edad => 
    edad>=18);
console.log(mayoresEdad)

// Option 2 para practicar uso de funciones anidadas.
const mayor_edad = (edad) => edad >= 18;
let mayores2 = edades.filter(mayor_edad)
console.log(mayores2)


// Ejemplo con objetos anidados en el arreglo
let personas = [
    {name: "kevin", edad: 35},
    {name: "Laura", edad: 17}
]

let mayores_edad3 = personas.filter(
    persona => 
    persona.edad>=18
)
console.log(mayores_edad3)




// 3) .forEach()

//Ejemplo en donde se muta el array original y se usa el valor y el indice.
let numeros = [10, 50, 20];

console.log(numeros)
numeros.forEach( (valor,i) =>{
    numeros[i] = valor *2; 
}

)
console.log(numeros)





// 4.find())
let productos = [
    {nombre: "Mouse", precio : 25},
    {nombre: "keyboard", precio : 45},
    {nombre: "Laptop", precio : 700}
]

let producto_caro = productos.find(
    producto => producto.precio >100
)

console.log(producto_caro)