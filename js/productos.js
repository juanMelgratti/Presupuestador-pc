function armarProcesador(serie){
    //debugger
    let p = [];
    let prom = 0;
    let urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1693&q='+serie;
    for(let i=0; i<6; i++ ){
    return fetch(urlBusqueda)

        .then(response => response.json())
        .then(data => {
            var producto = data.results[i];
            if(producto.title.includes(serie))
                p.push(producto);
            p.forEach(producto => { 
                prom += producto.price;
            });
            prom /= p.length
            console.log(producto.price)
            console.logprom
            return new Producto(p[0].thumbnail, prom, p[0].permalink);
    }
    )}
    
}

function armarProcesadores(){
    let resultados = ''
    let procesadores=['10100', '10400', '9100'];
    for(let i = 0; i<procesadores.length; i++){ 
    armarProcesador(procesadores[i])
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
                  <h6 class="title text-dots"><a href="`+ procesador.url +`">Intel Core I3</a></h6>
                  <div class="action-wrap">
                    <a href="#" class="btn btn-primary btn-sm float-right" onclick="botonCarrito(0)"> <i class="fas fa-cart-plus"></i> </a>
                    <div class="price-wrap h5">
                      <span class="price-new">Precio promedio:$` + procesador.precio + `</span>
                    </div> 
                  </div> 
                </figcaption>
              </figure> 
            </div>   
        `
        document.getElementById("productos").innerHTML = resultados;
    })} 
    
        
}

armarProcesador('9100')

window.onload = armarProcesadores

