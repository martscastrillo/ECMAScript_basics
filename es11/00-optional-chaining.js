/* ES11: optional chaining

Cuando intentas acceder a propiedades de un objeto que no existen, JavaScript te retornará undefined. */

const users = {
    mart:{
        country:'MX'
    },
    ana:{
        country:'CO'
    }
}
console.log(users.ana.country);
console.log(users.ana.age);