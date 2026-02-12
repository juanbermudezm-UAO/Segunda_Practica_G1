function valorCuota(prestamo, i, n) {
    i = i/100
    let aux = Math.pow((1+i),n)
    let oper = prestamo * ((aux*1)/(aux-1))
    return oper;
}
export {valorCuota};