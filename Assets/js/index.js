/* 
//Question 6 — Accès à une plateforme
let isConnected;
let isActive;
let isAdmin;
isConnected = false;
isActive = false;
isAdmin = true;

if((isActive === true && isActive == true) || (isAdmin === true)){
    alert(" l'accès doit être autorisé.");
}else{
    alert(" accès non autorisé.");
}
*/
/*

//Question 7 — Éligibilité à un crédit
let age;
let salary;
let hasStableJob = true;
let yearsAsClient;

age = parseInt(prompt("Quel est votre Age: "));
salary = parseInt(prompt("Quel est le montant de votre salaire: "));
yearsAsClient = parseInt(prompt("Depuis combien d'année etez-vous client: "));

if( (age >= 21 && salary >= 200000 && hasStableJob) || (yearsAsClient >= 5) ){
     alert(" Éligible au crédit");
}else{
    alert(" Non éligible au crédit ")
}*/

/*
//Question 8 — Système de sécurité

let isNewAccount = false;
let unknownDevice;
let attempts;
let isBlocked = false;
unknownDevice=prompt("D'ou provient la connexion ?: ");
attempts = prompt("Nombre de tentative de connexion: ");

if((isNewAccount && unknownDevice === "appareil inconnu") || (attempts >=5) || (isBlocked) ){
    alert(" la connexion est considérée comme suspecte ");
}else{
    alert("la connexion n'est pas considérée comme suspecte ");
}
*/

//Question 9 — Validation d'un formulaire

let username;
let email;
let password;
let age;
username = prompt("Nom d'utilisateur:");
email = prompt("Votre mail: ");
password = prompt("Mot de passe :");
age = parseInt(prompt("Votre age:"));

if(username.length < 3){
    console.log("Le nom d'utlisateur doit contenir aumoins 3 caractères");
}else if(email.length <= 0){
    console.log("Votre email est vide");
}else if(password.length < 8){
    console.log("Le mot de passe doit contenir aumoins 8 caractères");
}else if(age < 13){
    console.log("l'âge doit être  supérieur ou égal à 13 ans.")

}else{
    alert("Le formulaire est valide");
}
   
