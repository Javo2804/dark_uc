// Para evitar mostrar modo claro durante la carga de la página,
// se aplica este código al inicio de la carga.

var element = document.querySelector("html");
element.classList.add("duc");

function ducanvas() {
    $( "html" ).addClass( "duc" );
}
function unducanvas() {
    $( "html" ).removeClass( "duc" );
}

chrome.storage.local.get('setcanvas', function(valor) {
    darkcanvas = valor.setcanvas;
    console.log('darkcanvas', darkcanvas)
    if (darkcanvas == 'false') {
        $(document).ready(function() {
            console.log("Agregando clase duc")
            unducanvas();
        });
    }
});