/* Promise.all

El método Promise.all sirve para manejar varias promesas al mismo tiempo. Recibe como argumento un array de promesas.
 */

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));


/* Promise.allSettled

Promise.allSettled() permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada. */