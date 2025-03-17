let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if(!amigo)  {
        alert("Ingresa un nombre.");
        return;
    }
    amigo.push(nombreAmigo)
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarlistaAmigos();
}

function renderizarlistaAmigos(){
    let listaAmigos= document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length < 3) {
        alert("Necesitas ingresar por lo menos 3 amigos para hacer un sorteo.");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
    
    let limpiarLista = document.getElementById("listaAmigos")
    limpiarLista.innerHTML = "";
}