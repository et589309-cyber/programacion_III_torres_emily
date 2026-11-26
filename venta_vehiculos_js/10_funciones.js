// Función sin parámetros
function saludar() {
    console.log('Bienvenido a la concesionaria');
}
saludar();

// Función con parámetros
function mostrarVehiculo(marca, modelo) {
    console.log('Vehículo:', marca, modelo);
}
mostrarVehiculo('Toyota', 'Corolla');
mostrarVehiculo('Kia', 'Sportage');

// Función que devuelve un valor
function sumarPrecios(precio1, precio2) {
    return precio1 + precio2;
}
let total = sumarPrecios(18000, 25000);
console.log('Total:', total);
