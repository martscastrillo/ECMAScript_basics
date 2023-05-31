// Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud. "una promesa es algo que va a pasar"

// Método finally en promesas

// El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.



const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
          resolve("hey!!!")
        } else {
            reject("whoooooops")
        }
      })
}


anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'));