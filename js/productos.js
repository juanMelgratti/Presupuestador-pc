var total = 0;
var carro = [];

//armado de carro
function armarCarro(){
  let carrito = localStorage.getItem("carro")
  if(carrito != null){
    return carro = JSON.parse(carrito)
  } 
}

//armadoURL
var urlBusqueda = ''

function procesador(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1693&q='+serie
}

function motherboard(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1692&q='+serie
}

function ram(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1694&q='+serie
}

function tarjetaGrafica(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1658&q='+serie
}

function discos(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1672&q='+serie
}

function fuente(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1695&q='+serie
}

function gabinete(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA4286&q='+serie
}

function monitor(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA14407&q='+serie
}

function mouse(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1714&q='+serie
}

function teclado(serie){
  urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA418448&q='+serie
}

function armarURL(tipo, serie){
  let s = serie
  switch(tipo != ''){
    case tipo == 'procesador':
      procesador(s)
      break;

    case tipo == 'motherboard':
      return motherboard(s)

    case tipo == 'ram':
      ram(s)
      break;

    case tipo == 'tarjetaGrafica':
      tarjetaGrafica(s)
      break;

    case tipo == 'disco':
      discos(s)
      break;

    case tipo == 'fuente':
      fuente(s)
      break;

    case tipo == 'gabinete':
      gabinete(s)
      break;

    case tipo == 'monitor':
      monitor(s)
      break;

    case tipo == 'mouse':
      mouse(s)
      break;

    case tipo == 'teclado':
      teclado(s)
      break;
    
    default:
      motherboard(s)
      break;
  }
}

//armar objetos
function armarProducto(serie, modelo, tipo){
  let prom = 0
  let p = []
  armarURL(tipo, serie)
  return fetch(urlBusqueda)
  .then(response => response.json())
  .then(data => {
    for(let i=0; i<20; i++){
      var producto = data.results[i];
        if(producto.title.toLowerCase().includes(modelo)){
          p.push(producto);
          prom = p[0].price}
    }
      return new Producto(modelo.toUpperCase()+' '+serie.toUpperCase(),p[0].thumbnail, prom, p[0].permalink);
})
}
  

//funciones que escriben html armar productos
function armarProductos(array, tipo){
  let resultados = ''
  for(let i=0; i<array.length; i++){
    armarProducto(array[i]['serie'], array[i]['modelo'], tipo)
    .then(producto =>{
      resultados = resultados + `
      <div class="col-3 box">
            <figure class="card card-product img">
              <div class="img-container">
                <div class="img-wrap"> 
                  <img src="`+producto.imagen+`">
                </div>
              </div>
              <figcaption class="info-wrap">
                <h6 class="title text-dots"><a href="`+ producto.url +`">`+producto.nombre+`</a></h6>
                <div class="action-wrap">
                  <a class="btn btn-primary btn-sm float-right boton-carrito" onclick="agregarAlCarrito(`+`'`+array[i]['serie']+`',`+`'`+array[i]['modelo']+`'`+`,'`+tipo+`')"> <i class="fas fa-cart-plus carrito"></i> </a>
                  <div class="price-wrap h5">
                    <span class="price-new">Precio: $` + producto.precio + `</span>
                  </div> 
                </div> 
              </figcaption>
            </figure> 
          </div>   
      `
      document.getElementById("productos").innerHTML = resultados;
  })
  }

}

// funciones onclick
function cambiar(n){
    switch(n > 0 ){
        case n == 1:
            armarProductos(mothers, 'motherboard')
            break;
        case n == 2:
            armarProductos(procesadores, 'procesador')
            break;
        case n == 3:
            armarProductos(memoriaRam, 'ram')
            break;
        default:
            armarProductos(mothers, 'motherboard')
            break;
    }
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
    carro.push(producto)
    armarCarro()
    carro.push(producto)
    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarTotal()
  })
}

function agregarACarrito(serie, modelo){
  armarMotherboard(serie, modelo)
  .then(producto => {
    armarCarro()
    carro.push(producto)
    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarTotal()
  })
}

function restarDeCarrito(serie,modelo){
  armarMotherboard(serie,modelo)
  .then(producto => {
    total-= producto.precio
    document.getElementById("total").innerHTML = total; 
  })
}

//onload
window.onload = cambiar

//funciones
actualizarTotal();
armarCarro();
