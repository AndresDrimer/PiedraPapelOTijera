// document.querySelector("#cartaJugador").src=`${cartas[num1]}`


const cartas = ["piedra", "papel", "tijera"]
const urlCartas = ["img/stone.jpg", "img/paper.jpg", "img/scissor3.jpg"]

let cuadrado1 = document.querySelector("#cuadrado1")
let cuadrado2 = document.querySelector("#cuadrado2")
// cuadrado1.style.backgroundImage="url`${urlCartas[1]}`"

// escuchar al boton y disparar funcion
let boton=document.querySelector("#botonJugar")
boton.addEventListener("click", jugar)

let contadorJugador = 0
let contadorMaquina = 0

// let puntajeJugador = document.querySelector("#puntJugador")
// puntajeJugador.appendChild("contadorJugador")

function ganarChico(){
  contadorJugador++
  console.log("ganaste, tenes " + contadorJugador + " puntos")
}
function perderChico(){
  contadorMaquina++
  console.log("ganó la Maquina, tiene  " + contadorMaquina + " puntos")
}
function empatarChico(){
  console.log("empate")
}
function ganarFinal(){
  console.log("partida ganada!!")
}
function perderFinal(){
  console.log("partida perdida :(")
}
// function nuevaPartida()

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
       
    let numMaquina = getRandomInt(3)
    let cartaMaquina = cartas[numMaquina]
    console.log("carta del jugador: " + cartaJugador + "\ncarta de la maquina: " + cartaMaquina)
    
    // asignar ruta imagen
    cuadrado1.src=urlCartas[numJugador]
    cuadrado2.src=urlCartas[numMaquina]

    // logica del juego -cada chico
    if (numJugador == numMaquina){
      empatarChico()
    }else if (numJugador==0 && numMaquina==1){
      perderChico()
    }else if (numJugador==0 && numMaquina==2){
      ganarChico()
    }else if (numJugador==1 && numMaquina==0){
      ganarChico()
    }else if (numJugador==1 && numMaquina==2){
      perderChico()
    }else if (numJugador==2 && numMaquina==0){
      perderChico()
    }else{
      ganarChico()
    }
    
    // ganar o perder partida
    if (contadorJugador == 3){
      ganarFinal()
    }else if (contadorMaquina == 3){
      perderFinal()
    }

    // pasarle el puntaje a la tabla cada vez
    

}

