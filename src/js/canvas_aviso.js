function banner_evaluaciones() {
    $( "div#wrapper" ).prepend(`
        <div class="duc-banner" id="duc-banner">
            Recuerda que el modo oscuro para Canvas es experimental, por lo que por ahora, se recomienda desactivarlo durante evaluaciones.
            <button id="duc-btn-desactivar">Desactivar</button>
            <!-- <button id="cerrar-duc-banner"><i class="icon-x"></i></button> -->
        </div>
    `);
    $( "#duc-btn-desactivar" ).click(function(){
        console.log("Botón banner presionado.")
        chrome.storage.sync.set({
            setcanvas: 'false',
        });
        alert("Para aplicar los cambios, debes actualizar la página.")
    })
}

$(document).ready(function(){
    chrome.storage.sync.get('setcanvas', function(valor) {
        darkcanvas = valor.setcanvas;
        if (darkcanvas == 'true') {
            banner_evaluaciones();
        }
    });
});

// document.querySelector('div#wrapper').addEventListener('click', function() {
//     setTimeout(function() {
//         menu_canvas = document.querySelector('div.tray-with-space-for-global-nav > div.fOyUs_bGBk');
//         console.log(menu_canvas);
//         menu_canvas.innerHTML += '<div id="dark_opt_canvas" style="margin-top: 10px;">Activar Modo Oscuro en Canvas (experimental) <select id="setcanvas"><option value="true">Activado</option><option value="false">Desactivado</option></select></div>';
//         console.log('completado...')
//         actualizar();
//         document.getElementById('setcanvas').addEventListener('change', guardar);
//     }, 500);
// });

