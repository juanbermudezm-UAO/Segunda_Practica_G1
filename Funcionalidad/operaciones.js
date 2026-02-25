function valorCuota(prestamo, i, n) {
    i = i/100
    let aux = Math.pow((1+i),n)
    let oper = prestamo * ((aux*i)/(aux-1))
    return oper;
}

function listarDatos(info){
    let save = ''
    info.forEach(persona => {
        save += 'Nombre: ' + persona.nombre 
        + ' pidió ' + persona.prestamo 
        + ' a ' + persona.meses
        + ' meses con intereses de ' + persona.intereses
        + '% y cuota ' + persona.cuota + '\n';
    });
    console.log(save)
    return save;
};

function totalPrestado(h) {
    let prestado = 0
    h.forEach(element => {
        prestado += parseFloat(element.cuota);
    });
    return prestado.toFixed(2);
}

/*function sumarCuotas(historial) {
    let total = 0;
    historial.forEach(registro => {
        // Convertimos a número antes de sumar
        total += parseFloat(registro.cuota);
    });
    return "La sumatoria de todas las cuotas es: $" + total.toFixed(2);
}*/

//export {sumarCuotas}
export {totalPrestado}
export {listarDatos};
export {valorCuota};