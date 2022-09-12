/* Funsión */

function nombre4():void{
    console.log('nombre');
}
//console.log(nombre4());

function sumar(num1:number, num2:number):number{
    
    return num1+num2;

}

//console.log(sumar(10,30));

function restar( num1:number, num2:number, num3:number=0 ): number{
    
        return num1-num2-num3;
     }
    
     const summaFlecha = (a:number,b:number):number=>{
        return  a + b ;
     }
     //console.log(restar(11,20));
     //console.log(restar(11,20,5));
interface escuelaAlumno{
    nombre:string;
    email?:string;
    edad:Number;
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaAlumno, calificar: number):void{
     alumno.nombre='Ulises';
     alumno.email='Soynegro666@mail.com';
     alumno.edad=calificar;
}
const newAlumno:escuelaAlumno={
    nombre:'Maximo',
    edad:number,
    saludar(){
        console.log('Hello, world');
    }
}
