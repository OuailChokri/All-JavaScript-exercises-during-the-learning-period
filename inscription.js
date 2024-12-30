function verif() {
    var champs = document.getElementsByClassName('A');
    for (var i=0;i<champs.length;i++){
        if(champs[i].value == ""){
            alert('Please remplire tous');
            return false;
        }
    }
    var motpass = document.getElementById('m');
    if(motpass.value.length > 8){
        motpass.value = "";
        alert('code plus petit ou egal 8');
        return false;
    }
    var genre = document.querySelectorAll('#r');
    var genreSelected = false;
    for (var i=0;i<genre.length;i++){
        if(genre[i].checked){
            genreSelected = true;
            break;
        }
    }
    if(!genreSelected){
        alert('please select a genre !!');
        return false;
    }
    var pays = document.getElementById('s').children;
    var paysselected = false;
    for(var i =0;i<pays.length;i++){
        if(!pays[0].selected ){
            paysselected = true;
            break;
        }
    }
    if(!paysselected){
        alert('please select a pays ');
        return false;
    }
   

    var chekbox = document.querySelectorAll('#c');
    var check = false;
    for (var i=0;i<chekbox.length;i++){
        if(chekbox[i].checked){
            check = true;
            break;
        }
        
    }
    if(!check){
        alert('please select Une formation pour valider!');
        return false;
    }

    var file = document.getElementById('f');
    var filecorrect = false;
    if (file.value){
        var extention = file.value.split('.').pop();
        if(extention == 'png' || extention == 'jpg' || extention == 'jpeg' || extention == 'gif'){
            filecorrect = true;
        } 
    }
    if (!filecorrect){
        alert('please envoyer une image !');
        return false;
    }
    else{
        alert('bravo!');
        return true;
    }
    
   }
   
   var textareas = document.getElementsByTagName("textarea");
   for (var i = 0; i < textareas.length; i++) {
     textareas[i].addEventListener("blur", function() {
       this.style.borderColor = "white";
     });
     }
      /*var champs = document.getElementsByClassName('A');
    for (var i=0;i<champs.length;i++){
        if(champs[i].value == ""){
            alert('Please Ecriver en tous le Champs');
            return false;
        }
    }
    var password = document.getElementById('A');
    if (password.value.length <8){
        alert('please entrer un password plus grand de 8');
        return false;
    }else if( password.value.length >20){
        alert('please entrer un password plus petite de 20');
        return false;
    }*/
    
    
  
  
  
   
