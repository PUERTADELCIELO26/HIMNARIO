// MOSTRAR
function mostrar(tipo) {
    document.getElementById("menu").style.display = "none";
    document.getElementById(tipo).style.display = "block";
}

// VOLVER
function volver() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("adoracion").style.display = "none";
    document.getElementById("avivamiento").style.display = "none";
    document.getElementById("programa de servicio").style.display = "none";
}

// ORDENAR
function ordenarLista(id) {
    let lista = document.getElementById(id);
    let items = Array.from(lista.getElementsByTagName("li"));

    items.sort((a, b) => {
        return a.innerText.localeCompare(b.innerText);
    });

    items.forEach(item => lista.appendChild(item));
}

ordenarLista("listaAdoracion");
ordenarLista("listaAvivamiento");
ordenarLista("programa de servicio");
