let vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    precio: 18500
};

console.log(vehiculo);
console.log('Marca:', vehiculo.marca);
console.log('Modelo:', vehiculo.modelo);

// Cambiar una propiedad
vehiculo.precio = 17000;
console.log('Nuevo precio:', vehiculo.precio);

// Agregar una propiedad
vehiculo.color = 'Blanco';
console.log(vehiculo);
