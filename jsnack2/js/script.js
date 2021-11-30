/*Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

const numbInt = [4, 65, 9, 3, 33, 12, 84, 66, 5, 18];

let sum = 0;
for (let i = 1; i < numbInt.length; i += 2) {
    sum += numbInt[i];
}
console.log(sum);