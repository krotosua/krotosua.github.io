
 function to_c(){
    if(cBtn.classList.contains('selected')){
        return;
    }
    
    cBtn.classList.add('selected')
    
    if(fBtn.classList.contains('selected')){

        
        fBtn.classList.remove('selected')

        let tags = document.querySelectorAll('.temperature');

        console.log(tags);
        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t- 32)/1.8;
            t = Math.round(t);
            item.innerHTML = `${t}°C`
        }
    }else if(kBtn.classList.contains('selected')){
        kBtn.classList.remove('selected')
        let tags = document.querySelectorAll('.temperature');

        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t-273.15);
            t = Math.round(t);
            item.innerHTML = `${t}°C`;
        }

    }
}   

function to_f(){

   //Фарингейты  
    if(fBtn.classList.contains('selected')){
        return;
    }
    fBtn.classList.add('selected')
    
    if(cBtn.classList.contains('selected')){
        
    cBtn.classList.remove('selected')
    

    let tags = document.querySelectorAll('.temperature');

        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = t*1.8+32;
            t = Math.round(t);
            item.innerHTML = `${t}°F`;
        }
    }else {
        kBtn.classList.remove('selected');
        let tags = document.querySelectorAll('.temperature');

        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t - 273.15) * 1.8 + 32;
            t = Math.round(t);
            item.innerHTML = `${t}°F`
        }

    }
}
//Цельcии


function to_k(){
    if(kBtn.classList.contains('selected')){
        return;
    }
    kBtn.classList.add('selected');
    
    if(fBtn.classList.contains('selected')){

        
        fBtn.classList.remove('selected');

        let tags = document.querySelectorAll('.temperature');

        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t - 32)*(5/9)+273.15;
            t = Math.round(t);
            item.innerHTML = `${t}°K`;
        }
    }else {
        
        cBtn.classList.remove('selected')
        let tags = document.querySelectorAll('.temperature');

        for(let item of tags){
            let t = item.innerHTML;
            t = parseInt(t);
            t = (t+273.15);
            t = Math.round(t);
            item.innerHTML = `${t}°К`
        }

    }
}


