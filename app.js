const form = document.getElementById("formCalculadora");
const inputDisplay = document.getElementById("resultado");

// Función para agregar numero presionado en display
const agregar = valor => {
  inputDisplay.value += valor;
};

// Asociar eventos a los botones
document.getElementById("boton0").addEventListener("click", () => agregar("0"));
document.getElementById("boton1").addEventListener("click", () => agregar("1"));
document.getElementById("boton2").addEventListener("click", () => agregar("2"));
document.getElementById("boton3").addEventListener("click", () => agregar("3"));
document.getElementById("boton4").addEventListener("click", () => agregar("4"));
document.getElementById("boton5").addEventListener("click", () => agregar("5"));
document.getElementById("boton6").addEventListener("click", () => agregar("6"));
document.getElementById("boton7").addEventListener("click", () => agregar("7"));
document.getElementById("boton8").addEventListener("click", () => agregar("8"));
document.getElementById("boton9").addEventListener("click", () => agregar("9"));

document.getElementById("botonPunto").addEventListener("click", () => agregar("."));
document.getElementById("botonMas").addEventListener("click", () => agregar("+"));
document.getElementById("botonMenos").addEventListener("click", () => agregar("-"));
document.getElementById("botonMul").addEventListener("click", () => agregar("*"));
document.getElementById("botonDiv").addEventListener("click", () => agregar("/"));

// Borrar inputDisplay cuando se presiona "C"
document.getElementById("botonBorrar").addEventListener("click", () => {
  inputDisplay.value = "";
});

// Procesar resultado al enviar el formulario 
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita que se recargue la página y se borre el imputDiaplay (todos los numero que apretamos)
      inputDisplay.value = eval(inputDisplay.value);
});
