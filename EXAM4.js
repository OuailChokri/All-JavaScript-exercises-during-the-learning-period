function Verifier(){
    var name = document.getElementById('A');
    var mail = document.getElementById('B');
    var tel = document.getElementById('C');
    
    if(name.value==""|| mail.value=="" || tel.value==""){
        alert("Please remplire tous les champs");
        return false;
    }
    VerifTel()
    createfrom()
    videchamps()
    RemplireTypes()
}

function VerifTel(){
    var tel = document.getElementById('C');
    if(tel.value.length !== 10){
        alert("le numero incorrect");
        return false;
    }
    
}

function createfrom(){
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    var h3 = document.createElement('h3');
    var form = document.createElement('form');
    var name = document.createElement('input');
    var mail = document.createElement('input');
    var tel = document.createElement('input');
    var select = document.createElement('select');
    var op1 = document.createElement('option');
    var op2 = document.createElement('option');
    var op3 = document.createElement('option');
    var btn = document.createElement('input');


    btn.type = "button";
    btn.value = "Envoyer";

    h1.innerHTML = "Vous enregistrer au cours";
    h3.innerHTML = "Inscivez-vous ici";

    op1.innerHTML = "Type de cours ";
    op2.innerHTML = "cours courts ";
    op3.innerHTML = "cours facture ";

    name.placeholder = "Nom Complete";
    mail.placeholder = "Email";
    tel.placeholder = "Num telephone";

    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(h3);
    div.appendChild(form);
    form.appendChild(name);
    form.appendChild(mail);
    form.appendChild(tel);
    form.appendChild(select);
    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    form.appendChild(btn);

    div.style.padding = "100px";
    div.style.backgroundColor = "purple";
    div.style.marginLeft = "30%";
    div.style.marginRight = "30%";
    div.style.marginTop = "7%";

}

function videchamps(){
    var inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach(function(input){
        input.value = "";
    });
}


  
  function RemplireTypes(){
    var donnees = `{
                  "type":[
                    {"nom":"cours court","prix":0},
                    {"nom":"cours facture","prix":10}
                        ]}`
    var json = JSON.parse(donnees);
    var select = document.querySelector('select');
    for(var i=0;i<json.type.length;i++){
      select.insertAdjacentHTML('beforeend',"<option>"+json.type[i].nom+"</option>")
    }
  }
  
  
  
  

