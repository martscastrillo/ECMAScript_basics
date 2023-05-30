var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';

const fruits = () => {
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana'
    }
    console.log(fruit1);
    console.log(fruit3);
    console.log(fruit3);
}

fruits();


/* Una variable declarada con var  puede ser re-declarada y re-asignada, su scope es global.
Una variable declarada con let puede ser re-asignada, pero no re-declarada, su scope es de bloque.
Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error, su scope es de bloque.
 */