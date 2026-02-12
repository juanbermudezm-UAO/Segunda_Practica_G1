import { valorCuota } from "./operaciones.js";
const botonCalcular = document.getElementById("calcular");
const botonHistorial = document.getElementById("recordar");
const laSalida = document.getElementById("resultadoPrestamo");

botonCalcular.addEventListener("click", calcularCuota);
botonHistorial.addEventListener("click", recordarHistorial);

function calcularCuota() {
    let nombre = document.getElementById("elNombre").value
    let prestamo = parseFloat(document.getElementById("elPrestamo").value)
    let meses = parseInt(document.getElementById("losMeses").value)
    let intereses = parseFloat(document.getElementById("losInteres").value)

    console.log(nombre, prestamo, meses, intereses)
    laSalida.textContent = "La cuota es: " + valorCuota(prestamo, intereses, meses)
}

function recordarHistorial() {
    laSalida.textContent = "Estas en el historial"
}