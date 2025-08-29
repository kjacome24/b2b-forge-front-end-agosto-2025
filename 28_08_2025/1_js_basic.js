/// 1) Arrays-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let listaSuper = ["Arroz","Lentejas", "Carne", "pollo", 1, 4 , [1,2,3], {"id": 2}]

console.log(listaSuper)  // Muestra todo el arreglo

console.log(listaSuper[6][1])  // Accede al segundo valor del arreglo dentro de listaSuper

console.log(listaSuper[7])  // Accede al objeto en la posición 7


listaSuper.push("Vino")  // Agregar al final
console.log(listaSuper)

listaSuper.unshift("Vodka")  // Agregar al inicio
console.log(listaSuper)


listaSuper.pop()  // Eliminar el último elemento
listaSuper.shift()  // Eliminar el primer elemento

let newx = listaSuper.pop()  // Eliminar al final y guardar ese valor en newx


// -------------------------------------

let super2 = [0, 8 , 9, 7]

super2.splice(1,1)  // Eliminar en un índice (posición 1 → elimina el 8)

super2.splice(1, 0, 3)  // Agregar en un índice específico (posición 1 → agrega 3)
console.log(super2)

super2.splice(1, 1, 5)  // Reemplazar en un índice específico (posición 1 → cambia el 3 por 5)
console.log(super2)

console.log(super2.includes(7))  // Verificar si un elemento existe en el array


// -------------------------------------

let newarray = ["Hola", "Kevin", "Carolina"]

console.log(newarray.includes("Kevin2"))  // Verifica si un string está en el array

console.log(newarray.indexOf("Carolina"))  // Retorna el índice donde se encuentra el valor

console.log(newarray.length)  // Retorna el tamaño del arreglo


//// 2) Objetos-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let persona = {
    nombre : "Kevin",
    apellido : "Jacome",
    edad : 35,
    esEstudiante : false,
    Lenguages : ["Js", "Python", "C#.net"]
}


// Acceder a propiedades del objeto
console.log(persona.nombre)     // Acceder con notación de punto
console.log(persona["nombre"])  // Acceder con notación de corchetes


// Modificar un valor existente
persona.nombre = "Arturo"
console.log(persona)


// Agregar un nuevo valor dentro del arreglo de lenguajes
persona.Lenguages.push("Ruby")
console.log(persona)


// Modificar otra propiedad del objeto
persona.apellido = "Jacome Duque"
console.log(persona)


//// 3) Bucles for-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Bucle clásico con contador
for (let i = 0; i <= 5; i += 1) {
    console.log(i)   // Imprime números del 0 al 5
}


// Lista de productos
var listaSuper3 = ["Arroz", "Fideos", "Platanos"]

// Agregar un nuevo producto
listaSuper3.push("Bananas")


// Recorrer con for clásico usando índices
for (let i = 0; i < listaSuper3.length; i++) {
    // Solo imprime productos en índices impares
    if (i % 2 != 0) {
        console.log("Producto", i, ":", listaSuper3[i])
    }
}


// Recorrer con for...of (más sencillo para arrays)
for (let productox of listaSuper3) {
    console.log("Producto :", productox)
}




//// 4) Bucles while-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// While simple con condición hasta que numero sea mayor que 5
var numero = 0

while (numero <= 5) {
    console.log(numero)   // Imprime números de 0 a 5
    numero++              // Incrementa en 1
}


// While con condición booleana manual
var numero = 0
let condition = true

while (condition) {
    console.log(numero)   // Imprime número actual
    numero++              // Incrementa en 1

    if (numero == 10) {   // Cuando llega a 10, rompe el bucle
        condition = false
    }
}



/////// 5) Funciones-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función sin parámetros
function miEdad () {
    console.log("Tengo ", 35)
}

miEdad()  // Llamada a la función


// Función con parámetro
function miEdad2(input) {
    console.log("Hola, mi edad es: ", input)
}

miEdad2(35)


// Función con parámetros, imprime y retorna
function sumas (input1, input2) {
    console.log(input1 + input2)  // Imprime pero no guarda
    let total = input1 + input2   // Guardar el resultado
    return total                  // Retorna un valor que podemos usar
}

let totalt = sumas(10, 15)
console.log(totalt)  // Muestra el valor retornado


// Función flecha (arrow function) con return
let sumas2 = (input1, input2) => {
    return input1 + input2
}

let sumasx = sumas2(10, 14)
console.log(sumasx)
