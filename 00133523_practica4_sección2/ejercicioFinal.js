console.assert("Legolas" > "Gimli");
console.clear();
console.dir(window);
console.dirxml(document.body);


const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
console.group('Superheroes de Marvel');
marvel.forEach(superhero => console.log(superhero));
console.groupEnd();

