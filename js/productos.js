var total = 0;
var carro = [];

let getProducto =  document.getElementById("productos");
let getTotal = document.getElementById("total");

function armarCarro(){
  let carrito = localStorage.getItem("carro");
  if(carrito != null){
    return carro = JSON.parse(carrito)
  }
}

//armadoURL
function armarURL(tipo, busqueda){
  let urlArmada = '';
  urlArmada = urls[0][tipo]+busqueda;
  return urlArmada
}

//armar productos
function armarProducto(busqueda, marca, tipo){
  let p = [];
  urlBusqueda = armarURL(tipo, busqueda);
  return fetch(urlBusqueda)
  .then(response => response.json())
  .then(data => {
    for(let i=0; i<20; i++){
      var producto = data.results[i];
        if(producto.title.toLowerCase().includes(marca)){
          p.push(producto)}
    }
      return new Producto(busqueda.toUpperCase(),p[0].thumbnail, p[0].price, p[0].permalink);
})
}

function armarProductos(array, tipo){
  let resultados = '';
  for(let i=0; i<array.length; i++){
    armarProducto(array[i]['busqueda'], array[i]['marca'], tipo)
    .then(producto =>{
      resultados +=`
      <div class="col-3 box">
            <figure class="card card-product img">
              <div class="img-container">
                <div class="img-wrap">
                  <img src="${producto.imagen}">
                </div>
              </div>
              <figcaption class="info-wrap">
                <h6 class="title text-dots"><a href="${producto.url}" target="_blank">${producto.nombre}</a></h6>
                <div class="action-wrap">
                  <a id="myBtn" class="btn btn-primary btn-sm float-right boton-carrito" onclick="agregarAlCarrito('${array[i]['busqueda']}','${array[i]['marca']}','${tipo}')"> <i class="fas fa-cart-plus carrito"></i> </a>
                  <div class="price-wrap h5">
                    <span class="price-new">$ ${producto.precio} </span>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
      `
      getProducto.innerHTML = resultados;
  })
  }
}

// funciones onclick
function actualizarTotal(){
  total = 0
  if(armarCarro() == undefined){
    getTotal.innerHTML = 0
  }
  else{
    armarCarro().forEach(producto =>{
      if(producto != null){
      total += producto.precio;
      getTotal.innerHTML = total
      }
      else{
        total += 0;
        getTotal.innerHTML = total;
      }
  })}
}

function agregarAlCarrito(serie, marca, tipo){
  armarProducto(serie, marca, tipo)
  .then(producto => {
    armarCarro();
    carro.push(producto);
    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarTotal()
  })
}

function cambiar(n){
  if(getProducto){
    switch(n > 0 ){
        case n == 1:
            armarProductos(mother, 'motherboard')
            break;
        case n == 2:
            armarProductos(procesador, 'procesador')
            break;
        case n == 3:
            armarProductos(ram, 'ram')
            break;
        case n == 4:
            armarProductos(tarjetaGrafica, 'tarjetaGrafica')
            break;
        case n == 5:
            armarProductos(disco, 'disco')
            break;
        case n == 6:
            armarProductos(fuente, 'fuente')
            break;
        case n == 7:
            armarProductos(gabinete, 'gabinete')
            break;
        case n == 8:
            armarProductos(monitor, 'monitor')
            break;
        case n == 9:
            armarProductos(mouse, 'mouse')
            break;
        case n == 10:
            armarProductos(teclado, 'teclado')
            break;
        default:
            armarProductos(mother, 'motherboard')
            break;
    }
}}

function verTotalEnModal(){
  total = 0
  if(armarCarro() == undefined){
    document.getElementById("modalTotal").innerHTML = 0
  }
  else{
    armarCarro().forEach(producto =>{
      if(producto != null){
        total+= producto.precio
        document.getElementById("modalTotal").innerHTML = total;
      }
      else{
        total+=0
        document.getElementById("modalTotal").innerHTML = total;
      }
    })}
}

//onload
window.onload = cambiar
armarCarro();
actualizarTotal();