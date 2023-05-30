// generator son un tipo especial de funcion que nos va a retornar una serie de valores segun el algoritmo definido

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}
// Cuando se utiliza yield dentro de una función generadora, se devuelve un valor y se pausa la ejecución de la función hasta que se solicite el siguiente valor. Esto permite una generación de valores bajo demanda, evitando la necesidad de generar y almacenar todos los valores de antemano.


const it = iterate(['oscar','david', 'marta','jenn']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
