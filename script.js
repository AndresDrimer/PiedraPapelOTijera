// document.querySelector("#cartaJugador").src=`${cartas[num1]}`


const cartas = ["piedra", "papel", "tijera"]
const urlCartas = ["img/stone.jpg", "img/paper.jpg", "img/scissor3.jpg"]

let cuadrado1 = document.querySelector("#cuadrado1")

// cuadrado1.style.backgroundImage="url`${urlCartas[1]}`"

// escuchar al boton y disparar funcion
let boton=document.querySelector("#botonJugar")
boton.addEventListener("click", jugar)


function jugar(){
    let cuadrado1 = document.getElementById('cuadrado1')
    let cuadrado2 = document.getElementById('cuadrado2')
    let cuadrado3 = document.getElementById('cuadrado3')

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      } 

    // asignar carta al azar  
    let numJugador = getRandomInt(3)
    let cartaJugador = cartas[numJugador]
    console.log("carta del jugador: " + cartaJugador)
    
    
    let numMaquina = getRandomInt(3)
    let cartaMaquina = cartas[numMaquina]
    
}