import {leerSuperheroes, agregarSuperheroes} from "./utils.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';

//agregar neuvos superherores
agregarSuperheroes(archivoOriginal, archivoNuevos);

//leer y mostrar la lista actualizada de superheroes ordenada
const superheroes = leerSuperheroes(archivoOriginal);
console.log('Superheroes ordenados:');
console.log(superheroes);



