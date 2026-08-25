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
/*
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
*/
/*
//Question 10 — Livraison
let amount=parseInt(prompt("Montant des courses:"));
let isPremium = false;
let zone=prompt("Lieu de la livraison:");
let coutLivraison ;
if(zone === "hors-zone"){
    alert("hors zone livraion impossible")
}else if( amount > 50000 || isPremium){
    coutLivraison = 0;
    alert("Le prix de la livraison est: " + coutLivraison +" FCFA");
}else{
     coutLivraison = 2500;
    alert("Le prix de la livraison est: " + coutLivraison +" FCFA");
}
*/
/*
//Question 11 — Résultat d'un étudiant
let moyenneGenerale = parseFloat(prompt("Moyenne Générale:"));
let moyenneMath = parseFloat(prompt("Moyenne en Math:"));
let moyenneInfo = parseFloat(prompt("Moyenne en Info:"));
let absences = parseInt(prompt("Nombre d'abscence:"));

if(absences <= 20){
    if(moyenneGenerale >= 10 && moyenneMath >= 8 && moyenneInfo >= 10){
        alert("VALIDE")
    }else if(moyenneGenerale >= 9 && moyenneGenerale < 10){
        alert("RATTRAPAGE");
    }else{
        alert("ECHEC");
    }
}else{
    alert("EXCLU");
}
*/
/*
//Question 12 — Système de péage
let montant_final;
let reduc;
let vehicule = prompt("Type du véhicule");
let vehiculeElectrique = confirm("Est ce que le véhicule est électrique:");
let vehiculeUrgence = confirm("Est ce que c'est un véhicule d'urgence:");
//let vehiculeInconnu = confirm("Est ce que le véhicule est inconnu:");
if(vehicule === "Moto"){
    if(vehiculeElectrique){
        reduc = 500*0.02;
        montant_final = 500-reduc;
        alert("le montant final a payer est :" + montant_final);

    }else if(vehiculeUrgence){
        montant_final = 0;
        alert("le montant final a payer est :" + montant_final);
    }else{
        montant_final = 500;
        alert("le montant final a payer est :" + montant_final);
    }
}else if(vehicule === "Voiture"){ 
    if(vehiculeElectrique){
        reduc = 1000*0.02;
        montant_final = 1000-reduc;
        alert("le montant final a payer est :" + montant_final);

    }else if(vehiculeUrgence){
        montant_final = 0;
        alert("le montant final a payer est :" + montant_final);
    }else{
        montant_final = 1000;
        alert("le montant final a payer est :" + montant_final);
    }
}else if(vehicule === "Camionnette"){ 
    if(vehiculeElectrique){
        reduc = 2000*0.02;
        montant_final = 2000-reduc;
        alert("le montant final a payer est :" + montant_final);

    }else if(vehiculeUrgence){
        montant_final = 0;
        alert("le montant final a payer est :" + montant_final);
    }else{
        montant_final = 2000;
        alert("le montant final a payer est :" + montant_final);
    }
}else if(vehicule === "Camion"){ 
    if(vehiculeElectrique){
        reduc = 5000*0.02;
        montant_final = 5000-reduc;
        alert("le montant final a payer est :" + montant_final);

    }else if(vehiculeUrgence){
        montant_final = 0;
        alert("le montant final a payer est :" + montant_final);
    }else{
        montant_final = 5000;
        alert("le montant final a payer est :" + montant_final);
    }
}else{
    alert("type de véhicule inconnu: véhicule invalide.");
}         
*/
/*
// Question 13 — Calculateur d'impôt
let revenu = parseInt(prompt("Revenu annuel:"));
let nbrePersonneCharge = parseInt(prompt("Nombre de personne a charge: "));
let taux;
let reducion;
let montantImpot = revenu*taux;
let revenuApresImpot= revenu-(montantImpot-reducion);

if(revenu >= 0 && revenu <= 1000000){
    if(nbrePersonneCharge >= 3){
        taux = 0;
        montantImpot = revenu*taux;
        reducion = montantImpot*0.05;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")
    }else{
        taux = 0;
        reducion = 0;
        montantImpot = revenu*taux;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")


    }
}else if(revenu >= 1000001 && revenu <= 3000000){
    if(nbrePersonneCharge >= 3){
        taux = 0.1;
        montantImpot = revenu*taux;
        reducion = montantImpot*0.05;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")
    }else{
        taux = 0.1;
        reducion = 0;
        montantImpot = revenu*taux;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")


    }
}else if(revenu >= 3000001 && revenu <= 6000000){
    if(nbrePersonneCharge >= 3){
        taux = 0.2;
        montantImpot = revenu*taux;
        reducion = montantImpot*0.05;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")
    }else{
        taux = 0.2;
        reducion = 0;
        montantImpot = revenu*taux;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")


    }
}else if(revenu >= 6000001){
    if(nbrePersonneCharge >= 3){
        taux = 0.3;
        montantImpot = revenu*taux;
        reducion = montantImpot*0.05;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")
    }else{
        taux = 0.3;
        reducion = 0;
        montantImpot = revenu*taux;
        revenuApresImpot= revenu-(montantImpot-reducion);
        console.log("Revenu: " + revenu + " FCFA " +
                    "\n Taux appliqué : " + taux + "%" +
                    "\n Réduction éventuelle : " + reducion + " FCFA " +
                    "\n Montant de l'impôt : " + montantImpot + " FCFA " +
                    "\n Revenu après impôt : " + revenuApresImpot + " FCFA ")


    }
}else{
    console.log("erreur sur les revenu");
}
*/
/*
//Question 14 — Système de réservation
let age = parseInt(prompt("Votre age ?"));
let chambreDisponible = confirm("Une chambre standard est-elle disponible ?");
let identiteValide = confirm("Possédez-vous une pièce d'identité valide ?");
let estVIP = confirm("Êtes-vous client VIP ?");
let chambreVIPDisponible = confirm("Une chambre VIP est-elle disponible ?");

if(age >= 18 && identiteValide){
    if(chambreDisponible || (estVIP && chambreVIPDisponible)){
        alert("réservation accepté")
    }else{
        alert("Plus de chambre disponible");
    }
}else{
    alert("age ou identité invalide");
}
*/
/*
//Question 15 — Feu de circulation intelligent
let couleur = prompt("Couleur du feu :");
let vitesse = parseInt(prompt("Vitesse actuelle (km/h) :"));
let distance = parseInt(prompt("Distance au feu (mètres) :"));

let action;

if (couleur === "vert") {
    if (vitesse <= 50) {
        action = "Continuer";
    } else {
        action = "Ralentir";
    }
} else if (couleur === "orange") {
    action = "Ralentir";
} else if (couleur === "rouge") {
    if (distance >= 20) {
        action = "S'arrêter";
    } else {
        action = "Arrêt d'urgence";
    }
} else {
    action = "Erreur : couleur inconnue";
}

console.log("Action à effectuer : " + action);
*/
/*
//Partie IV — Conditions avancées
//Question 16 — Opérateur ternaire
let age = parseInt(prompt("Votre age : "));
console.log(age);
//statut = ( age < 21)?"Mineur":"Majeur";
statut = (age < 21)?"Mineur":(age < 60 ?"Majeur":"Senior");
console.log("Vous etez : " + statut);
*/
/*
//Question 17 — Analyse de valeurs truthy/falsy
let valeurs = [0, 1, "", "Bonjour", null, undefined, false, true, [], {}, NaN];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    if (v) {
        console.log(v + " → truthy");
    } else {
        console.log(v + " → falsy");
    }
}
*/
/*
// Question 18 — Système de permissions
let role = prompt("Votre role:");
let isAuthenticated = confirm(" l'utilisateur est-il authentifié ?");
let isAccountActive = confirm(" le compte est-il activé ?");

if( isAuthenticated && isAccountActive ){
    if(role === "admin"){
        alert("accès complet");
    }else if(role === "professor"){
        alert("accès aux cours et aux étudiants");
    }else if(role === "student"){
        alert(" accès uniquement à ses cours");
    }else if( role === "guest"){
        alert("accès limité ");
    }else{
        alert("ERREUR SUR LE ROLE RESSAYER");
    }
}else{
    alert("accès refusé");
}
*/
//Question 19 — Détecteur de triangle

let a = parseFloat(prompt("valeur 1:"));
let b = parseFloat(prompt("valeur 2:"));
let c = parseFloat(prompt("valeur 3:"));

if( a > 0 && b > 0 && c > 0 && a+b){

    if(a + b > c || a + c > b || b + c > a){

        if( a === b && b === c ){

            alert("le triangle est équilatéral");

            }else if( a**2 === b**2 + c**2 || b**2 === a**2 + c**2 || c**2 === a**2 + b**2){

            alert("le triangle est rectangle");

            }else if( a === b || a === c || b === c ){

            alert("le triangle est isocèle");

        }else{

        alert(" le triangle est scalène");
        }

    }else{
        alert("ce n'est pas un triangle");
    }

}else{

    alert("Valeurs negative ou nulle");
}