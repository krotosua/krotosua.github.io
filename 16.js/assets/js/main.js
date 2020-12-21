let dlina = +prompt('Введите сторону квадрата в см');
let P = dlina*4;
alert(`Перимметр квадрата: ${P}`);

let a = +prompt('Введите ребро куба в см');
let V = a**3;
let S = a**2;
alert(`Объем куба: ${V};
Площадь боковой стороны: ${S} `);


let R = +prompt(`Введите радиус круга в см`);
let Pk = 2*R*Math.PI;
let Sk = Math.PI*R**2;
alert(`Длина окружности: ${Pk}
Площадь круга: ${Sk} `);



let mv = +prompt(`Введите массу в кг`);
let Vm = +prompt(`Объем вещества в м^3`);
let Ro = mv/Vm;
alert(`Перимметр плотность: ${Ro}`);


let man= +prompt(`Введите кол-во человек живущих`);
let state= +prompt(`Введите площадь государства в км^2`);
let Density= man/state;
alert(`Плотность населения:: ${Density}`);

let A= +prompt('Введите катет треугольника A в см');
let B= +prompt('Введите катет треугольника B в см');
let C=Math.sqrt(A**2 + B**2 );
alert(`Гипотенуза  ${C}`);

let Ar = +prompt('Введите a');
let y= ((Ar**2)+10)/Math.sqrt((Ar**2) + 1);
alert(`Y =  ${y}`);