
//Operación Sumas
class suma{
    private a : number;
    private  b : number;

constructor() {

}

    public seta( numero: number ){
    this.a = numero;
    }

    public setb( numero : number ){
    this.b = numero;
    }

    operacion():void {
        let texto : string = '';
        let Valor: number;
        Valor = this.a * this.b; 

        for (let index = 0; index < this.b; index++) {
            texto += `${this.a} + `  
             }

             console.log(texto , Valor);
             
    }


}

const resul1 = new suma() //True = Suma y False = Resta
   resul1.seta(2);
   resul1.setb(5);
   console.log(resul1.operacion());







    