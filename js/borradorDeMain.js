// function gane (jugador) {
//     console.log(jugador);
//     if (casillas[0].textContent == jugador && casillas[1].textContent == jugador && casillas[2].textContent == jugador){

//         alert('las ' + jugador + ' suman 1');

//         contadorN.textContent ++;

//         for( i = 0 ; i < casillas.length; i ++){
//             casillas[i].textContent = "";

//         }



//         } 

//     if (casillas[3].textContent == jugador && casillas[4].textContent == jugador && casillas[5].textContent == jugador){
//         alert('las ' + jugador + ' suman 1');
//         contadorN.textContent ++;
//         } 

//     if (casillas[6].textContent == jugador && casillas[7].textContent == jugador && casillas[8].textContent == jugador){
//             console.log('estoy funcionando');
//                 } 

//     if (casillas[0].textContent == jugador && casillas[3].textContent == jugador && casillas[6].textContent == jugador){
//                     console.log('estoy funcionando');
//                         } 
        
//     if (casillas[1].textContent == jugador && casillas[4].textContent == jugador && casillas[7].textContent == jugador){
//                     console.log('estoy funcionando');
//                         } 
        
//     if (casillas[2].textContent == jugador && casillas[5].textContent == jugador && casillas[8].textContent == jugador){
//                             console.log('estoy funcionando');
//                                 } 

//     if (casillas[0].textContent == jugador && casillas[4].textContent == jugador && casillas[8].textContent == jugador){
//                                     console.log('estoy funcionando');
//                                         } 
                        
//     if (casillas[2].textContent == jugador && casillas[4].textContent == jugador && casillas[6].textContent == jugador){
//                                             console.log('estoy funcionando');
//                                                 } 

        
//   }

// marcacion de las X
// if(turno == 'X'){
//     inicioX()
// } else {
//     inicioO()
// }

function inicioX () {

    for( i = 0; i < casillas.length; i ++){  

    //     if(casillas[i].textContent ==  "") //comprobando que la casilla este vacia
    //      {
            casillas[i].addEventListener('click', marcacionX ); // escuchando los click en cada casilla
            console.log('estoy ewcuhandoX');
            // }

            
    }        
            
} 


inicioX();

function inicioO () {

    for( i = 0; i < casillas.length; i ++){  

        // if(casillas[i].textContent ==  "") //comprobando que la casilla este vacia
        //  {
            casillas[i].addEventListener('click', marcacionX ); // escuchando los click en cada casilla
            console.log('estoy ewcuhando O');
            // }

            
    }        
            
} 



  
 function marcacionX (){

    let marca = document.createTextNode(turno); // creando el simbolo X

    this.appendChild(marca); // colocandolo en la casilla seleccionada
            
    // for( i = 0; i < casillas.length; i ++){

    //     casillas[i].removeEventListener('click', marcacionX );  // Bloqueando las casilla para que no se marque de nuevo
    //         }
    turno = 'O';
    // marcacionO(); // activando el turno de las O
            
    
    // gane ('X');
    
}

       
         

//     // marcacion de las O
//    function o () {
//         console.log('Turno O activado')

//         for( i = 0; i < casillas.length; i ++){

//         if(casillas[i].textContent ==  "") //comprobando que la casilla este vacia
//         {
//             // escuchando los click en cada casilla
//             casillas[i].addEventListener('click', marcacion2 );
           
//         } 

//         }

// //         // marcando la casilla           
        function marcacionO (){

            let marca = document.createTextNode('O'); // creando el simbolo O

            this.appendChild(marca); // colocandolo en la casilla seleccionada

            this.removeEventListener('click', marcacion2);// Bloqueando la casilla para que no se marque de nuevo

            macarcionX(); // activando el turno de las O

            // for( i = 0; i < casillas.length; i ++){

            //     // removiendo evento de las O, paso el turno a X
            //     casillas[i].removeEventListener('click', marcacion2 ); 
            //     }

            //     gane ('O');
        }       
           
// }


// inicio();// inicio de la funcion X empieza el juego

