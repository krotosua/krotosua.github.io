//
let steps = 100;

for(let i = 0; i <= steps; i++){
    console.log(`Step ${i}`);
}

//

let step = 57;

for(let i = 21; i <= step; i++){
    console.log(`Step ${i}`);
}

//

let s = 100;

for(let i = 0; i <= s; i++){
    if(i%2 ==0 ){
        console.log(`Step ${i}`);
    }
   
}

//
let sum = 0;


for(let i = 1; i <= 100; i++){
 
    sum+=i;

}
console.log(`Summa:${sum}`);

//

let k = 1000;

nextTime:
for(let i = 3; i <= k; i++){
  
    for(let j = 2; j < i; j++){
        if(i%j == 0) continue nextTime;
    }
   console.log(`${i}`)
}