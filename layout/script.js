function calcularGorjeta(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0 ){
        alert("Por favor preencha os campos")
        return;
    }

    if(numOfPeople =="" | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    } else{
        document.getElementById('each').style.display = "block"
    }

    document.getElementById('container').style.display = "block";
}

function cadastrarUser (event){
    event.preventDefault();
    let logConfirm = document.getElementById('confirmacao').value;

    if(logConfirm == "nao"){
        document.getElementById('container').style.display = "none";
        document.getElementById('each').style.display = "none";
    } else{
        
    }

}


document.getElementById('tipsForm').addEventListener('submit' ,calcularGorjeta);