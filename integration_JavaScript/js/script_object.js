/**
 * Un object est un espace de stockage dans lequel nous pouvons mettre une ou plusieurs informations
 * 
 */


// Déclaration d'un object

var person = {}; 

person = {
    firstname : "Cheikh Saad Bouh",
    lastname : 'SOW',
    age : "26",
    fonction : "Informaticien", 
    nationalité : "Sénégalaise",
    fullname : function () {
        return this.firstname+" "+this.lastname; 
    }, 
    isVacciné : false, 
    getAge : function () {
        return this.age;
    }, 
    setAge : function (newAge) {
        this.age = newAge
    }, 
    address: {
        rue : '8 Simone SIGNORET',
        ville : 'Bois d\'Arcy',
        cp : "76390", 
        country : 'Fr'
    }

}

person.setAge(45);
console.log(person.age);
// Destructuration d'un objet
var {firstname, lastname, getAge, address} = person; 
console.log(`${firstname} ${lastname} a ${getAge()} ans et son adresse est le : ${address.rue}, ${address.ville}, ${address.country}`);


// Structuration d'un objet

var vitesse = 350; 
var marque = "Mercedes"; 
var model = "GLE Coupée"; 
var realize_date = "2021"

var mycar = {
    marque,
    model,
    vitesse, 
    realize_date,
}

var mycar_2 = {
    ...mycar,
    marque : 'posrche',
    model : 'Panamera Turbo S', 
    vitesse : '280',
    realize_date : 2018 
}

console.log(mycar);

var carDescription = (params) => {
    console.log(`La voiture est une ${params.marque} model ${params.model} sortie en ${params.realize_date}  et pouvant atteindre une vitesse de ${params.vitesse} km/h.`)
};

carDescription(mycar);
carDescription(mycar_2); 