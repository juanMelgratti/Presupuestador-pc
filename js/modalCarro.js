var lista = '';

var carro = [];

function armarCarro(){
  let carrito = localStorage.getItem("carro")
  if(carrito != null){
    return carro = JSON.parse(carrito)
  }
}

function resetear(){
    lista = ''
}

function borrar(i){
    carro.splice(i,1,null);
    var producto = document.getElementById('objeto'+i);
    producto.parentNode.removeChild(producto);
    localStorage.setItem('carro', JSON.stringify(carro));
    actualizarTotal();
    verTotalEnModal();
}

function limpiarCarro(){
    carro.forEach((producto, index) =>{
        if( producto != null){
            borrar(index);
        }
    })
}

function objetosDelCarrito(carrito){
    for(let i=0; i<carrito.length; i++) {
        if(carrito[i] != null){
        lista += `
            <div id="objeto${i}"><a href="${carrito[i].url}" target="_blank"><li class="item">${carrito[i].nombre} $ ${carrito[i].precio}</a></li> <button class="btn btn-danger boton-modal" onclick="borrar(${i})"><i class="fas fa-trash-alt"></i></button>
            <hr></div>
   `
    }
    };
     return lista
}

function modal(carrito){
    let modalString = `
    <div class="modal left fade" id="carrito-modal" tabindex="" role="dialog" aria-labelledby="carrito-modalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <h1 class="titulo" style="color:#1082af;">Presupuesto</h1>
                <hr>
                <ul>
                <div id="lista">
                    ${objetosDelCarrito(carrito)}
                    </div>
                </ul>
            </div>
            <div class="modal-footer">

                    <div> <span id="modalTotal"></span> $ARS <i class="fas fa-shopping-cart"></i></div>
                    <button type="button" onclick="limpiarCarro()" class="btn btn-warning">Limpiar Carrito</button>
                </div>
            </div>
        </div>
    </div>

    `
    document.getElementById("mod").innerHTML = modalString;
}