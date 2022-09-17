class formucalcu{
    
    private A : number;
    private B : number;
    private C : number;
    private Options : boolean = false;
  
   constructor( Option? : boolean ){ // ? = A si se manda o no se manda la variable

    if (Option){
        this.Options = true;
    } 
    
   }

//formula para Valores

  public setA( numero: number ){
       this.A = numero;
   }

  public setB( numero : number ){
       this.B = numero;
   }
   
   public  setC( numero : number ){
       this.C = numero;
   }
//Formula para  los problemas de valores

   private potenciadeB(){

       return Math.pow(this.B,2) //Formular 'Math.pow' Para sacar la potencia del valor
   }
   private suma4AC(){

       return 4 * this.A * this.C;
   }
   private multipli2A(){

       return 2 * this.A;
   }

   //Operaciones

   private dividendo(){

    if (this.Options) {

        return - this.B + this.RaizCuadr(); 

    } else {

       return - this.B - this.RaizCuadr(); 
        
    }

   }

   private RaizCuadr(){

       return Math.sqrt(this.potenciadeB() - this.suma4AC()); //Formula 'Math.'sqrt' para sacar Raiz cuadrada
   }
   
   //Respuestas de las operaciones(Suma )

    Imprime(){

       return this.dividendo() / this.multipli2A();
   }
}
// Imprime la Suma 

const resultado = new formucalcu() //True = Suma y False = Resta
   resultado.setA(2);
   resultado.setB(10);
   resultado.setC(-8);
   console.log(resultado.Imprime());

   
/* Or
Console.log(resultado.ImprimeSuma());
*/


 



