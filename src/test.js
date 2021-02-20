var isDateSupported = function () {
    var input = document.createElement('input');
    var value = 'a';
    input.setAttribute('type', 'date');
    input.setAttribute('value', value);
    return (input.value !== value);
};

var maxHoy = function (elementos) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById(elementos).setAttribute("max", today);
}

if (!isDateSupported()) {
    $(function () {
        $(".form-fecha").datepicker({ dateFormat: "dd-mm-yy" });
        $(".form-fecha-cumpleaños").datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "1900:2021",
            dateFormat: "dd-mm-yy",
            maxDate: 0,
            minDate: "-150y"
        });
        $(".form-fecha-agendar").datepicker({
            dateFormat: "dd-mm-yy",
            maxDate: 90,
            minDate: 0
        });
        $('.form-fecha-texto').hide();
    });
}


