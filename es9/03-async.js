//Generadores asíncronos

// Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.
async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const another = anotherGenerator();
another.next().then(response => console.log(response.value))
another.next().then(response => console.log(response.value))
another.next().then(response => console.log(response.value))
console.log('hello');

/* Cómo utilizar for await
De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre. */


async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");