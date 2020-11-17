var lista = '';

function resetear(){
    lista = ''
}

function borrar(i){
    carro.splice(i,1,'');
    var producto = document.getElementById('objeto'+i);
    producto.parentNode.removeChild(producto);
    actualizarTotal(carro);
    verTotalEnModal(carro);
}

function limpiarCarro(){
    for(let i=0; i<carro.length; i++){
        if(carro[i] != '')
            borrar(i);
    }
}

function objetosDelCarrito(carrito){
    for(let i=0; i<carrito.length; i++) {
        if(carrito[i] != ''){    
        lista += `
            <div id="objeto${i}"><li class="item">`+carrito[i].nombre+` $`+carrito[i].precio+`</li> <button class="btn btn-danger boton-modal" onclick="borrar(${i})"><i class="fas fa-trash-alt"></i></button>
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
                <h1 class="titulo">Presupuesto</h1>
                <hr>
                <ul>
                <div id="lista">`+
                    objetosDelCarrito(carrito)
                    +`</div>
                </ul>
            </div>
            <div class="modal-footer">
                
                    <div>Total: <span id="modalTotal">0</span> <i class="fas fa-shopping-cart"></i></div>
                    <button type="button" onclick="limpiarCarro()" class="btn btn-primary">Limpiar Carrito</button>
                </div>
            </div>
        </div>
    </div>

    `
    document.getElementById("mod").innerHTML = modalString;
}


