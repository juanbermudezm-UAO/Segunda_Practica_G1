import { listarDatos, valorCuota, totalPrestado /*sumarCuotas*/} from "./operaciones.js";
const botonCalcular = document.getElementById("calcular");
const botonHistorial = document.getElementById("recordar");
const laSalida = document.getElementById("resultadoPrestamo");
const botonTotalPrestado = document.getElementById("totalPrestado");

botonCalcular.addEventListener("click", calcularCuota);
botonHistorial.addEventListener("click", recordarHistorial);
botonTotalPrestado.addEventListener("click", mostrarTotalPrestado);

let historial = [];

function calcularCuota() {
    let nombre = document.getElementById("elNombre").value
    let prestamo = parseFloat(document.getElementById("elPrestamo").value)
    let meses = parseInt(document.getElementById("losMeses").value)
    let intereses = parseFloat(document.getElementById("losInteres").value)
    
    let cuota = valorCuota(prestamo, intereses, meses).toFixed(0)

    let registro = {
        nombre,
        prestamo,
        meses,
        intereses,
        cuota
        };

    historial.push(registro);

    laSalida.textContent = nombre + " debe pagar $" 
    + cuota + " cada mes por el prestamo de $"
    + prestamo + " a " + meses + " meses con el interes del " + intereses + "%";
    return historial;
}

function recordarHistorial() {
    console.log(historial)
    laSalida.textContent = listarDatos(historial)
}

function mostrarTotalPrestado() {
    console.log(totalPrestado(historial))
    laSalida.textContent = totalPrestado(historial)
}

/*function mostrarSumatoriaCuotas() {
    const resultado = sumarCuotas(historial);
    laSalida.textContent = resultado;
}*/