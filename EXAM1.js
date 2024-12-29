function validerForm(){
    var inputs = document.querySelectorAll('#inp');
    for(var i=0;i<inputs.length;i++){
        if(inputs[i].value == ""){
            alert("Please saisie tout les champs");
            return false;
        }
    }
    var checkbox = document.querySelectorAll('#check');
    for(var i=0;i<checkbox.length;i++){
        if(!checkbox[0].checked && !checkbox[1].checked && !checkbox[2].checked){
            alert("please check un centre d'interet");
            return false;
        }
    }
    var motpass1 = document.querySelectorAll('input[type=password]')[0];
    var motpass2 = document.querySelectorAll('input[type=password]')[1];
    if(motpass1.value !== motpass2.value){
        alert('le code pas identique');
        return false;
    }
}
function apercu(){
    var login = document.querySelector('.a').value;
    var ville = document.querySelector('select').value;
    var centres = document.querySelector('input[type="checkbox"]:checked').nextElementSibling.innerHTML;
    var cartebancaire = document.querySelector('.carte').value;
    var Especes = document.querySelector('.especes').value;
    var cheque = document.querySelector('.cheque').value;
    var div = document.querySelector('div');

    div.insertAdjacentHTML("beforeend","<table><tr><td>"+login+"</td><td>"+ville+"</td><td>"+centres+"</td></tr><tr><td>"+cartebancaire+"</td><td>"+Especes+"</td><td>"+cheque+"</td></tr></table>");
}