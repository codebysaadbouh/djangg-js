/**
 * Une fonction n'est pas loin d'un variable ou nous pouvons regrouper un ensemble d'instructions... , de conditions
 */

//Déclarations d'une fonction

function hello() {
    console.log('Hello World from function hello() !'); 
}

var myfunction = function name(params) {
    console.log('My function');
}

hello();

var  mutliplication_table = (table_of, ind = 10) => {
    var table_of = parseInt(table_of);
    if (isNaN(table_of)) {
        throw  new Error("L'élement reçu en paramètre n'est pas un number !");
    } else {
        let index = 0; 
        while(index <= ind){
            console.log(`${table_of} x ${index}  = ${index*table_of}`);
            index++;
        }
    }
}

try {
    mutliplication_table("fdcd"); 
} catch (e) {
    console.log(e.message);
}