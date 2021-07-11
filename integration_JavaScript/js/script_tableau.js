/**
 * Un tableau est une variable qui peut contenir plusieurs valeurs
 */

// Déclaration d'un tableau


var names  = ['Cheikh', 'Ahmet', 'Aminata', 'Penda']; 
console.log(names);
names[4] = "Makhtar"
console.log(names);
console.log(names[4]);

// Qlqs fonctions natives

// Tableau.push("element_a_ajouter") -> Retourne la taille de notre tableau
names.push("Lamine");
console.log(names)

// tableau.length -> retourne la taille du tableau
console.log(names.length);

// tableau.unshift("element_a_ajouter_au_debut") -> ajoute un element au tableau mais au début
names.unshift("Marie"); 
console.log(names);

// tableau.pop() -> supprimer le dernier element d'un tableay
names.pop(); 
console.log(names);  

// name.shift() -> supprime le premier element d'un tableau
names.shift(); 
console.log(names);

// Transformer un tableau en chaine de caractère avec join()

// tablaau.join(separateur)

var noms = names.join(' - ');
console.log(noms);


// partir d'une chaine de caractère vers un tableau

var tableau_noms = noms.split(" - "); 
console.log(tableau_noms);


// Parcourir un tableau

for (let index = 0; index < tableau_noms.length; index++) {
    console.log(tableau_noms[index]);
}

/** Parcourir un tableau : Bonne pratique */
/**
 
for (let value of tableau_noms) {
    console.log(value);
}
* 
 */


var persons = [
    {
        firstname : 'Mamadou',
        lastname : 'SOW',
        age : 55
    }, 
    {
        firstname : 'Jeanne',
        lastname : 'D\'arque',
        age : 25
    }
]

for (let index = 0; index < persons.length; index++) {
    const element_persons = persons[index];
    console.log(element_persons.firstname);
}

persons.forEach(person =>{
    console.log(`Hello ${person.firstname} vous avez ${person.age} ans opérateur ternair`); 
}); 