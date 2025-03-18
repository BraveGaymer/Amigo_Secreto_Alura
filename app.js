// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosSorteo = []; // Variable global para almacenar los nombres de los amigos

// Función para agregar amigos a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Guardar el valor del campo en una variable
    let nombreAmigo = inputAmigo.value.trim(); // Trim es una función para eliminar espacios en blanco, importante en las validaciones de datos

    // Validar que la variable no este vacía
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que el nombre no este duplicado
    if(amigosSorteo.includes(nombreAmigo)) {
        alert("Ese nombre ya esta en la lista.");
        return;
    }

    amigosSorteo.push(nombreAmigo); // Agregar el nombre al array

    limpiarCaja(); // Limpiar el campo de entrada

    actualizarListaAmigos(); // Actualizar la lista en HTML
}

// Función para actualizar la lista en HTML
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array amigosSorteo y agregar cada nombre a la lista
    for (let i = 0; i < amigosSorteo.length; i++) {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigosSorteo[i]; // Asignar el nombre del amigo
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

// 4️⃣ Función para sortear un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigosSorteo.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosSorteo.length); // Generar un índice aleatorio

    let amigoSorteado = amigosSorteo[indiceAleatorio]; // Obtener el nombre sorteado

    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`; // Mostrar el resultado en la página
}

function limpiarCaja() {
    document.getElementById("amigo").value = ""; // Limpiar el input
}