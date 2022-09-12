/* Objetos */

let mascotas = ['Perro', 'Gato', 100, true];
let amaterno : string | number;
let tem2:(boolean|number|string)[]=['rata',100];

amaterno='Ramses';
amaterno=100;
tem2.push(200);

let acciones : string [] = [ 'dormir', 'comer', 'volar'];

interface Alumno {
   matricula:number | string;
   nombre3:string;
   apaterno2:string;
   amaterno2:string;
   acciones?:string[];
   email: string | string;
}

const  alumno : Alumno = {
    matricula:19283,
    nombre3:'Mario',
    apaterno2:'Lopez',
    amaterno2:'Gonzalez',
    email:'mariogarnachas62@gmail.com'
}
 alumno.nombre3='Dario';

console.table(alumno);




