/* Método matchAll para expresiones regulares

El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico a partir de una expresión regular, colocada como argumento.

string.matchAll(regex)

En el iterable, existe una propiedad denominada index con el índice del string donde la búsqueda coincide. */



const regex_pizza = /\b(pizza)+\b/g;
const regex_direccion = /\b(direccion)+\b/g;

const str = 'Hola soy Carlos y quiero pedir una pizza de carne para la dirección XYZ.'

for (const match of str.matchAll(regex_pizza)){
    console.log(match)
}

for (const match of str.matchAll(regex_direccion)){
    console.log(match)
}