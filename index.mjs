import {agregarSuperheroes, leerSuperheroes} from "./utils.mjs";

const archivoOriginal = './superherores.txt';
const archivoNuevos = './agregarSuperherores.txt';

//agregar neuvos superherores
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);



