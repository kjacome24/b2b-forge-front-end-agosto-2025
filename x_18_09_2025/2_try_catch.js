

try {
    funcionNoExistente();
} catch (error){
    // console.log(error.name);
    // console.log(error.message);
    console.log(error.stack)
}

console.log("Termindao");



const dividir = (a,b) =>
{
    try{
        if(b==0) {
            throw "No se puede dividir entre 0"
        }
    } catch(e) {
        return `Error: ${e}`
    }
    return a/b
}
    

console.log(dividir(5,1))


let error;
try {
    funcionFalsa();
} catch (e) {
    error = e;
}

console.log(error);


