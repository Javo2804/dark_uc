function guardar() {
    var canvas = document.getElementById('setcanvas').value;
    chrome.storage.local.set({
      setcanvas: canvas,
    });
    console.log("Cambios guardados exitosamente.")
};

function actualizar() {
    chrome.storage.local.get('setcanvas', function(valor) {
        document.getElementById('setcanvas').value = valor.setcanvas;
    });
};

document.addEventListener('DOMContentLoaded', actualizar);
document.getElementById('setcanvas').addEventListener('change', guardar);