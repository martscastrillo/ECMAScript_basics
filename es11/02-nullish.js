/* Operador Nullish Coalescing

El operador nullish coalescing (??) consiste en evaluar una variable si es undefined o null para asignarle un valor.

El siguiente ejemplo se lee como: ¿usuario.name es undefined o null? Si es así, asígnale un valor por defecto "Andres", caso contrario asigna el valor de usuario.name. */

const anotherNumber = 1;
const validate = anotherNumber ?? 5;
console.log(validate);

const anotherNumber2 = null;
const validate2 = anotherNumber2 ?? 5;
console.log(validate2);