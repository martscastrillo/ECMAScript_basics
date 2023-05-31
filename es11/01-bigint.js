/* Big Int, enteros muy grandes

El nuevo dato primitivo bigint permite manejar números enteros muy grandes. Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt
 */
const aBigNumber = 65378938091237656913047625223435n;
const anotherBigNumber = BigInt(65378938091237656913047625223435);

console.log(aBigNumber);
console.log(anotherBigNumber);