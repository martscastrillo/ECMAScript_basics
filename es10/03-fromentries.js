/* Cómo transformar un array de arrays en un objeto

El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

Se considera la operación inversa de Object.entries().

 */
const entries = new Map([["name", "Arnoll"],["Country", "Col"],["age", 20]]);
console.log(entries);
console.log(Object.fromEntries(entries));
