/* Método flat
El método flat devuelve un array donde los sub-arrays han sido propagados hasta una profundidad especificada.

Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

Este método recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1.
Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity. */

// flat
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));



// flatmap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *2]));