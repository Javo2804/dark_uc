// Para evitar mostrar modo claro durante la carga de la página,
// se aplica este código al inicio de la carga.

var element = document.querySelector("html");
element.classList.add("duc");

chrome.storage.local.get('setcanvas', function(valor) {
    darkcanvas = valor.setcanvas;
    console.log('darkcanvas', darkcanvas)
    if (darkcanvas == 'false') {
        $(document).ready(function() {
            unducanvas();
        });
    }
});