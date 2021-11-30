/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.*/

// Lista nomi
const names = ['Aldo', 'Giovanni', 'Giacomo', 'Christian', 'Roberto', 'Anna', 'Roberta', 'Paola'];

// Lista cognomi
const surnames = ['Baglio', 'Storti', 'Poretti', 'De Sica', 'Armani', 'Pannocchia', 'Bauli', 'Circo'];

const list = [''];

// Cerco elemento random in array
for (let index = 0; index < names.length; index++) {
let randomName = names[Math.floor(Math.random() * names.length)];

let randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

let randGuest = randomName + ` ` + randomSurname;

console.log(randGuest);
list.push(randGuest);
}


/*function mescola(array) {

    //Ci prendiamo la lunghezza dell'array e partiamo dal fondo!
    var currentIndex = array.length, temporaryValue, randomIndex;

    // Finché ci sono elementi da mescolare, iteriamo l'array
    while (0 !== currentIndex) {

        //Prendiamo un indice a caso dell'array, purché sia compreso tra 0 e la lunghezza dell'array
        randomIndex = Math.floor(Math.random() * currentIndex);

        //Riduciamo di un'unità l'indice corrente
        currentIndex -= 1;

        // Una volta che abbiamo preso l'indice casuale, invertiamo l'elemento che stiamo analizzando alla posizione corrente (currentIndex) con quello alla posizione presa casualmente (randomIndex)

        //Variabile temporanea
        temporaryValue = array[currentIndex];
        //Eseguiamo lo scambio
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //Torniamo l'array mescolato a fine ciclo
    return array;
}

let name = mescola(names);
let surname = mescola(surnames);

console.log(name);
console.log(surname);

console.log(names.concat(surnames));
document.writeln(names.concat(surnames));*/
