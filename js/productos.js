var carro = [];
var total = 0;

//funciones de armado
function armarProcesador(serie, modelo){
    let p = [];
    let prom = 0;
    let urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1693&q='+serie;

    return fetch(urlBusqueda)
        .then(response => response.json())
        .then(data => {
            var producto = data.results[0];
            if(producto.title.includes(serie))
                p.push(producto);
            p.forEach(producto => { 
                prom += producto.price;
            });
            prom /= p.length
            console.log(producto.price)
            console.logprom
            return new Producto(serie.toUpperCase()+' '+modelo.toUpperCase(),p[0].thumbnail, prom, p[0].permalink);
    }
    )} 

    function armarMotherboard(serie, marca){
      let p = [];
      let prom = 0;
      let urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1692&q='+serie;
  
      return fetch(urlBusqueda)
          .then(response => response.json())
          .then(data => {
              var producto = data.results[0];
              if(producto.title.includes(marca))
                  p.push(producto);
              p.forEach(producto => { 
                  prom += producto.price;
              });
              prom /= p.length
              console.log(p)
              console.logprom
              return new Producto(marca.toUpperCase() +' '+serie.toUpperCase(),p[0].thumbnail, prom, p[0].permalink);
      }
      )  
  }
  

//funciones que escriben html

function armarProcesadores(){
  let resultados = ''
  let procesadores=[{'modelo':'i3', 'serie':'10100'}, {'modelo':'i5', 'serie':'10400'},];
  for(let i = 0; i<procesadores.length; i++){ 
  armarProcesador(procesadores[i]['serie'], procesadores[i]['modelo'])
  .then(procesador =>{
      resultados = resultados + `
      <div class="col-3 box">
            <figure class="card card-product img">
              <div class="img-container">
                <div class="img-wrap"> 
                  <img src="`+procesador.imagen+`">
                </div>
              </div>
              <figcaption class="info-wrap">
                <h6 class="title text-dots"><a href="`+ procesador.url +`">`+procesadores[i]['modelo'].toUpperCase()+ ' '+ procesadores[i]['serie']+`</a></h6>
                <div class="action-wrap">
                  <a class="btn btn-primary btn-sm float-right boton-carrito" onclick="botonCarrito(0)"> <i class="fas fa-cart-plus carrito"></i> </a>
                  <div class="price-wrap h5">
                    <span class="price-new">Precio: $` + procesador.precio + `</span>
                  </div> 
                </div> 
              </figcaption>
            </figure> 
          </div>   
      `
      document.getElementById("productos").innerHTML = resultados;
  })}         
}

function armarMotherboards(){
    let resultados = '';
    let mothers=[{'modelo':'Gigabyte', 'serie':'H310'}, {'modelo':'Asus', 'serie':'H410m'},{'modelo':'Asus', 'serie':'H310m'}, {'modelo':'Asus', 'serie':'z390'}];
    for(let i = 0; i<mothers.length; i++){   
    armarMotherboard(mothers[i]['serie'], mothers[i]['modelo'])
    .then(mother =>{
        resultados = resultados + `
        <div class="col-3 box">
              <figure class="card card-product img">
                <div class="img-container">
                  <div class="img-wrap"> 
                    <img src="`+mother.imagen+`">
                  </div>
                </div>
                <figcaption class="info-wrap">
                  <h6 class="title text-dots"><a href="`+ mother.url +`">`+ mothers[i]['modelo'].toUpperCase() +' '+ mothers[i]['serie'].toUpperCase() + `</a></h6>
                  <div class="action-wrap">
                    <a  class="btn btn-primary btn-sm float-right boton-carrito" onclick="agregarACarrito(`+`'`+mothers[i]['serie']+`',`+`'`+mothers[i]['modelo']+`'`+`)"> <i class="fas fa-cart-plus carrito"></i> </a>
                    <div class="price-wrap h5">
                      <span class="price-new">Precio: $` + mother.precio + `</span>
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
            armarMotherboards();
            break;
        case n ==2:
            armarProcesadores();
            break;
        default:
            armarMotherboards();
            break;
    }
}

function verTotalEnModal(carrito){
  total = 0
  carrito.forEach(producto =>{
    if(producto != ''){
      total+= producto.precio
      document.getElementById("modalTotal").innerHTML = total;
      console.log(total)
    }
    else{
      total+=0
      document.getElementById("modalTotal").innerHTML = total;
      console.log(total)
    }
  })
}

function actualizarTotal(carrito){
  total = 0
  carrito.forEach(producto =>{
    if(producto != ''){
  total += producto.precio
  document.getElementById("total").innerHTML = total;
  console.log(total)
}
    else{
      total += 0
      document.getElementById("total").innerHTML = total;
      console.log(total)
    }
})
}

function agregarACarrito(serie, modelo){
  armarMotherboard(serie, modelo)
  .then(producto => {
    carro.push(producto)
    actualizarTotal(carro)
  })
}

function restarDeCarrito(serie,modelo){
  console.log('aaaaaaaaaaaaa')
  armarMotherboard(serie,modelo)
  .then(producto => {
    total-= producto.precio
    document.getElementById("total").innerHTML = total; 
  })
}

function verCarrito(carro){
  prueba = carro.forEach(producto =>{
  })
}

//onload
window.onload = cambiar

/////////////////////////////////////////////////////////
// pruebas
function testProductos(){
  let prueba = new Producto('nombre','url de la imagen', 5000, 'https//:www.google.com.ar');
  console.log('inicio de prueba');
  console.log(prueba.nombre)
  console.log(prueba.imagen);
  console.log(prueba.precio);
  console.log(prueba.url);
  console.log('fin de prueba');
}



/*
`esta prueba muestra que el objeto funciona.
al principio tenía un objeto llamado carrito pero dado que
el fetch de JavaScript es asincrono me estaba dando muchos problemas
entonces decidí armar un array vacío y llamarlo carrito, ahí se van a guardar
todos los objetos creados con armarMotherboard, armarProcesadores etc
e ir pusheando cada objeto por separado guardandolo en el array carrito,
la idea es guardar el carrito en el local storage para que no se borre.
Pero eso todavía lo tengo que implementar.` 
//comentario
`
Actualmente hay una sentencia "switch" en la función llamada "cambiar" que en este momento
solo funciona para las funciones "armarProcesadores" y "armarMotherboards" que lo que hacen es
armar las tarjetas de productos en el html.
Recibe los parámetros del array asociativo y con eso hace la búsqueda mediante un fetch
consultando a la api de mercado libre (esto es lo que hacen las funciones armarProcesadores y
armarMotherboards).
`*/

testProductos();


function a(){
  armarProcesador('i3', 10100)
  .then(producto =>{
    console.log(producto.nombre)
    console.log(producto.url)
    console.log(producto.imagen)
    console.log(producto.precio)
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  })
}


    

