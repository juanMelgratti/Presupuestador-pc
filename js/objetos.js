var total = 0;

class Producto{
    constructor(imagen, precio, url){
        this.imagen = imagen
        this.precio = precio
        this.url = url
    }
};

class Carrito{
    constructor(){
        this.carrito = [];
    }

    agregarProducto(producto){
        this.carrito.push(producto);
    }

    verItemsEnCarrito(){
        this.carrito.foreach(producto =>{
            return (producto.titulo, producto.precio);
        })
}};

let productos = [new Producto('producto1',2,'url'), new Producto('producto2',2,'url'), new Producto('producto3',2,'url')]

let carro = new Carrito()

function botonCarrito(n){
    carro.agregarProducto(productos[n])
    console.log(carro.carrito)
}

