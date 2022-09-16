
export interface Producto{
    desc : string,
    precio : number
}

const telefono : Producto = {
    desc : "IPHONE",
    precio : 35000
}

const tablet : Producto = {
    desc : "Ipad Air",
    precio : 20500
}

 function calcularIva(productos : Producto[]):number {

    let total = 0;
    productos.forEach((producto)=>{
        total += producto.precio;
    })

    return total * 0.16;
    
}

const articulo1 = [telefono,tablet];

const totIva = calcularIva(articulo1);

console.log('total iva: ' + totIva);

export function calcularIVA(productos : Producto[]):[number,number] {

    let total = 0;
    productos.forEach(({precio})=>{
        total += precio;
    })

    return [total,total * 0.16];
    
}
const articulos = [telefono,tablet];

const [total, iva] = calcularIVA(articulo1);

console.log('total: ' + total);
console.log('total con Iva: ' + iva);