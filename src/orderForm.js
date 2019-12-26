//All declarations
var prod = document.getElementById('product'),
    //Prods
    farmProd = document.getElementById('farm-div'),
    seedProd = document.getElementById('seed-div'),
    fertProd = document.getElementById('fert-div'),
    //Farm
    farmSelect = document.getElementById('farmSelect'),
    farmSize = document.getElementById('prod-size'),
    

    //Seeds
    seedSize = document.getElementById('seed-size'),
    seedSelect = document.getElementById('seedSelect'),
    vegSeeds = document.getElementById('veg-seeds'),
    fruSeeds = document.getElementById('fru-seeds'),
    graSeeds = document.getElementById('gra-seeds'),

    //Fertlizer
    fertSelect = document.getElementById('fertSelect'),
    fertSize = document.getElementById('fert-size'),

    //Consultation
    dateTime = document.getElementById('date-div'),

    //Btn
    Btn = document.getElementById('btn'),
    
    //Quantity
    quantDiv = document.getElementById('quant-div');
    

//Initializine displays to none

//Farm
farmProd.style.display = 'none';
farmSize.style.display = 'none';

//Seeds
seedProd.style.display = 'none';
vegSeeds.style.display = 'none';
fruSeeds.style.display = 'none';
graSeeds.style.display = 'none';
seedSize.style.display = 'none';

//Fertlizer
fertProd.style.display = 'none';
fertSize.style.display = 'none';

//Consultation
dateTime.style.display = 'none';

//Quantity
quantDiv.style.display = 'none';

function valueEval(){
//Farm Product

    if (prod.value != '1') {
        farmProd.style.display = 'none';
        //Check For Seeds
        quantDiv.style.display = 'none';
        farmSize.style.display = 'none';
    }
    else {
        farmProd.style.display = 'block';
    }

//Seed Prod

    if (prod.value != '2') {
        seedProd.style.display = 'none';
        //Check For Seeds
        vegSeeds.style.display = 'none';
        fruSeeds.style.display = 'none';
        graSeeds.style.display = 'none';
        seedSize.style.display = 'none';
        quantDiv.style.display = 'none';
    }
    else {
        seedProd.style.display = 'block';
    }

//Fertlizer Prod

    if (prod.value != '3') {
        fertProd.style.display = 'none';
        //Fert Check
        fertSize.style.display = 'none';
        quantDiv.style.display = 'none';
    }
    else {
        fertProd.style.display = 'block';
    }

//Farm Consultation

    if (prod.value != '4') {
        dateTime.style.display = 'none';
        Btn.innerHTML = 'Place Order';

    }
    else {
        quantDiv.style.display = 'none';
        dateTime.style.display = 'block';
        Btn.innerHTML = 'Schedule';
    }

    if (prod.value = '0'){
        quantDiv.style.display = 'none';
    }
}

//Beginning Of Farm Product Eval
function farmProdEval(){
    if (farmSelect.value != '0'){
        farmSize.style.display = 'block';
    }
    else{
        farmSize.style.display = 'none';
    }

}


//Seed Evaluation
function seedEval(){

//Vegetable Seeds
    if (seedSelect.value != '1') {
        vegSeeds.style.display = 'none';
    }
    else {
        vegSeeds.style.display = 'block';
    }

//Fruit Seeds

    if (seedSelect.value != '2') {
        fruSeeds.style.display = 'none';
    }
    else {
        fruSeeds.style.display = 'block';
    }

//Grain Seeds

    if (seedSelect.value != '3') {
        graSeeds.style.display = 'none';
    }
    else {
        graSeeds.style.display = 'block';
    }

}

//Seed Size Showing
function seedSizeShow(){
    var vegSelect = document.getElementById('vegSelect');
    var fruSelect = document.getElementById('fruSelect');
    var graSelect = document.getElementById('graSelect');

    if (vegSelect.value != '0' || fruSelect.value != '0' || graSelect.value != '0') {
        seedSize.style.display = 'block';
    }
    else {
        seedSize.style.display = 'none';
    }     
}

function fertSizeShow(){
    if (fertSelect.value != '0'){
        fertSize.style.display = 'block';
    }
    else{
        fertSize.style.display = 'none';
    }
}


//Quantity Showing

function quantityShow(){
    var fsSelect = document.getElementById('fsSelect');
    var sSelect = document.getElementById('sSelect');
    var fSelect = document.getElementById('fSelect');
    if (fsSelect.value != '0' || sSelect.value != '0' || fSelect.value != '0' ){
        quantDiv.style.display = 'block';
    }
    else{
        quantDiv.style.display = 'none';
    }
} 

