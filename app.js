const CLAVE = "escribido";
const PISTA = "Que bien escribes, Mi amor.";

function checkPassword() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");
  if (pass === CLAVE) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    cargarCartas();
  } else {
    error.textContent = "Fallaste, ¿Seguro que eres mi Dani?.";
  }
}

function cargarCartas() {
  fetch("letters.json")
    .then((res) => res.json())
    .then((data) => {
      const contenedor = document.getElementById("cartas-container");
      contenedor.innerHTML = "";
      data.forEach((carta, index) => {
        const cartaDiv = document.createElement("div");
        cartaDiv.className = "carta-preview";
        cartaDiv.textContent = carta.titulo;  // <-- Aquí
        cartaDiv.onclick = () => mostrarCarta(carta);
        contenedor.appendChild(cartaDiv);
      });
    });
}

function mostrarCarta(carta) {
  document.getElementById("modal-titulo").textContent = carta.titulo;
  document.getElementById("modal-fecha").textContent = carta.fecha;
  document.getElementById("modal-contenido").textContent = carta.contenido;
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarCarta() {
  document.getElementById("modal").classList.add("hidden");
}

document.getElementById("pista").textContent = `Pista: ${PISTA}`;
