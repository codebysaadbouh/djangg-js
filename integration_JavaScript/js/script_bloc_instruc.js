/**
 * Un bloc d'instruction est un regroupement d'instructions dont le but est de facilité la comprehension du programme
 * 
 * La création d'un bloc se fait entre des accolades "{ }"
 * 
 * Quand on déclare des variables avec "var nom_variable;" sa valeur est manipulable à l'interieur comme à l'exterieur d'un bloc (Portée globale)
 * Contrairement à un variable que l'on déclare avec "let nom_variable;" qui n'est manipulable qu'à l'intérieur du bloc dans lequel on l'a déclarer (Portée locale)
 * 
 */

{
    console.log('{Blog 1}')
    var a = 20, b = 2500; 
    let delta = 3750; 
    console.log("a = "+a); 
    console.log("b = "+b); 
    console.log(delta); 
}

{
    console.log('{Blog 2}')
    a = 200;
    b = 47; 
    console.log("a = "+a);
    console.log("b = "+b);
    console.log(delta);   
}

{
    console.log('{Hors Blog 2}')
    console.log("a = "+a); 
    console.log("b = "+b);
    console.log(delta); 
}