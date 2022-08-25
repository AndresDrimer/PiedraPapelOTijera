// document.querySelector("#cartaJugador").src=`${cartas[num1]}`


const cartas = ["piedra", "papel", "tijera"]
const urlCartas = ["img/stone.jpg", "img/paper.jpg", "img/scissor3.jpg"]

let cuadrado1 = document.querySelector("#cuadrado1")
let cuadrado2 = document.querySelector("#cuadrado2")

// escuchar al boton y disparar funcion
let boton=document.querySelector("#botonJugar")
boton.addEventListener("click", jugar)

// variables declaradas
let contadorJugador = 0
let contadorMaquina = 0
let nombreIngresado = prompt("ingresa tu nombre: ")


function nombrar(){
  let cargaNombre = document.createElement("p")
  let nombre = document.createTextNode(nombreIngresado)
  cargaNombre.appendChild(nombre)
  document.querySelector("#nombreJugador").appendChild(cargaNombre)
}

function nombrarPuntaje(){
let cargaNombrePuntaje =document.createElement("p")
let nombreIngresadoDosPuntos = nombreIngresado + ": "
let nombrePje = document.createTextNode(nombreIngresadoDosPuntos)
cargaNombrePuntaje.appendChild(nombrePje)
document.querySelector("#nombreJugadorPunt").appendChild(cargaNombrePuntaje)
}

function cargarPuntajes(){
  
  let cargaPuntajeJugador = document.createElement("p")
  let puntJug = document.createTextNode(contadorJugador)
  cargaPuntajeJugador.appendChild(puntJug)
  document.querySelector("#puntJugador").appendChild(cargaPuntajeJugador)

  
  let cargaPuntajeMaquina = document.createElement("p")
  let puntMaq = document.createTextNode(contadorMaquina)
  cargaPuntajeMaquina.appendChild(puntMaq)
  document.querySelector("#puntMaquina").appendChild(cargaPuntajeMaquina)

}

function ganarChico(){
  contadorJugador++
  cargarPuntajes()
  console.log("ganaste, tenes " + contadorJugador + " puntos")
}
function perderChico(){
  contadorMaquina++
  cargarPuntajes()
  console.log("ganó la Maquina, tiene  " + contadorMaquina + " puntos")
}
function empatarChico(){
  console.log("empate")
}
function ganarFinal(){
  let ganaste = document.createElement("h1")
  let mensajeTriunfo = document.createTextNode("ganaste!!!")
  ganaste.appendChild(mensajeTriunfo)
  ganaste.setAttribute("style", "background:#90ee90");
  document.querySelector("#pResultado").appendChild(ganaste)
  jugarDeNuevo()
}
function perderFinal(){ 
  let perdiste = document.createElement("h1")
  let mensajeDerrota = document.createTextNode("perdiste ;(")
  perdiste.appendChild(mensajeDerrota)
  perdiste.setAttribute("style", "background:#FF6666");
  document.querySelector("#pResultado").appendChild(perdiste)
  jugarDeNuevo()
}

function jugarDeNuevo() {
  let deNuevo = document.createElement("button")
  let jugar = document.createTextNode("NUEVA PARTIDA")
  deNuevo.appendChild(jugar)
  deNuevo.setAttribute("style", "background: #54D3EF");
  document.querySelector("#jugarNuevamente").appendChild(deNuevo)
  let boton=document.querySelector("#jugarNuevamente")
  boton.addEventListener("click", recargar)

}
function recargar(){
  window.location.reload()
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
}

nombrar()
nombrarPuntaje()

