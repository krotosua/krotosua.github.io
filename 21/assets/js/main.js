function calc(){
    let h = heightInput.value;
    let m = weightInput.value;


    if(h>4){
         h=h/100;
    }
    
    let index = m/(h**2)
    let res;

    if(index <= 16){
    res = `Выраженный дефицит массы тела`;
    }else if( index<18.5){
        res =`Недостаточная (дефицит) масса тела`;
    }else if(index<25){
        res = ` Норма`;
    }else if(index<30){
        res =` Избыточная масса тела (предожирение)`;
    }else if(index<35){
        res = `Ожирение`;
    }else if(index<40){
        res = `Ожирение резкое`;
    }else if(index>40){
        res = `Очень резкое ожирение`;
    }

    resultPlace.innerHTML = index;
    resPlace.innerHTML = res;
    }