const duplicar = input => input * 2;
const dividirEnDos = input => input /2;
const esPar = input => input %2 ==0 ? "Es par" : "Es impar";


// console.log(duplicar(4))
// console.log(dividirEnDos(4))
// console.log(esPar(5))


module.exports = {
    duplicar,
    dividirEnDos,
    esPar
}