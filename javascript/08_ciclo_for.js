console.log("Ciclo for");

for (let i = 1; i <= 5; i++) {
    console.log("Iteracion numero: " + i);
}

console.log("Cuenta regresiva despegue de la nave de Morty");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Despegue en curso!");
    } else {
        console.log("Faltan " + i + " segundos para el despegue");
    }
}


console.log("Nivel de energia de Rick");
let energia = 50;
for (let i = 0; i <= 100; i+=10) {
    if (energia >= i) {
        console.log("Nivel de energia: " + i + "%");
    }
}

const comsumoPorViaje = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += comsumoPorViaje;
    console.log("Viaje numero: " + viaje);
    console.log("Total consumido hasta ahora: " + totalConsumido + " unidades de combustible");
}
console.log("Total consumido: " + totalConsumido + " unidades de combustible");
console.log("Promedio de los cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let cristales = dia *5+5;
    totalCristales += cristales;
    console.log("Dia " + dia + ": " + cristales + " cristales recolectados");
}
console.log("Total de cristales recolectados:" + totalCristales);
console.log ("Promedio de cristales recolectados por dia: " + (totalCristales / dias).toFixed(2));

console.log("Dimensiones Peligrosas");
let seguras = 0;
let peligrosas = 0;
for (let dimension = 1; dimension <= 10; dimension++) {
    if (dimension % 2 === 0) {
        console.log("Dimension " + dimension + " es peligrosa");
        peligrosas++;
    } else {
        console.log("Dimension " + dimension + " es segura");
        seguras++;
    }
}
console.log("Total de dimensiones seguras: " + seguras);
console.log("Total de dimensiones peligrosas: " + peligrosas);

console.log("Recoleccion de cristales de morty");
let cristales = [35,60,45,80, 70,90,55]
let total = 0;
let viajesExitosos = 0;
for (let i = 0; i < cristales.length; i++) {
    total += cristales[i];
    console.log("Viaje " + (i + 1) + ": " + cristales[i] + " cristales recolectados");
    if (cristales[i] >= 50) {
        viajesExitosos++;
    } else {
        console.log("Viaje " + (i + 1) + " no fue exitoso");
    }
}
console.log("Total de cristales recolectados: " + total);
console.log("Numero de viajes exitosos: " + viajesExitosos);
for (let cristal of cristales) {
    if (cristal < 50) {
        console.log("Se recolectaron menos de 50 cristales en un viaje: " + cristal);
    }
}
console.log("Recorrer personajes con for... of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (const personaje of personajes) {
    console.log("Personaje: " + personaje);
}

let nave = {
    nombre: "Nave de Rick",
    combustible: 100,
    velocidad: 500,
    tripulantes: ["Rick", "Morty", "Summer"]
};
console.log("Recorrer propiedades de un objeto con for... in");
for (const propiedad in nave) {
    console.log(propiedad + ": " + nave[propiedad]);
    if (propiedad === "tripulantes") {
        console.log("Tripulantes de la nave:");
        for (const tripulante of nave[propiedad]) {
            console.log("- " + tripulante);
        }
    }
}

let misiones = [
    { nombre: "Mision 1", cristales:90, meta:100, personaje: "Rick"},
    { nombre: "Mision 2", cristales:80, meta:100, personaje: "Morty"},
    { nombre: "Mision 3", cristales:70, meta:100, personaje: "Summer"}
];
let existosas = 0;
for (let mision of misiones) {
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + " completado por " + mision.personaje + " con un " + porcentaje.toFixed(2) + "% de cristales recolectados");
    if (porcentaje >= 90) {
        existosas++;
    } else {
        console.log(mision.nombre + " no fue exitosa");
    }
}
console.log("Total de misiones exitosas: " + existosas);

console.log("Uso de break y continue en un ciclo for");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Se ha alcanzado el numero 5, se detiene el ciclo");
        break;
    }
    if (i % 2 === 0) {
        console.log(i + " es un numero par, se omite");
        continue;
    }
    console.log(i + " es un numero impar");
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se ha alcanzado el numero 7, se detiene el ciclo");
        break;
    }
    if (i % 2=== 0) {
        console.log(i + " es un numero par, se omite");
        continue;
    }
    console.log(i + " es un numero impar");
}