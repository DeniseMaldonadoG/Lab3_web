console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);


document.getElementById("btnRecordar").addEventListener("click", recordarActividad);

function recordarActividad() {
    let dia = document.getElementById("dia").value.trim().toLowerCase();
    let mensaje = document.getElementById("mensaje").value.trim();

    const actividades = {
        "lunes": "Debo atender un cliente especifico.",
        "martes": "Visito una agencia fuera de la ciudad.",
        "miercoles": "Debo llevar a mi hija al ballet (balé).",
        "jueves": "Debo prioriza entregas de desarrollo.",
        "viernes": "Debo atender problemas de manera remota.",
        "sabado": "Debo hacer lo que mi esposa quiera."
    };

    let actividad = actividades[dia] || "No hay actividades registradas para este día.";

    let resultado = "El dia de hoy es " + dia.charAt(0).toUpperCase() + dia.slice(1) + ". " +
        actividad + "<br>" +
        "Recordatorio: " + mensaje;

    document.getElementById("resultado").innerHTML = resultado;
}
