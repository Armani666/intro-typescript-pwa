class Persona {
    
    private nombre : string;
    private edad : number;

    constructor(a :  string, b : number) {
            this.nombre = a;
            this.edad = b;
    }
    
    private imprimir():void{
        console.log(`Nombre ${this.nombre}`);
     }

    setNombre(nombre : string){
        this.nombre = nombre;
    }

    getnombre() : string {
        return this.nombre;
    }
    
    setEdad(edad){
        this.edad = edad;
    }
    
}

let persona1:Persona;
persona1 = new Persona("Ramses", 23);

let persona2:Persona;
persona2 = new Persona("Negro",21);

persona1.setNombre('Ramses');
console.log(persona1.getnombre());

//persona1.nombre = "Ramses";
//persona2.nombre = "Negro";
//persona1.imprimir();
//persona2.imprimir(); 

class Dado {
    private valor : number;

    public tirar() {
        this.generar();
    }

    private generar() {
        this.valor = Math.floor(Math.random() * 6) + 1;
    }

    public imprimir() {
        console.log(`Salio el valor ${this.valor}`);   
    }
}
let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();