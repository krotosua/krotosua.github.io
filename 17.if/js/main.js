let m = +prompt("Веддите вашу массу в кг");
let h = +prompt("Веддите ваш рост в см")/100;
let index = m/(h**2);

if(index <= 16){
    alert(`Индекс тела: ${index}
    Выраженный дефицит массы тела`);
}else if( index<18.5){
    alert(`Индекс тела: ${index}
    Недостаточная (дефицит) масса тела`);
}else if(index<25){
    alert(`Индекс тела: ${index}
    Норма`);
}else if(index<30){
    alert(`Индекс тела: ${index}
    Избыточная масса тела (предожирение)`);
}else if(index<35){
    alert(`Индекс тела: ${index}
    Ожирение`);
}else if(index<40){
    alert(`Индекс тела: ${index}
    Ожирение резкое`);
}else if(index>40){
    alert(`Индекс тела: ${index}
    Очень резкое ожирение`);
}

let year = +prompt("Веддите год");

if (year % 100 == 0){
    if (year % 400 == 0){alert ('Год высокосный');

    }else{alert ('Год не высокосный')}

}else if (year % 4 == 0){alert ('Год высокосный');

}else {alert ('Год не высокосный');
}