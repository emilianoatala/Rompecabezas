// Arreglo que contiene las intrucciones del juego 
var instrucciones = ["Utilice las flechas para mover las piezas", "Ordene las piezas hasta alcanzar la imagen objetivo",];
// Arreglo para ir guardando los movimientos que se vayan realizando
var movimientos = [];

// Representación de la grilla. Cada número representa a una pieza.
// El 9 es la posición vacía
var grilla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

grilla[1][2]
/* Estas dos variables son para guardar la posición de la pieza vacía. 
Esta posición comienza siendo la [2, 2]*/
var filaVacia = 2;
var columnaVacia = 2;

/* Esta función deberá recorrer el arreglo de instrucciones pasado por parámetro. 
Cada elemento de este arreglo deberá ser mostrado en la lista con id 'lista-instrucciones'. 
Para eso deberás usar la función ya implementada mostrarInstruccionEnLista().
Podés ver su implementación en la ultima parte de este codigo. */
function mostrarInstrucciones(instrucciones) {
  
  for (let x in instrucciones){
    mostrarInstruccionEnLista(instrucciones[x],"lista-instrucciones");
    //COMPLETAR
  }
}

/* COMPLETAR: Crear función que agregue la última dirección al arreglo de movimientos
y utilice actualizarUltimoMovimiento para mostrarlo en pantalla */
function agregaUltimaDireccion(direccion){
  movimientos.push(direccion);
  actualizarUltimoMovimiento(direccion);
}

/* Esta función va a chequear si el Rompecabezas esta en la posicion ganadora. 
Existen diferentes formas de hacer este chequeo a partir de la grilla. */
function chequearSiGano() {
    var i=0,
        j=0,
        origen=1;

    for (i in grilla){
      for (j in grilla[i]){
        if (grilla[i][j]==origen){
          origen++;
        }
      }
    }

    origen--

    if (origen==9){
      mostrarCartelGanador();
    }
    else{
      return false
    }

    //COMPLETAR
}

// Implementar alguna forma de mostrar un cartel que avise que ganaste el juego
function mostrarCartelGanador() {
      var boxVictoria=document.getElementById("victoria"),
          boxJuego=document.getElementById("juego");
          numeroDeMovimientos=document.getElementById("cantidadDeMovimientos")
      boxJuego.style.display="none";
      col60.style.background="#fff";
      boxVictoria.style.display="block";
      numeroDeMovimientos.innerHTML="Acumulaste "+ movimientos.length + " movimientos";




    }
    //COMPLETAR

/* Función que intercambia dos posiciones en la grilla.
Pensar como intercambiar dos posiciones en un arreglo de arreglos. 
Para que tengas en cuenta:
Si queremos intercambiar las posiciones [1,2] con la [0, 0], si hacemos: 
arreglo[1][2] = arreglo[0][0];
arreglo[0][0] = arreglo[1][2];

En vez de intercambiar esos valores vamos a terminar teniendo en ambas posiciones el mismo valor.
Se te ocurre cómo solucionar esto con una variable temporal?
*/
function intercambiarPosicionesGrilla(filaPos1, columnaPos1, filaPos2, columnaPos2) {
        var grillaAux = grilla[filaPos1][columnaPos1];
        grilla[filaPos1][columnaPos1] = grilla[filaPos2][columnaPos2];
        grilla[filaPos2][columnaPos2] = grillaAux;


    //COMPLETAR
}

// Actualiza la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
  filaVacia = nuevaFila;
  columnaVacia = nuevaColumna;
    //COMPLETAR
}


// Para chequear si la posicón está dentro de la grilla.
function posicionValida(fila, columna) {
  if (-1 < fila && fila < 3 && -1 < columna && columna < 3){
    return true
    //COMPLETAR
  }
  else {
    return false
  }
}

/* Movimiento de fichas, en este caso la que se mueve es la blanca intercambiando su posición con otro elemento.
Las direcciones están dadas por números que representa: arriba (38), abajo (40), izquierda (37), derecha (39) */
function moverEnDireccion(direccion) {
  var nuevaFilaPiezaVacia;
  var nuevaColumnaPiezaVacia;

  // Mueve pieza hacia la abajo, reemplazandola con la blanca
  if (direccion === codigosDireccion.ABAJO) {
    nuevaFilaPiezaVacia = filaVacia - 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia arriba, reemplazandola con la blanca
  else if (direccion === codigosDireccion.ARRIBA) {
    nuevaFilaPiezaVacia = filaVacia + 1;
    nuevaColumnaPiezaVacia = columnaVacia;
  }
    
  // Mueve pieza hacia la derecha, reemplazandola con la blanca
  else if (direccion === codigosDireccion.DERECHA) {
      nuevaFilaPiezaVacia= filaVacia;
      nuevaColumnaPiezaVacia= columnaVacia - 1;
    //COMPLETAR
  }
    
  // Mueve pieza hacia la izquierda, reemplazandola con la blanca
  else if (direccion === codigosDireccion.IZQUIERDA) {
      nuevaFilaPiezaVacia= filaVacia;
      nuevaColumnaPiezaVacia= columnaVacia + 1;
    // COMPLETAR
  }

  /* A continuación se chequea si la nueva posición es válida, si lo es, se intercambia. 
  Para que esta parte del código funcione correctamente deberás haber implementado 
  las funciones posicionValida, intercambiarPosicionesGrilla y actualizarPosicionVacia */
  if (col40.style.display=="none"){
    nuevaFilaPiezaVacia=2;
    nuevaColumnaPiezaVacia=2;
  }
  if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        agregaUltimaDireccion(direccion);
  //COMPLETAR: Agregar la dirección del movimiento al arreglo de movimientos

    }
}




//////////////////////////////////////////////////////////
////////A CONTINUACIÓN FUNCIONES YA IMPLEMENTADAS.////////
/////////NO TOCAR A MENOS QUE SEPAS LO QUE HACES//////////
//////////////////////////////////////////////////////////

/* Las funciones y variables que se encuentran a continuación ya están implementadas.
No hace falta que entiendas exactamente que es lo que hacen, ya que contienen
temas aún no vistos. De todas formas, cada una de ellas tiene un comentario
para que sepas que se está haciendo a grandes rasgos. NO LAS MODIFIQUES a menos que
entiendas perfectamente lo que estás haciendo! */

/* codigosDireccion es un objeto que te permite reemplazar
el uso de números confusos en tu código. Para referirte a la dir
izquierda, en vez de usar el número 37, ahora podés usar:
codigosDireccion.IZQUIERDA. Esto facilita mucho la lectura del código. */
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

/* Funcion que realiza el intercambio logico (en la grilla) y ademas actualiza
el intercambio en la pantalla (DOM). Para que funcione debera estar implementada
la funcion intercambiarPosicionesGrilla() */
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
  // Intercambio posiciones en la grilla
  var pieza1 = grilla[fila1][columna1],
      pieza2 = grilla[fila2][columna2];

  intercambiarPosicionesGrilla(fila1, columna1, fila2, columna2);
  intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

/* Intercambio de posiciones de los elementos del DOM que representan
las fichas en la pantalla */

function intercambiarPosicionesDOM(idPieza1, idPieza2) {
  // Intercambio posiciones en el DOM
  var elementoPieza1 = document.getElementById(idPieza1),
      elementoPieza2 = document.getElementById(idPieza2);

  var padre = elementoPieza1.parentNode;

  var clonElemento1 = elementoPieza1.cloneNode(true);
  var clonElemento2 = elementoPieza2.cloneNode(true);

  padre.replaceChild(clonElemento1, elementoPieza2);
  padre.replaceChild(clonElemento2, elementoPieza1);
}

/* Actualiza la representación visual del último movimiento 
en la pantalla, representado con una flecha. */
function actualizarUltimoMovimiento(direccion) {
  ultimoMov = document.getElementById('flecha');
  switch (direccion) {
    case codigosDireccion.ARRIBA:
      ultimoMov.textContent = '↑';
      break;
    case codigosDireccion.ABAJO:
      ultimoMov.textContent = '↓';
      break;
    case codigosDireccion.DERECHA:
      ultimoMov.textContent = '→';
      break;
    case codigosDireccion.IZQUIERDA:
      ultimoMov.textContent = '←';
      break;
  }
}

/* Esta función permite agregar una instrucción a la lista
con idLista. Se crea un elemento li dinámicamente con el texto 
pasado con el parámetro "instrucción". */
function mostrarInstruccionEnLista(instruccion, idLista) {
  var ul = document.getElementById(idLista);
  var li = document.createElement("li");
  li.textContent = instruccion;
  ul.appendChild(li);
}

/* Función que mezcla las piezas del tablero una cantidad de veces dada.
Se calcula una posición aleatoria y se mueve en esa dirección. De esta forma
se mezclará todo el tablero. */

function mezclarPiezas(veces) {
  if (veces <= 0) {
    return;
  }
  
  var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA,
      codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA
    ];

  var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
  moverEnDireccion(direccion);

  setTimeout(function() {
      mezclarPiezas(veces - 1);
    }, 100);

  movimientos=[];
  ultimoMov = document.getElementById('flecha');
  ultimoMov.textContent = ' ';
}

/* capturarTeclas: Esta función captura las teclas presionadas por el usuario. Javascript
permite detectar eventos, por ejemplo, cuando una tecla es presionada y en 
base a eso hacer algo. No es necesario que entiendas como funciona esto ahora, 
en el futuro ya lo vas a aprender. Por ahora, sólo hay que entender que cuando
se toca una tecla se hace algo en respuesta, en este caso, un movimiento */
function capturarTeclas() {
  document.body.onkeydown = (function(evento) {
    if (evento.which === codigosDireccion.ABAJO ||
      evento.which === codigosDireccion.ARRIBA ||
      evento.which === codigosDireccion.DERECHA ||
      evento.which === codigosDireccion.IZQUIERDA) {

      moverEnDireccion(evento.which);

        var gano = chequearSiGano();
        if (gano) {
          setTimeout(function() {
              mostrarCartelGanador();
              }, 500);
            }
            evento.preventDefault();
        }
    })
}

/* Se inicia el rompecabezas mezclando las piezas 60 veces 
y ejecutando la función para que se capturen las teclas que 
presiona el usuario */
function iniciar() {
    mostrarInstrucciones(instrucciones);
    mezclarPiezas(60);
    capturarTeclas();

}









/*Las funciones especiales presentadas a continuacion 
fueron desarrolladas por Emiliano Atala para iniciar acciones como la seleccion
del rompecabezas, carteles de victoria del juego, etc*/

var pieza1 = document.getElementById("pieza-1"),
    pieza2 = document.getElementById("pieza-2"),
    pieza3 = document.getElementById("pieza-3"),
    pieza4 = document.getElementById("pieza-4"),
    pieza5 = document.getElementById("pieza-5"),
    pieza6 = document.getElementById("pieza-6"),
    pieza7 = document.getElementById("pieza-7"),
    pieza8 = document.getElementById("pieza-8"),
    piezaFinal = document.getElementById("img-objetivo"),
    col40= document.getElementById("col40"),
    col60= document.getElementById("col60"),
    boxMenu= document.getElementById("contenedorMenu"),
    arrow = document.getElementById("volver"),
    boxRompecabezas = document.getElementById("box-rompecabezas"),
    imagenRompecabezas = document.getElementById("imgRompecabezas"),
    tituloDescripcion = document.getElementById("tituloDescriptivo"),
    descripcion= document.getElementById("descripcion"),
    botonMenu = document.getElementById("menu"),
    boxDescripcion= document.getElementById("caja-descripcion"),
    menuLi1 = document.getElementById("menu-li1"),
    menuLi2 = document.getElementById("menu-li2"),
    menuLi3 = document.getElementById("menu-li3"),
    footer = document.getElementById("footer"),
    index=

function borrarInstruccionEnLista() {
  var ul = document.getElementById("lista-instrucciones");
  var li = document.createElement("li");
  while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);  
  }
}

function volverAInicio(){
    location.reload();
}

function seleccionarRompecabezas (){
    boxRompecabezas.style.display="none";
    boxMenu.style.display="none";
    footer.style.display = "block";
    col40.style.display="table-cell";
    col60.style.display="table-cell";
    arrow.style.display="block";
}

function cargarRompecabezas(){
  seleccionarRompecabezas ();
  var tituloJuego=document.getElementById("tituloJuego");
  if(index==0){
    tituloJuego.innerHTML="BMO DISFRUTA DE SU BAÑO!";
    pieza1.src="images/10.jpg";
    pieza2.src="images/20.jpg";
    pieza3.src="images/30.jpg";
    pieza4.src="images/40.jpg";
    pieza5.src="images/50.jpg";
    pieza6.src="images/60.jpg";
    pieza7.src="images/70.jpg";
    pieza8.src="images/80.jpg";
    piezaFinal.src="images/final.png"; 
  }
  else if(index==1){ 
    tituloJuego.innerHTML="DIA DE PATINETAS!";
    pieza1.src="images/1.jpg";
    pieza2.src="images/2.jpg";
    pieza3.src="images/3.jpg";
    pieza4.src="images/4.jpg";
    pieza5.src="images/5.jpg";
    pieza6.src="images/6.jpg";
    pieza7.src="images/7.jpg";
    pieza8.src="images/8.jpg";
    piezaFinal.src="images/final2.png";
    //https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/1/18/S4e14_BMO_with_board.png/revision/latest?cb=20131027193219
  }
  else if(index==2){
    tituloJuego.innerHTML="BMO ESTA ALEGRE!";
    pieza1.src="images/100.jpg";
    pieza2.src="images/200.jpg";
    pieza3.src="images/300.jpg";
    pieza4.src="images/400.jpg";
    pieza5.src="images/500.jpg";
    pieza6.src="images/600.jpg";
    pieza7.src="images/700.jpg";
    pieza8.src="images/800.jpg";
    piezaFinal.src="images/final3.png";
  }    
  iniciar();
}
  
function cargarDescripcion(indice){
  boxRompecabezas.style.display="flex";
  if (indice=="0"){
      imagenRompecabezas.src = "images/final.png";
      tituloDescripcion.innerHTML="BMO DISFRUTA DE SU BAÑO!";
      descripcion.innerHTML="BMO quiere verse en el espejo!. Ayudalo a ordenar las piezas para que pueda logralo!";
      index=0;
  }
  else if (indice=="1") {
      imagenRompecabezas.src = "images/final2.png";
      tituloDescripcion.innerHTML="DIA DE PATINETAS!";
      descripcion.innerHTML="Hoy es un dia genial para salir en patineta. Ordena las piezas junto a BMO y ve a la calle!";
      index=1;
  }
  else if (indice=="2") {
      imagenRompecabezas.src = "images/final3.png";
      tituloDescripcion.innerHTML="BMO ESTA ALEGRE!";
      descripcion.innerHTML="Parece que BMO esta contento y quieres que lo ayudes con un rompecabezas!. ¿Te unes al desafio?";
      index=2;
  } 
}


function ejecutarSonido(){
  var sonido=document.getElementById("audio");
  sonido.play();
}

function menu(){
  if (botonMenu.style.display=="none") {
      botonMenu.style.display="block";   
  } 
  else{
    botonMenu.style.display="none";
    boxRompecabezas.style.display="none";
  }
}






   
