/////// Declaración ------------------------------------------------------------------------------------------------------------------------

// var
var name = "Kevin"; 
var name = "Arturo"; /// Se puede volver a declarar una variable con var
name = "Luis"; /// Se puede reasignar (mutar)
console.log(name)


// let
let name = "Kevin";
let apellido = "Artura";  /// No se puede volver a declarar la misma variable en el mismo ámbito
name = "Arturo";  /// Se puede reasignar (mutar)
console.log(name)


// const
const name = "Arturo";  /// No se puede volver a declarar
name = "Kevin";  /// ❌ No se puede reasignar, excepto si es un objeto o un array.

const lista_super = ["Arroz", "Banana"];
lista_super[0] = "Pan";  /// ✅ Se pueden modificar los elementos internos de un array
console.log(lista_super);

const info_card = {
    name : "Kevin",
    apellido : "Jacome"
}
info_card.name = "Arturo";  /// ✅ Se pueden modificar las propiedades internas de un objeto
console.log(info_card)



// Hoisting ------------------------------------------------------------------------------------------------------------------------


// var
console.log(x);   /// Muestra "undefined" porque var se eleva (hoisting), 
var x = 5; /// pero la asignación ocurre después
console.log(x);   /// Ahora muestra 5


// let
console.log(y);   /// ❌ Error: no se puede acceder antes de declarar.
let y = 10; /// Con let existe la "temporal dead zone" (No hoisting)
console.log(y);   /// Muestra 10


// funciones declaradas
example();        /// ✅ Funciona porque las funciones declaradas
                  /// se elevan completamente con su definición
function example() {
    console.log("Test, hola");
}


// funciones flecha
aletando();       /// ❌ Error: no se puede llamar antes de declarar.
                  /// Las funciones flecha se comportan como variables let/const
let aletando = () => {
    console.log("Test, hola");
};


//////////////////////// Scope ------------------------------------------------------------------------------------------------------------------------

// Alcance global
{
  let comida = "Arroz con pollo";

  function imprimir() {
    console.log(comida); /// Accede a la variable global (lexical scope)
  }

  imprimir(); /// "Arroz con pollo"
}


// Alcance local
{
  let comida2 = "Pasta"; /// Variable en el alcance externo

  function imprimir2() {
    let comida2 = "Pan de yuca"; /// Sombrea a comida2 externa SOLO dentro de la función
    return comida2;
  }

  let xy = imprimir2();
  console.log(xy);      /// "Pan de yuca" (valor local)
  console.log(comida2); /// "Pasta" (la externa permanece igual)
}


// ---------------------------------------------------------------
// var: alcance de función (NO de bloque) — puede "romper" el local de bloque
{
  var edad = 25;            /// var en el ámbito global del script
  console.log(edad);        /// 25

  function envejecer() {
    var edad = 35;          /// var dentro de la función (nuevo ámbito de función)
    console.log(edad);      /// 35

    if (true) {
      var edad = 40;        /// MISMA variable de la función (no hay ámbito de bloque con var)
      console.log(edad);    /// 40
    }

    console.log(edad);      /// 40 (se sobreescribió dentro del if)
  }

  envejecer();
  console.log(edad);        /// 25 (la global no cambió)
}


// ---------------------------------------------------------------
// let: alcance de bloque — respeta scopes y evita sobrescrituras accidentales
{
  let edad = 25;            /// let en el bloque actual
  console.log(edad);        /// 25

  function envejecer() {
    let edad = 35;          /// Nueva variable en el ámbito de la función
    console.log(edad);      /// 35

    if (edad > 35) {
      let edad = 40;        /// NUEVA variable solo dentro del if (no afecta a la de la función)
      console.log(edad);    /// 40
    } else {
      console.log(edad);    /// 35 (la de la función)
    }

    console.log(edad);      /// 35 (sigue siendo la de la función)
  }

  envejecer();
  console.log(edad);        /// 25 (la del bloque externo)
}




///// Desestructuración ------------------------------------------------------------------------------------------------------------------------------------

// Array → acceso tradicional (sin desestructurar)
{
  const numeros = [1, 4, 5, 6];
  let numero1 = numeros[0];
  let numero2 = numeros[1];
  let numero3 = numeros[2];
  let numero4 = numeros[3];

  console.log(numero1, numero2, numero3, numero4); /// 1 4 5 6
}


// Array → desestructuración básica
{
  const numeros = [1, 4, 5, 6];
  let [numero1, numero2, numero3, numero4] = numeros;
  console.log(numero1, numero2, numero3, numero4); /// 1 4 5 6
}


// Array → tomar solo posiciones específicas (saltos con comas)
{
  const numeros = [1, 4, 5, 6];
  let [, numero2, ,] = numeros; /// Ignora 1er y 3er elemento
  console.log(numero2); /// 4
}


// Array → valores por defecto en desestructuración
{
  const numeros = [1, 4, 5, 6];
  let [numero1, , , , numero5 = 8 + 2] = numeros; /// numero5 toma el valor por defecto (10)
  console.log(numero1, numero5); /// 1 10
}


// Objeto → desestructuración básica
{
  let persona = {
    nombre: "kevin",
    edad: 35,
  };

  let { nombre, edad } = persona;
  console.log(nombre, edad); /// "kevin" 35
}


// Objeto → desestructuración con alias
{
  let persona = {
    nombre: "kevin",
    edad: 35,
  };

  let { nombre: username, edad: age } = persona; /// alias: nombre→username, edad→age

  function poner_info_junto(a, b) {
    return a + b; /// string + number → concatenación
  }
  console.log(poner_info_junto(username, age)); /// "kevin35"
}


// Objeto → desestructuración anidada
{
  const empresa = {
    nombre: "Skillnest",
    direccion: {
      ciudad: "Santiago",
      pais: "Chile",
    },
  };

  let {
    direccion: { ciudad: ciudadEmpresa, pais },
  } = empresa;

  console.log(ciudadEmpresa); /// "Santiago"
  console.log(pais);          /// "Chile"
}




// -----------------Operador rest

//arrays
const numerosx = [1,4,5,9];
const [numero1, ...resto] = numerosx;
console.log(numero1)
console.log(resto)


// objetos


let estudiante = {
    nombre : "Julian",
    curso : "Mern",
    edad : 24,
    direccion : {
        ciudad : "Bogota"
    }
}

let {curso, ...otros} = estudiante;
console.log(otros)




// -------Spread-----------------------------------------------------------------------------------------

// arrays
let numerosw = [1,2,3];
let numerosy = numerosw;                 /// Copia por referencia, ambos apuntan al mismo array
numerosy[0] = 9;
console.log(numerosw, numerosy)

let numerosz = [...numerosw];            /// Copia superficial, crea un nuevo array con los mismos valores
numerosz[0] = 10;
console.log(numerosw, numerosy, numerosz );


// Objects
const power_rangers = {
    jefe : "Zordon",
    ubicacion : "Fin del mundo"
};

let power_rangers2 = {
    ...power_rangers                      /// Copia superficial del objeto
}

power_rangers2.jefe = "Rita repulsa";    /// Se modifica solo en la copia

console.log(power_rangers);
console.log(power_rangers2);


// -----sobreescribir
const power_rangers = {
    jefe : "Zordon",
    ubicacion : "Fin del mundo"
};

let power_rangers3 = { 
    ...power_rangers, 
    jefe: "Rita repulsa",                 /// Sobrescribe la propiedad jefe
    cantidad_power_rangers : 6            /// Agrega nueva propiedad
}

console.log(power_rangers3)


// Copias superficiales vs copias profundas 
const auto = {
    marca: "Totyata",
    modelo : "Corrola",
    detalles : {
        color: "azul",
        combustible: "Diesel"
    }
}

const autocpia = { ...auto };             /// Copia superficial, objetos anidados siguen siendo referencia de la misma memoria
autocpia.detalles.color = "rojo";

console.log(autocpia);
console.log(auto)

const autoCopiaPorfunda = {              /// Copia “más profunda” duplicando también el objeto anidado y usando un nuevo espacio de memoria
    ...auto, 
    detalles : { ...auto.detalles }
}

autoCopiaPorfunda.detalles.color = "Verde";

console.log(auto);
console.log(autoCopiaPorfunda)



// -------------------------- Funciones flecha -----------------------------------------------------------------------------------------

function sumax (){
    console.log("Hola")             /// Función declarada tradicional
}

sumax();                            /// Se puede llamar antes o después de la declaración (hoisting)


let sumay = (a,b) => {
    return a + b;                   /// Función flecha con return explícito
};

console.log(sumay(10,5))            /// 15


let sumaz = (a,b) => a + b;         /// Función flecha con return implícito (una sola línea)
console.log(sumaz(10,5))            /// 15
