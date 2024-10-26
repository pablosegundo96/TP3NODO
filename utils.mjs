import fs from 'fs';

//Clase para representar un SuperHeroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, 
        debilidad, poder, habilidadEspecial, aliado, enemigo) {
    this.id = id;
    this.nombreSuperheroe = nombreSuperheroe;
    this.nombreReal = nombreReal;
    this.nombreSociedad = nombreSociedad;
    this.edad = edad;
    this.planetaOrigen = planetaOrigen;
    this.debilidad = debilidad;
    this.poder = poder;
    this.habilidadEspecial = habilidadEspecial;
    this.aliado = aliado;
    this.enemigo = enemigo;     
    }
}

// Funcion parra leer y ordenar  los superheroes

export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync (ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    //convertir a instancias de Superheroe
    const superheroes = superheroesArray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal,
            hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad,
            hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    // Ordenar por nombre de superheroe
    superheroes.sort((a, b) =>  a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe));
    return superheroes;
    
}

// nueva funcion para agregar superheroes

export function agregarSuperheroes(rutaOriginal, rutaNuevos) {
    const datosOriginales = fs.readSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroresOriginal = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    //cconvertir los nuevos superheroes a instancias de superheroe

    const instanciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen,
        hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo )
    );

    // combinar listas
    const listasActualizada = [...superheroresOriginal, ...instanciasNuevos];

    // Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listasActualizada, null, 2), 'utf-8');
    console.log('Listas de SuperHerores actualizada con exito.');
    
}