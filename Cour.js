/**date = new Date ();
document.writeln("Nous somme le :",date);**/

/**var x = 15
if (x<12){
    document.write("Le Nombre est inferieur A 12!");
}else{
    document.write("Le Nombre est superieur A 12!");
}**/

/**var i;
for (i=0;i<10;i++){
    document.writeln(i);
}**/

/**document.getElementById("a").innerHTML = "JAAAJ<br>JAJA";*/

/** let Chaine1 = prompt("Donner une Chaine : ");
let Chaine2 = prompt("Donner une Chaine : ");
if (Chaine1 == Chaine2){
    alert("Chaines idnetique");
}else if(Chaine1 != Chaine2){
    alert("Chaine Non identique");
}*/



/** toLowerCase() On va return l'ecriture miniscule est N'est import pas la maniere d'ecriture(Majiscule Ou Miniscule)  **/
/** Ch1.value >>>>>>> si faux en va return la champs vide **/
/** focus() En va rturn a ecrire dans la champs */
/**function Teaster(){
let Ch1 = document.getElementById("J");
if (Ch1.value.toLowerCase() == "javascript"){   
    alert("Bravo");
}else {
    alert("Attention! Ecrire 'javascript'");
    Ch1.value = ""; 
    Ch1.focus();  
}
}*/


/**function Afficher(){
    var N = document.getElementById("N").value;
    if (!isNaN(N)){
        alert(Math.sqrt(Math.abs(N)));
    } else {
        alert("C'est pas un nombre");
    }
}*/


/**function generer()
{
    var CMP = 0;
    var nombre = Math.floor(Math.random()*10);
    //alert(nombre);
    var essai = prompt("Devenir le nombre :");
cmp=1;    
    while(essai!=nombre)
    {
        if (essai<nombre){
    essai = prompt("un peu plus grand:");
cmp++;
    }
        else{
    essai = prompt("un peu plus petit:");
cmp++; 
    } 
    }
        alert("Bravo!\nLe Nombre d'essais :"+cmp);
    }
    

generer();*/

/**function AfficherNbreJourMois(){
    var dat = new Date(document.getElementById("d").value);
    var mois = dat.getMonth();
    if (mois%2==0 ||mois ==7) alert("31");
    else
    if(mois==1)alert("Fev 28 ou 29");
    else alert("30");
}*/


//  || = ou
//  && = and
//  %2 = pair  >>>>> Exemple: if(mois%2==0)
/**function joursDuMois(){
let dateChoisie = new Date(document.getElementById('d').value);
let mois = dateChoisie.getMonth();
//alert("Le mois : "+Mois);
//{0,2,4,6,7,9,11 : 31}
//{3,10,8,5 : 30}
//{1 : 28-29}
if(mois==1){
    alert("Fevrier : 28 ou 29")
}
else if((mois%2==0 && mois<=6)||(mois%2!=0 && mois>6)){
    alert("Nombre des Jours : 31")
}
else{
    alert("Nombre des Jours : 30")
}   
} Khatae ljawaba dans fichier Date */ 


//1.document 
//2.getElementById("")
//3.getElementByName("")
//4.getElementByTagName("")
//5.querySelector("")
//6.querySelectorAll("")
//7.document.forms
//8.document.images
//9.getAttribute("")
//10.Attributes()[0]



/*let a = 10;
let b = 5;
console.log(a+=b);
//console.log(a-=b);
//console.log(a*=b);
//console.log(a/=b);
let c = "Hello"
let d = " World!"
console.log(c+=d);*/

//parentNode
//childNode
//previousSibling
//nextSibling































