let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function pasarAmayuscula (peliculas){ 
    let cambio = []
    for (i=0; i<peliculas.length; i++){
        cambio[i] = peliculas[i].toUpperCase()
    }  
    return cambio 
}

console.log(pasarAmayuscula(peliculas))
console.log(pasarAmayuscula(peliculasAnimadas))
let videoGame = peliculasAnimadas.pop()
console.log(videoGame)
let todasLasPeliculas = peliculas.concat(peliculasAnimadas)

console.log(pasarAmayuscula(todasLasPeliculas))