import { calcularIVA,Producto } from "./05-Destructurado-funciones";

const carrito : Producto[] = [
    {
        desc : 'Telefono1',
        precio : 1212
    },
    {
        desc : 'Telefono2',
        precio : 12293
    },


];

const [total,iva] = calcularIVA(carrito);

console.log("Total: " + total);
console.log("Total + iva: " + iva);