var total = 0;
var carro = [];
let getProducto =  document.getElementById("productos")

function armarCarro(){
  let carrito = localStorage.getItem("carro")
  if(carrito != null){
    return carro = JSON.parse(carrito)
  } 
}

//armadoURL
var urlBusqueda = ''

function armarURL(tipo, serie){
  switch(tipo != ''){
    case tipo == 'procesador':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1693&q='+serie
      break;

    case tipo == 'motherboard':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1692&q='+serie
      break;

    case tipo == 'ram':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1694&q='+serie
      break;

    case tipo == 'tarjetaGrafica':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1658&q='+serie
      break;

    case tipo == 'disco':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1672&q='+serie
      break;

    case tipo == 'fuente':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1695&q='+serie
      break;

    case tipo == 'gabinete':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA4286&q='+serie
      break;

    case tipo == 'monitor':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA14407&q='+serie
      break;

    case tipo == 'mouse':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1714&q='+serie
      break;

    case tipo == 'teclado':
      urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA418448&q='+serie
      break;
  }
}

//armar productos
function armarProducto(serie, modelo, tipo){
  let precio = 0
  let p = []
  armarURL(tipo, serie)
  return fetch(urlBusqueda)
  .then(response => response.json())
  .then(data => {
    for(let i=0; i<20; i++){
      var producto = data.results[i];
        if(producto.title.toLowerCase().includes(modelo)){
          p.push(producto);
          precio = p[0].price}
    }
      return new Producto(modelo.toUpperCase()+' '+serie.toUpperCase(),p[0].thumbnail, precio, p[0].permalink);
})
}

//funciones que escriben html armar productos
function armarProductos(array, tipo){
  let resultados = ''
  for(let i=0; i<array.length; i++){
    armarProducto(array[i]['serie'], array[i]['modelo'], tipo)
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
                  <a id="myBtn" class="btn btn-primary btn-sm float-right boton-carrito" onclick="agregarAlCarrito('${array[i]['serie']}','${array[i]['modelo']}','${tipo}')"> <i class="fas fa-cart-plus carrito"></i> </a>
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

function actualizarTotal(){
  total = 0
  armarCarro().forEach(producto =>{
    if(producto != null){
    total += producto.precio
    document.getElementById("total").innerHTML = total;
    }
    else{
      total += 0
      document.getElementById("total").innerHTML = total;
    }
})
}

function agregarAlCarrito(serie, modelo, tipo){
  armarProducto(serie, modelo, tipo)
  .then(producto => {
    armarCarro()
    carro.push(producto)
    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarTotal()
  })
}

function verTotalEnModal(){
  total = 0
  armarCarro().forEach(producto =>{
    if(producto != null){
      total+= producto.precio
      document.getElementById("modalTotal").innerHTML = total;
    }
    else{
      total+=0
      document.getElementById("modalTotal").innerHTML = total;
    }
  })
}

//onload
window.onload = cambiar

//funciones
armarCarro();
actualizarTotal();