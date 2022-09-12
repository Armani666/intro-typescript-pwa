



//
interface direccionAlumno{
    calle:string,
    pais: string,
    estado: string,
    numero: any,

}
interface utlAlumno{
    nombre:string,
    edad:number,
    direccion:direccionAlumno
    mostrarDireccion: () => void
}

const pruebaAlumno:utlAlumno ={
        nombre : 'Ramses',
        edad : 23,
        direccion:  {
            calle:'Jardinez de jerez',
            pais:'Mexico',
            estado:'Gto',
            numero:'477901830',

        },
        mostrarDireccion(){
            return this.nombre+', '+ this.edad+','+ this.direccion.calle+ ','+this.direccion.pais+','+this.direccion.estado+','+this.direccion.pais+','+this.direccion.numero
}  

}