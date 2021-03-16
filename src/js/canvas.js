var darkcanvas = false;

chrome.storage.sync.get('setcanvas', function(valor) {
    darkcanvas = valor.setcanvas;
    console.log('darkcanvas', darkcanvas)
    if (darkcanvas == 'true') {
        document.getElementsByTagName("html")[0].classList.add("duc");
        // console.log('iframe:', document.body.contains(document.querySelector('div.tool_content_wrapper > form[action="https://applications.zoom.us/lti/rich"]')));
        // if (document.body.contains(document.querySelector('div.tool_content_wrapper > form[action="https://applications.zoom.us/lti/rich"]'))){
        //     document.querySelector('iframe[name="tool_content"]').contentWindow.document.getElementsByTagName("html")[0].classList.add("ducz");
        // }
    }
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
    document.querySelector('#global_nav_profile_link').addEventListener('click', function() {
        setTimeout(function() {
            menu_canvas = document.querySelector('div.tray-with-space-for-global-nav > div.fOyUs_bGBk');
            console.log(menu_canvas);
            menu_canvas.innerHTML += '<div id="dark_opt_canvas" style="margin-top: 10px;">Activar Modo Oscuro en Canvas (experimental) <select id="setcanvas"><option value="true">Activado</option><option value="false">Desactivado</option></select></div>';
            console.log('completado...')
            actualizar();
            document.getElementById('setcanvas').addEventListener('change', guardar);
        }, 500);
    });
}

