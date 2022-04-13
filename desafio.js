let cantArticulos = parseInt(prompt("Ingrese la cantidad de articulos a comprar"))
let valor
let metodopago
let valorfinal

function item(id, nombre, value) {
    this.id = id
    this.nombre = nombre
    this.value = value
}
function concat(a, b){
    alert("el producto " + a + " tiene un valor de " + b)
}
const productos = []

while (cantArticulos > 0) {
    nombreProducto = prompt("Ingrese el nombre del producto")
    valor = parseInt(prompt("Ingrese el valor del producto"))
    metodopago = prompt("Abona en Efectivo o con tarjeta")
    console.log("El metodo de pago es " + metodopago)
    id = cantArticulos
    
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
    product = new item(id, nombreProducto, valorfinal)
    console.log(product)
    productos.push(product)
}
console.log(productos)

let detalle = prompt("Desea obtener un detalle del producto (si/no)")
if (detalle == "si"){
    for(const producto of productos){
        concat(producto.nombre, producto.value)
    }
} else {
    alert("muchas gracias")
}


      


