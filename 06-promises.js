// Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud. "una promesa es algo que va a pasar"

const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if (false) {
          resolve("hey!!!")
        } else {
            reject("whoooooops")
        }
      })
}


anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))