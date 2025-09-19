// 1) Object.freeze()


const superHeroe = {
    nombre: "Flash",
    speed: 90
}

Object.freeze(superHeroe);


superHeroe.nombre = "Shazam";
console.log(superHeroe);



// 2) Array.freeze()
let marcasCarros = ["Toyota","Chevorlet", "Renuault"]
Object.freeze(marcasCarros);
marcasCarros.push("Susuki");



// 3) como operar los lelmentos inmutables

const autos = [
  { id: 1, marca: "Toyota", modelo: "Corolla", año: 2020, combustible: "gasolina" },
  { id: 2, marca: "Honda", modelo: "Civic", año: 2019, combustible: "gasolina gas" },
  { id: 3, marca: "Ford", modelo: "Mustang", año: 2021, combustible: "gasolina" },
  { id: 4, marca: "Tesla", modelo: "Model 3", año: 2022, combustible: "eléctrico" },
  { id: 5, marca: "Chevrolet", modelo: "Camaro", año: 2020, combustible: "diésel gasolina" }
];
Object.freeze(autos);


let copiaAutos1 = [...autos, { id: 6, marca: "Dodge", modelo: "ram", año: 2020, combustible: "diésel" }];
// console.log(copiaAutos1);


let copiaAutos2 = autos.concat({ id: 6, marca: "Dodge", modelo: "ram", año: 2020, combustible: "diésel" });
copiaAutos2[0].año = 2025;
// console.log(copiaAutos2);



let copiaAutos3 = autos.slice(1,2);
console.log(copiaAutos3)



////////////Funcion de ordenamiento

const equiposFutbol = ["Manchester united", "Chelsea", "Liverpool", "Bayern Munich"]

const equiposFutbolOrdenado = equiposFutbol.sort();
console.log(equiposFutbolOrdenado);



////Ordenamiendo de meno a mayor
const numeros = [5,6,8,3,2,1,10];
const numerosOrdenados = numeros.sort( (a,b) => a-b)
console.log(numerosOrdenados);


////Ordenamiendo de mayor a menor
const numeros = [5,6,8,3,2,1,10];
const numerosOrdenados = numeros.sort( (a,b) => b-a)
console.log(numerosOrdenados);



let personas = [
    {name: "Kevin", edad: 35},
    {name: "Ezequiel", edad : 24},
    {name: "Bruno", edad : 23},
    {name: "Iris", edad : 18},
]

Object.freeze(personas)

const ordenarPorEdad = [...personas].sort((a,b)=> a.edad - b.edad);
console.log(ordenarPorEdad);


const ordenarPorNombre = [...personas].sort((a,b)=> a.name.localeCompare(b.name));
console.log(ordenarPorNombre)