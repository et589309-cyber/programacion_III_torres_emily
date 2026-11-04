console.log('operadores aritmeticos');
let a=10;
let b=5;

console.log('suma', a+b);
console.log('resta', a-b);
console.log('multiplicacion', a*b);
console.log('division', a/b);
console.log('modulo', a%b);

console.log('operadores de comparacion');
console.log('a es igual a b', a==b);
console.log('a es diferente a b', a!=b);
console.log('a es mayor que b', a>b);
console.log('a es menor que b', a<b);
console.log('a es mayor o igual que b', a>=b);
console.log('a es menor o igual que b', a<=b);

console.log('operadores logicos');
let x = true;
let y = false;

console.log('x AND y', x && y);
console.log('x OR y', x || y);
console.log('NOT x', !x);
console.log('NOT y', !y);

console.log('operadores de asignacion');
let c = 10;
console.log('valor inicial de c:', c);
c += 5; // c = c + 5
console.log('despues de c += 5:', c);
c -= 3; // c = c - 3
console.log('despues de c -= 3:', c);
c *= 2; // c = c * 2
console.log('despues de c *= 2:', c);
c /= 4; // c = c / 4
console.log('despues de c /= 4:', c);
c %= 3; // c = c % 3
console.log('despues de c %= 3:', c);
console.log('operadores de incremento y decremento');
let d = 5;
console.log('valor inicial de d:', d);
d++; // incremento
console.log('despues de d++:', d);
d--; // decremento
console.log('despues de d--:', d);


console.log('operadores de concatenacion');
let nombre = 'Rick';
let apellido = 'Sanchez';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombre completo:', nombreCompleto);

console.log('operadores de comparacion estricta');
let e = 10;
let f = '10';

console.log('e es estrictamente igual a f (===):', e === f);
console.log('e es estrictamente diferente a f (!==):', e !== f);
console.log('operadores ternarios');
let edad = 20;
let mensaje = (edad >= 18) ? 'Sí, es mayor de edad' : 'No, es menor de edad';
console.log(mensaje);


console.log('tabla de multiplicar del 5');
console.log('1 x ${5} =', 1 * 5);
console.log('2 x ${5} =', 2 * 5);
console.log('3 x ${5} =', 3 * 5);
console.log('4 x ${5} =', 4 * 5);
console.log('5 x ${5} =', 5 * 5);
console.log('6 x ${5} =', 6 * 5);
console.log('7 x ${5} =', 7 * 5);
console.log('8 x ${5} =', 8 * 5);
console.log('9 x ${5} =', 9 * 5);
console.log('10 x ${5} =', 10 * 5);


console.log('tabla de division del 5');
console.log('5 ÷ ${5} =', 5 / 5);
console.log('10 ÷ ${5} =', 10 / 5);
console.log('15 ÷ ${5} =', 15 / 5);
console.log('20 ÷ ${5} =', 20 / 5);
console.log('25 ÷ ${5} =', 25 / 5);
console.log('30 ÷ ${5} =', 30 / 5);
console.log('35 ÷ ${5} =', 35 / 5);
console.log('40 ÷ ${5} =', 40 / 5);
console.log('45 ÷ ${5} =', 45 / 5);
console.log('50 ÷ ${5} =', 50 / 5);