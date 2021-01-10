
// Obteniendo las casillas del tablero
let casillas = document.querySelectorAll(".tablero__casilla");

// Obteniendo las casillas de los contadores laterales
let contadorX = document.querySelector("#contadorX");
let contadorO = document.querySelector("#contadorO");

// Obteniendo las casillas de los contadores centrales
let contadorCentralX = document.querySelector("#puntajeCentralX");
let contadorCentralO = document.querySelector("#puntajeCentralO");

// para comprobación de empate
let contadorEmpate = 0;

// Obteniendo la casilla del boton atras
let atras = document.querySelector('#atras');

//  para identificar el turno de cada jugador
let turno = 'X';

// para el boton de 'atras'
let ultimoMovimiento;

// guarda el simbolo del jugador de turno para marcar la casilla
let marcaE;



function inicio () {
   
    for( i = 0; i < casillas.length; i ++){  

            casillas[i].addEventListener('click', marcacion ); // escuchando los click en cada casilla
            
    }   
    
    atras.addEventListener('click', back); // activando el boton para retroceder jugada
            
} 

function marcacion (){

    let marca = document.createTextNode(turno); // creando el simbolo X o O
    marcaE = marca;

    this.appendChild(marca); // colocandolo en la casilla seleccionada

    this.removeEventListener('click', marcacion );  // Bloqueando las casilla para que no se pueda marcar de nuevo     

    ultimoMovimiento = this; // guardando la casilla pulsada para pasarla a la funcion de retroceder jugada 'back'
 
    ganarRonda(); // comprobando si gano la ronda
    empate(); // comprobando si hay empate
    cambioTurno(); // pasando el turno
   
}



function cambioTurno() {
    
    switch (turno){
    case 'X':
        turno = 'O';
        break;
    case 'O':
        turno = 'X';
        break;
}

}


function ganarRonda () {
    // comprobando si hay tres en raya en la primera fila
    if (casillas[0].textContent == turno && casillas[1].textContent == turno && casillas[2].textContent == turno){

        alert('las ' + turno + ' suman 1');  //avisando que jugador ha ganado la ronda

        contarVictorias();  //acumulando victoria de ronda 
    
        reinicioRonda();  // reseteando, comienzo de la siguiente ronda

        contadorEmpate --; // para evitar que se ejecute la funcion empate si el jugador gana marcando la ultima casilla en blanco
    }

    if (casillas[3].textContent == turno && casillas[4].textContent == turno && casillas[5].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[6].textContent == turno && casillas[7].textContent == turno && casillas[8].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[0].textContent == turno && casillas[3].textContent == turno && casillas[6].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[1].textContent == turno && casillas[4].textContent == turno && casillas[7].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[2].textContent == turno && casillas[5].textContent == turno && casillas[8].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[0].textContent == turno && casillas[4].textContent == turno && casillas[8].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    }

    if (casillas[2].textContent == turno && casillas[4].textContent == turno && casillas[6].textContent == turno){

        alert('las ' + turno + ' suman 1');

        contarVictorias();
    
        reinicioRonda();

        contadorEmpate --;
    } 
    
    
     if( contadorEmpate == 8){ 
        

        alert('Ya no hay casillas vacias, esto es un empate, haz click en aceptar para iniciar otra ronda');
        reinicioRonda();
    } //verificando si hay empate


}   


function empate (){

    contadorEmpate = 0;
        
    for( i = 0 ; i < casillas.length; i++ ) {
        
        if (casillas[i].textContent !==  '') {
            contadorEmpate ++;
        }
    
     
    }  
    
    } // comprobando si hay empate,( si todas la casillas estan llenas y no hay tres en raya de ningun jugador)

    


function contarVictorias () {

    switch (turno){
        case 'X':
            contadorX.textContent ++;  // suma 1 punto en el marcador lateral si el jugador gana
            contadorCentralX.appendChild(marcaE); // crea una nueva marca en el marcador central si el jugador gana
            break;
        case 'O':
           contadorO.textContent ++;
           contadorCentralO.appendChild(marcaE);
            break;
    }

    ganarPartida ();
}

function ganarPartida () {

    if ( contadorX.textContent == '5'){
        alert('las X han acumulado 5 puntos, ganan la partida, bien hecho =D, clickea aceptar para reiniciar el juego');
        location.reload();
    }


    if ( contadorO.textContent == '5'){
        alert('las O han acumulado 5 puntos, ganan la partida, bien hecho =D, clickea aceptar para reiniciar el juego');
        location.reload();
    }

    
}  // si el jugador gano 5 rondas, gana la partida



function reinicioRonda (){

    for( i = 0; i < casillas.length; i ++){  

       casillas[i].textContent = '';
                   
    }  
    
    inicio();
} // devuelve los valores de las casillas a 0 para una nueva ronda



function back() {    

    ultimoMovimiento.textContent = '';
    ultimoMovimiento.addEventListener('click', marcacion );
    cambioTurno();
} // para el boton atras, borra el valor de la ultima casilla marcada



alert('El juego ha iniciado, suerte!, comienzan las X');
inicio(); // inicia el juego










   