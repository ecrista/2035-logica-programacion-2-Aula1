let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTexto(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if(numeroSecreto===numeroUsuario){
        asignarTexto("p",`¡Felicidades! Has adivinado el número secreto en ${numeroIntentos} ${numeroIntentos ==1 ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTexto("p","El número secreto es menor que "+numeroUsuario);
        }else{
            asignarTexto("p","El número secreto es mayor que "+numeroUsuario);
        }
        limpiarCaja();
        numeroIntentos++;
    }
    return;
}

function generarNumeroAleatorio(){
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    if(listaNumerosSorteados.length==numeroMaximo){
        //listaNumerosSorteados = [];
        asignarTexto("p","Ya se sortearon todos los numeros posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del número secreto');
    asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    numeroIntentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled",true);

}

function reiniciarJuego(){
    limpiarCaja ();    
    condicionesIniciales ();

}

condicionesIniciales();
console.log(numeroSecreto);