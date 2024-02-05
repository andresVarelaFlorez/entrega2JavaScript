
const productos = [
    {id:1, nombre:"Arroz", precio:2000},
    {id:2, nombre:"frijol", precio:7000},
    {id:3, nombre:"Aceite", precio:15000},
    {id:4, nombre:"Azucar", precio:3500},
    {id:5, nombre:"Lenteja", precio:4000}
    
]

class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 20;
        this.maxProductosParaDescuento = 3;
        this.totalPagar = 0;
    }

    agregarProducto(id) {
        let producto = productos.find(prod => prod.id === id);
        console.log(producto);

        if (producto) {
            this.productos.push(producto);
            console.log("Agregaste el Producto #" + id + " al Carrito!");
        } else {
            //console.log("No se encontró el Producto con #" + id + "!");
            alert("No se encontró el producto seleccionado");
        }
    }

    listarCarrito() {
        let salida = "";
    
        this.productos.forEach(item => {
            salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
        })
    
        return salida;
    }

    calcularTotalProductos() {
        return this.productos.length;
    }

    aplicarDescuento() { //Si tengo 3 o más productos en mi Carrito, aplico un descuento
        if (this.calcularTotalProductos() >= this.maxProductosParaDescuento) {
            return Math.round((this.calcularTotalPagar() * this.descuento) / 100);
        } else {
            return 0;
        }
    }

    calcularTotalPagar() {
        let total = 0;

        this.productos.forEach(item => {
           total += item.precio;
        });

        return total;
    }
}

function listarProductos() {
    let salida = "";

    productos.forEach(item => {
        salida += item.id + " - " + item.nombre + " - $" + item.precio + "\n";
    })

    return salida;
}

const carrito = new Carrito();
let opcionSeleccionada = 10;

let nombreCliente = prompt("Ingrese el nombre del cliente");
while (opcionSeleccionada != 0) {
    opcionSeleccionada = parseInt(prompt("Seleccione el producto " + nombreCliente + " para agregarlo al carrito de compra: (0 para Salir)\n\n" + listarProductos()));

    if (opcionSeleccionada == 0) {
        break;
    }

    carrito.agregarProducto(opcionSeleccionada);
}

let productosCarrito = "Hola " + nombreCliente +" el detalle de tu cuenta es :\n" + carrito.listarCarrito();
let salidaSubTotal = "Subtotal: $" + carrito.calcularTotalPagar();
let salidaDescuento = "Descuento del 20%: $" + carrito.aplicarDescuento();
let montoFinal = "Total: $" + Math.round(carrito.calcularTotalPagar() - carrito.aplicarDescuento());
alert(productosCarrito + "\n" + salidaSubTotal + "\n" + salidaDescuento + "\n" + montoFinal);

