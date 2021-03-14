function guardar() {
    var canvas = document.getElementById('setcanvas').value;
    chrome.storage.sync.set({
      setcanvas: canvas,
    });
    console.log("Cambios guardados exitosamente.")
};

function actualizar() {
    chrome.storage.sync.get('setcanvas', function(valor) {
        document.getElementById('setcanvas').value = valor.setcanvas;
    });
};

document.addEventListener('DOMContentLoaded', actualizar);
document.getElementById('setcanvas').addEventListener('change', guardar);