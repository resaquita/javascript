let cantArticulos = parseInt(prompt("Ingrese la cantidad de articulos a comprar"))
let valor
let metodopago
let valorfinal
const productos = []
while (cantArticulos > 0) {
    nombreProducto = prompt("Ingrese el nombre del producto")
    valor = parseInt(prompt("Ingrese el valor del producto"))
    metodopago = prompt("Abona en Efectivo o con tarjeta")
    console.log("El metodo de pago es " + metodopago)
    productos.push(nombreProducto)
    if (metodopago == "efectivo"){
        valorfinal = ("$" + (valor * 0.9))
        cantArticulos--
        console.log("El valor final es " + valorfinal)
    }else if (metodopago == "tarjeta"){
        valorfinal = ("$" + (valor * 1.21))
        cantArticulos--
        console.log("El valor final es " + valorfinal)
    } else {
        alert("ingrese un metodo de pago valido") 
    }
}
console.log(productos)