/**Déclaration d'une variable :
 * 
 * var nom_de_la_variable; 
 * 
 * -> Quand aucune valeur ne lui a été affecté il sera de type undefined
 * -> On fait un "typeOf age;" pour connaitre le type
 * age = 19; 
 * typeof age; => "undefined"
 */


console.log("LES VARIABLES")
console.log("----------------------------------------------")

//string
var fullname
fullname = "Cheikh Saad Bouh SOW"

//number
var age; 
age = 26;
console.log(age);
console.log(typeof age);

//float
var price;
price = 45.45*Math.PI;
console.log(price); 
console.log(typeof price);

// boolean
var is_verified; 
is_verified = false; 
console.log(is_verified); 
console.log(typeof is_verified); 

//Object
var person_1; 
person_1 = {fullname: fullname, age: age}; 
console.log(person_1.fullnam);
console.log(person_1.age);  
console.log(person_1); 
console.log(typeof person_1); 

/**Déclaration d'une constante :
 * 
 * constante nom_de_la_constante = value; 
 * 
 * La particularité est qu'avec une constante on ne peut pas modifier la valeur
 */

const TVA = 18.5;
console.log(TVA);


console.log("----------------------------------------------")