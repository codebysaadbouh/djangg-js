/**
 * Ils existent diff types de boucles qui nous permettent d'éviter de faire par exemples des opérations répétitives ou des tests
 * 
 */

// Boucle For(){}

for (let index = 0 /* 1 - Initilisation */; index < 13/* 2 - Test de continuité */; index++ /* 4 - Incrémentation */) {
    console.log('2 x '+index+" = "+index*2); 
}
 
//Boucle while(){} -> Tant que 

var index = 0; 

while (index <= 12) {
    console.log('4 x '+index+" = "+index*2); 
    index++; 
}

// Boucle do{}while() : la diff avec la precedente est que cette boucle va s'effectuer au moins une fois quelque soit la condition 

var index = 0; 
do {
    console.log('6 x '+index+" = "+index*2);
    index++
} while (index <= 12);