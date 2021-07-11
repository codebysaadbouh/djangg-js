/**
 * Les tests conditionnels permettent de tester des condtions et de réaliser des actions en fonction des résultats obtenus après test
 * 
 * Nous avons :
 * if(condition){...instructions}
 */


// if
if (age<=18) {
    console.log("Je suis majeur! (mon age viens de script_var)");
}else{
    console.log("Je suis mineur !"); 
}

//switch -> case
switch (age) {
    case 26:
        console.log('Tu as 26 ans Monsieur !')
        break;
    case 30: 
        console.log('Vous avez 30ans Monsieur');
        break; 
    default:
        console.log('Je ne sais pas alors votre age !')
        break;
}