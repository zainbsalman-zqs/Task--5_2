const inter = document.querySelector('#inter');
const operater3 = document.querySelector('.operater3');
const operater2 = document.querySelector('.operator2');
const finishResult = document.querySelector('#finish-result');
const resultButton = document.querySelector('.result');
function calculate() {
    let calculate = "";
    if (operater2.value == "kilometer") {

        if( operater3.value == "hectometer"){
            calculate = Number(inter.value) * 10;
           
        }
        else  if( operater3.value == "decameter"){
            calculate = Number(inter.value) * 100;
           
        }
        else if( operater3.value == "meter"){
            calculate = Number(inter.value) * 1000;
            
        }
         else  if( operater3.value == "centimeter"){
            calculate = Number(inter.value) * 100000;
           
        }
        else if( operater3.value == "millimeter"){
            calculate = Number(inter.value) * 1000000;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }
   else if (operater2.value == "hectometer") {

        if( operater3.value == "kilometer"){
            calculate = Number(inter.value) / 10;
           
        }
        else  if( operater3.value == "decameter"){
            calculate = Number(inter.value) * 10;
           
        }
        else if( operater3.value == "meter"){
            calculate = Number(inter.value) * 100;
            
        }
         else  if( operater3.value == "centimeter"){
            calculate = Number(inter.value) * 10000;
           
        }
        else if( operater3.value == "millimeter"){
            calculate = Number(inter.value) * 100000;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }
    else if (operater2.value == "decameter") {

        if( operater3.value == "kilometer"){
            calculate = Number(inter.value) / 100;
           
        }
        else  if( operater3.value == "hectometer"){
            calculate = Number(inter.value) / 10;
           
        }
        else if( operater3.value == "meter"){
            calculate = Number(inter.value) * 10;
            
        }
         else  if( operater3.value == "centimeter"){
            calculate = Number(inter.value) * 1000;
           
        }
        else if( operater3.value == "millimeter"){
            calculate = Number(inter.value) * 10000;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }
    else if (operater2.value == "meter") {

        if( operater3.value == "kilometer"){
            calculate = Number(inter.value) / 1000;
           
        }
        else  if( operater3.value == "hectometer"){
            calculate = Number(inter.value) / 1000;
           
        }
        else if( operater3.value == "decameter"){
            calculate = Number(inter.value) / 10;
            
        }
         else  if( operater3.value == "centimeter"){
            calculate = Number(inter.value) * 100;
           
        }
        else if( operater3.value == "millimeter"){
            calculate = Number(inter.value) * 1000;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }
    else if (operater2.value == "centimeter") {

        if( operater3.value == "kilometer"){
            calculate = Number(inter.value) / 100000;
           
        }
        else  if( operater3.value == "hectometer"){
            calculate = Number(inter.value) / 10000;
           
        }
        else if( operater3.value == "decameter"){
            calculate = Number(inter.value) / 1000;
            
        }
         else  if( operater3.value == "meter"){
            calculate = Number(inter.value) / 100;
           
        }
        else if( operater3.value == "millimeter"){
            calculate = Number(inter.value) * 10;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }

    else if (operater2.value == "millimeter") {

        if( operater3.value == "kilometer"){
            calculate = Number(inter.value) / 1000000;
           
        }
        else  if( operater3.value == "hectometer"){
            calculate = Number(inter.value) / 100000;
           
        }
        else if( operater3.value == "decameter"){
            calculate = Number(inter.value) /10000;
            
        }
         else  if( operater3.value == "meter"){
            calculate = Number(inter.value) / 1000;
           
        }
        else if( operater3.value == "centimeter"){
            calculate = Number(inter.value) /10;
           
        }
       else{
        calculate = Number(inter.value) 
       }
    }

    finishResult.value = calculate;  
}

resultButton.addEventListener('click', calculate);



