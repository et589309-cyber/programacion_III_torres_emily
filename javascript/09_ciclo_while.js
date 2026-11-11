console.log("Abriendo portal de la nave...");
let portal = 1;
while (portal <= 5) {
    console.log("Abriendo Portal " + portal + ".");
    portal++;
}
console.log("Todos los portales han sido abiertos.");
console.log("Cuenta regresiva despegue de la nave de Morty");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue");
    i--;
}
console.log("Recargar la pista de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando.... nivel de energia: " + energia + "%");
}
console.log("Pistola de portales recargada despues de " + totalRecargas + " recargas.");
console.log("Consumo de Combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje realizado, combustible restante: " + combustible + "%");
    if (combustible < 50) {
        console.log("Advertencia: Nivel de combustible bajo, nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para otro viaje");
console.log("total de viajes realizados: " + viajes);

console.log("Activar portales de dimensiones peligrosas con Do...While");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimension peligrosa, nivel de energia: " + energiaPortal + "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente energia para activar otro portal de dimension peligrosa");

console.log("Comprar una pistola de portales para rick");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + "$");
} while (ahorro < meta);
console.log("Rick ha comprado la pistola de portales despues de " + semanas + " semanas.");

let cristales = [ 5, 10, 15, 20, 25, 60, 30, 15, 40, 45,50];
let objetivo = 150;
let energiatotal = 0;
let indice = 0;
while ( indice < cristales.length){
    let cristal = cristales[indice];
    energiatotal += cristal;
    if (cristal > 20) {
        console.log("Cristal" + cristal );
        continue;
    }
    energiatotal += cristal;
    console.log("Cristal" + cristal + " agregado, energia total: " + energiatotal);
    if (energiatotal >= objetivo) {
        console.log("Objetivo de energia alcanzada con cristales.");
        break;
    }

}
console.log("Energia total acumulada: " + energiatotal);