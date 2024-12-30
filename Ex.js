function verifier(event){
    event.preventDefault();
    var radio = document.querySelectorAll('input[type="radio"');
    var verif = false;
    for (var i=0;i<radio.length;i++){
        if(radio[i].checked){
            verif = true;
            break;
        }
    }
    if(!verif){
        alert('please select your s');
        return false;
    }

    var nom = document.getElementById('A').value;
    if (nom === "" || nom.length < 3 || !isNaN(nom)) {
    alert('Veuillez entrer un nom valide avec au moins 3 caractères.');
    //nom.value = "";
    return false;
    }

    var prenom = document.getElementById('B').value;
    if (prenom === "" || prenom.length < 3 || !isNaN(prenom)) {
    alert('Veuillez entrer un Prenom valide avec au moins 3 caractères.');
    //prenom.value = "";
    return false;
    }

    var age = document.getElementById('C').value;
    if (age == "" || age <5 || age > 100) {
    alert("Veuillez entrer l'age entre 5 ans et 100!");
    //age.value = "";
    return false;
    }

    var pseudo = document.getElementById('D').value;
    if (pseudo === "" || pseudo.length < 4 || !isNaN(nom)) {
    alert('Veuillez entrer un pseudo valide avec au moins 4 caractères.');
    //pseudo.value = "";
    return false;
    }

    var motpass = document.getElementById('E').value;
    if (motpass === "" || motpass.length < 6 ) {
    alert('Veuillez entrer un motpass valide avec au moins 6 caractères.');
    //motpass.value = "";
    return false;
    }

    var motpassconf = document.getElementById('F').value;
    if ( !motpassconf == motpass || motpassconf =="" ) {
    alert('le Mot de passe de confirmation est incorrect !');
    //motpassconf.value = "";
    return false;
    }

    var select = document.getElementById('S').children;
    var verifop = false;
    for(var i=0;i<select.length;i++){
        if(select[i].selected && !select[0].selected){
            verifop = true;
            break;
        }
    }
    if(!verifop){
        alert('please select a pays');
        return false;
    }

    









    


}