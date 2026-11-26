let precios = [18000, 25000, 13000];

// Recorrer con for
for (let i = 0; i < precios.length; i++) {
    console.log('Precio:', precios[i]);
}

// Recorrer con for...of
let vehiculos = ['Corolla', 'Sportage', 'Onix'];
for (let vehiculo of vehiculos) {
    console.log('Vehículo:', vehiculo);
}

// Sumar todos los precios
let total = 0;
for (let i = 0; i < precios.length; i++) {
    total = total + precios[i];
}
console.log('Total:', total);
