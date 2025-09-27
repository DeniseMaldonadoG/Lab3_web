console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);


const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();


function ordenar(arr) {
    const nuevoArray = [...arr]
    for (let i = 0; i < nuevoArray.length; i++) {
        for (let j = 0; j < nuevoArray.length - i - 1; j++) {
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray[j + 1];
                nuevoArray[j + 1] = temporal;
            }

        }
    }
    return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12]));

function esPar(numero) {

    return numero % 2 == 0;
}

console.log(esPar(7));
console.log(esPar(6));

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) { return dias }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}


console.log(calcularDiasCrecimiento(3, 1, 10));
console.log(calcularDiasCrecimiento(5, 2, 20));

