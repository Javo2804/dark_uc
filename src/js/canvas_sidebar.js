function guardar() {
    var estado = document.getElementById('setcanvas').value;
    chrome.storage.local.set({
      setcanvas: estado,
    });
    if (estado == true ||  estado == 'true') {
        ducanvas();
    } else if (estado == false ||  estado == 'false') {
        unducanvas();
    } else {
        console.log("Error canvas_sidebar.js - setcanvas value not expected.")
    }
};

function obtener_estado() {
    chrome.storage.local.get('setcanvas', function(valor) {
        document.getElementById('setcanvas').value = valor.setcanvas;
    });
};

if (document.body.contains(document.querySelector('#global_nav_profile_link'))){
    $('#global_nav_profile_link').click(function() {
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
            obtener_estado();
            document.getElementById('setcanvas').addEventListener('change', guardar);
        }, 250);
    })
}

