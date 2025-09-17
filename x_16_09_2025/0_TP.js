// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let numero = 20;
const cadenaTexto = "Kevin";
let EstaPrendida = true;
let arreglo1 = [1,"Kevin", [1,3,4]];


// ---destruturacion

// const [elmento1,elmento2,elmento3] = arreglo1;
// console.log(elmento1,elmento2, elmento3);

const [ , , elmento3] = arreglo1;
console.log(elmento3);


let objetoPrueba = {
    nombre: "Kevin",
    edad: 35
}

const {edad} = objetoPrueba;
console.log(edad);



let objetoPrueba2 = {
    nombre: "Kevin",
    edad: 35,
    direccion : {
        ciudad: "Bogota",
        pais: "Colombia"
    }
}

const {direccion : {ciudad}} = objetoPrueba2;
console.log(ciudad)


let objetoPrueba3 = {
    nombre: "Kevin",
    edad: 35,
    direcciones : ["Bogota, colombia", "Santiago, chile"]
}


// const {direcciones : [direccion1, ] } = objetoPrueba3;
// console.log(direccion1);



const {nombre, ...resto} = objetoPrueba3;
console.log(nombre)
console.log(resto);



const autoOriginal = {
    marca: "Chevrolet",
    modelo: "Aveo",
    color: "Blue"
}


let copiaCarro = autoOriginal;
copiaCarro.color = "red";

console.log(autoOriginal,copiaCarro )

let copiaCarro2 = {...autoOriginal};
copiaCarro2.color = "Green";
console.log(autoOriginal,copiaCarro2 );







const videojuegos = Object.freeze([
        { "id": 1, "nombre": "The Legend of Zelda: Breath of the Wild", "genero": "aventura", "plataforma": "Nintendo Switch" },
        { "id": 2, "nombre": "Super Mario Odyssey", "genero": "plataformas", "plataforma": "Nintendo Switch" },
        { "id": 3, "nombre": "Red Dead Redemption 2", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 4, "nombre": "The Witcher 3: Wild Hunt", "genero": "RPG", "plataforma": "PC" },
        { "id": 5, "nombre": "Fortnite", "genero": "battle royale", "plataforma": "multiplataforma" },
        { "id": 6, "nombre": "Minecraft", "genero": "sandbox", "plataforma": "multiplataforma" },
        { "id": 7, "nombre": "Overwatch", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 8, "nombre": "FIFA 20", "genero": "deportes", "plataforma": "multiplataforma" },
        { "id": 9, "nombre": "Super Smash Bros. Ultimate", "genero": "lucha", "plataforma": "Nintendo Switch" },
        { "id": 10, "nombre": "League of Legends", "genero": "MOBA", "plataforma": "PC" },
        { "id": 11, "nombre": "God of War", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 12, "nombre": "Animal Crossing: New Horizons", "genero": "simulación", "plataforma": "Nintendo Switch" },
        { "id": 13, "nombre": "Call of Duty: Warzone", "genero": "shooter", "plataforma": "multiplataforma" },
        { "id": 14, "nombre": "Cyberpunk 2077", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 15, "nombre": "Assassin's Creed Valhalla", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 16, "nombre": "Among Us", "genero": "party", "plataforma": "multiplataforma" },
        { "id": 17, "nombre": "Pokémon Sword and Shield", "genero": "RPG", "plataforma": "Nintendo Switch" },
        { "id": 18, "nombre": "Genshin Impact", "genero": "acción-RPG", "plataforma": "multiplataforma" },
        { "id": 19, "nombre": "Valorant", "genero": "shooter táctico", "plataforma": "PC" },
        { "id": 20, "nombre": "Death Stranding", "genero": "acción-aventura", "plataforma": "PlayStation 4" },
        { "id": 21, "nombre": "Spider-Man: Miles Morales", "genero": "acción-aventura", "plataforma": "PlayStation 5" },
        { "id": 22, "nombre": "Hades", "genero": "roguelike", "plataforma": "PC" },
        { "id": 23, "nombre": "Overcooked! 2", "genero": "cooperativo", "plataforma": "multiplataforma" },
        { "id": 24, "nombre": "Sekiro: Shadows Die Twice", "genero": "acción-aventura", "plataforma": "multiplataforma" },
        { "id": 25, "nombre": "Rainbow Six Siege", "genero": "shooter táctico", "plataforma": "multiplataforma" },
        { "id": 26, "nombre": "Grand Theft Auto V", "genero": "acción-aventura", "plataforma": "multiplataforma" }
    ]);

////////////////////7. Una lista que contenga solo el primer género de todos los videojuegos cuyo segundo género es «aventura».

const arrayX = videojuegos.filter(
    videojuego => videojuego.genero.includes("-aventura")
).map( videojuego => videojuego.genero.slice(0, (videojuego.genero.indexOf("-"))))

console.log(arrayX)
