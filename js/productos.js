function armarProcesador(serie, modelo){
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
    let procesadores=[{'modelo':'i3', 'serie':'10100'}, {'modelo':'i5', 'serie':'10400'}];
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
                  <h6 class="title text-dots"><a href="`+ procesador.url +`">`+procesadores[i]['modelo']+ ' '+ procesadores[i]['serie']+`</a></h6>
                  <div class="action-wrap">
                    <a href="#" class="btn btn-primary btn-sm float-right" onclick="botonCarrito(0)"> <i class="fas fa-cart-plus"></i> </a>
                    <div class="price-wrap h5">
                      <span class="price-new">Precio:$` + procesador.precio + `</span>
                    </div> 
                  </div> 
                </figcaption>
              </figure> 
            </div>   
        `
        document.getElementById("productos").innerHTML = resultados;
    })} 
    
        
}



function armarMotherboard(serie, marca){
    //debugger
    let p = [];
    let prom = 0;
    let urlBusqueda = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1692&q='+serie;
    for(let i=0; i<6; i++ ){
    return fetch(urlBusqueda)
        .then(response => response.json())
        .then(data => {
            var producto = data.results[i];
            if(producto.title.includes(marca))
                p.push(producto);
            p.forEach(producto => { 
                prom += producto.price;
            });
            prom /= p.length
            console.log(p)
            console.logprom
            return new Producto(p[0].thumbnail, prom, p[0].permalink);
    }
    )}
    
}

function armarMotherboards(){
    let resultados = ''
    let mothers=[{'modelo':'Gigabyte', 'serie':'H310'}, {'modelo':'Msi', 'serie':'H310M'}];
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
                  <h6 class="title text-dots"><a href="`+ mother.url +`">`+ mothers[i]['serie'] + mothers[i]['modelo'] +`</a></h6>
                  <div class="action-wrap">
                    <a href="#" class="btn btn-primary btn-sm float-right" onclick="botonCarrito(0)"> <i class="fas fa-cart-plus"></i> </a>
                    <div class="price-wrap h5">
                      <span class="price-new">Precio:$` + mother.precio + `</span>
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

function cambiar(n){
    switch(n > 0 ){
        case n == 1:
            armarMotherboards()
            break;
        case n ==2:
            armarProcesadores()
            break;
    }
}
    

