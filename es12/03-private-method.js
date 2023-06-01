/* Métodos privados de clases

Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.
 */

// una clase es un plantilla para crear objetos con sus mismos atributos y métodos(atributos se refieren en el código como las variables, y los métodos como las funciones; todo esto dentro del objeto).

class User{}
//creamos una instancia de un objeto
// const newUser = new User();

class user{
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const developer = new user();
console.log(developer.greeting());

//constructor
class userr{
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}
const periquito = new userr();

// this
class uuser{
    constructor(name){
        this.name = name;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}
const ana = new uuser('Ana')
console.log(ana.greeting());

// setters and getters
class usser{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }

}
const developer1 = new usser('Nico', 22)
console.log(developer1.uAge);
console.log(developer1.uAge = 20);