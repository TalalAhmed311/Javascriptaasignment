
var elem=document.getElementById("inputfield");


function getNum(input){

    
    
    
    if(input=="clear"){

        elem.value="";
    
    }else{
        
    
        elem.value+=input;   


    }
    
    
}

function calculate(){

    elem.value=eval(elem.value);
    
}