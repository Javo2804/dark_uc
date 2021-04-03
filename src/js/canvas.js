function ducanvas() {
    $( "html" ).addClass( "duc" );
}
function unducanvas() {
    $( "html" ).removeClass( "duc" );
}

chrome.storage.sync.get('setcanvas', function(valor) {
    darkcanvas = valor.setcanvas;
    console.log('darkcanvas', darkcanvas)
    if (darkcanvas == 'false') {
        $(document).ready(function() {
            console.log("ALOO")
            unducanvas();
        });
    }
    // if (darkcanvas == 'true') {
    //     ducanvas();
    // }
});

function guardar() {
    var canvas = document.getElementById('setcanvas').value;
    chrome.storage.sync.set({
      setcanvas: canvas,
    });
    console.log("Cambios guardados exitosamente. Actualizando página...")
    location.reload();
};

function actualizar() {
    chrome.storage.sync.get('setcanvas', function(valor) {
        document.getElementById('setcanvas').value = valor.setcanvas;
    });
};

if (document.body.contains(document.querySelector('#global_nav_profile_link'))){
    $( "#global_nav_profile_link" ).click( function() {
        setTimeout(function() {
            menu_canvas = $('div.tray-with-space-for-global-nav > div.fOyUs_bGBk');
            console.log(menu_canvas);
            menu_canvas.append(`
                <div id="duc-advertencia-contraste">
                    <small>Advertencia, el modo oscuro de Canvas no es compatible con la opción de alto contraste.</small>
                </div>
                <div id="dark_opt_canvas" style="margin-top: 10px;">
                    Activar Modo Oscuro en Canvas (experimental) 
                    <select id="setcanvas">
                        <option value="true">Activado</option>
                        <option value="false">Desactivado</option>
                    </select>
                </div>`);
            console.log('completado...')
            actualizar();
            document.getElementById('setcanvas').addEventListener('change', guardar);
        }, 500);
    })
}

