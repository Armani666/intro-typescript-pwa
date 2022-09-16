//Destructurados de objetos y arreglos

import { CancellationToken } from "typescript";

interface Detalles{
    autor : string;
    anio : number;
}
interface Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;
}
const reproductor : Reproductor={

    volumen : 90,   
    segundo : 60,
    cancion : 'El Ansioso',
    detalles : {
        autor : 'Grupo Marrano',
        anio : 2015

    } 
}
const{cancion,volumen,segundo,detalles}=reproductor;
const{autor,anio}=detalles;

console.table('El nombre de la canción' + cancion);
console.table('El volumen de la canción' + volumen);
console.table('El segundo de la canción' + segundo);
console.table('El autor de la canción' + autor);

const dbz:string[]=['Goku','Gohan','Vegeta','Krillin','Yamcha'];

console.log('Personajes 1:', dbz[0]);
console.log('Personajes 2:', dbz[1]);
console.log('Personajes 3:', dbz[2]);
console.log('Personajes 4:', dbz[3]);
console.log('Personajes 5:', dbz[4]);

const[p1,p2,p3,p4,p5] = dbz;
console.log('Personaje 1:' + p1[0]);
console.log('Personaje 2:' + p2[1]);
console.log('Personaje 3:' + p3[2]);
console.log('Personaje 4:' + p4[3]);
console.log('Personaje 5:' + p5[4]);


