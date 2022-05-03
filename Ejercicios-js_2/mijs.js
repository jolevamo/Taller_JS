/*
Calcular el salario de un empleado que gana 2.500.000
Descontando el 8% de salud y el 10% de pensión.

//Ejecicio 1:
var salario = prompt ("Digita tu salario: ");
var salud = salario * 8/100;
var pension = salario * 10/100;
var Sueldo_A_Pagar = salario - salud - pension;

alert("Su sueldo es de: "+salario+
            "\n , descuento de salud: "+salud+
            "\n , descuento de pensión: "+pension+
            "\n , el sueldo a pagar es de: "+Sueldo_A_Pagar);

//Ejercicio 2:
var Base = prompt ("Digita la base: ");
var Altura = prompt ("Digita la altura: ");
var Area = (Base*Altura)/2;
alert("El área es: "+Area);
//Ejercicio 3:
var Num1 = prompt ("Digita el número 1: ");
var Num2 = prompt ("Digita el número 2: ");
var Sum = parseInt(Num1) + parseInt(Num2);
var Rest = Num1 - Num2;
var Mult = Num1 * Num2;
var Div = Num1 / Num2;
alert("La suma de los números es : "+Sum);
alert("La resta de los números es : "+Rest);
alert("La multiplicación de los números es : "+Mult);
alert("La división de los números es : "+Div);
//Ejercicio 4:
var ValorHoraOrd = prompt ("Ingrese el valor de la hora ordinaria: ");
var horaOrd = prompt ("Ingrese la cantidad de horas ordinarias: ");
var horaExt = prompt ("Ingrese la cantidad de horas extras: ");
var ValorHoraExt = ValorHoraOrd * 1.25;
var TotalHrOrd = ValorHoraOrd * horaOrd;
var TotalHrExt = ValorHoraExt * horaExt;
var Total = TotalHrOrd + TotalHrExt;
alert("El valor de las horas ordinarias es : "+TotalHrOrd);
alert("El valor de las horas extras es : "+TotalHrExt);
alert("El valor total devengado es : "+Total);
//Ejercicio 5:
var CantProdcut = prompt("Ingrese la cantidad de productos: ");
var PrecProdcut = prompt("Ingrese el precio del producto: ");
var Subtotal = PrecProdcut * CantProdcut;
var IVA = Subtotal * 0.19;
var Total = parseInt(Subtotal) + parseInt(IVA);
alert("El valor del producto sin impuesto es: "+Subtotal);
alert("El valor del impuesto es: "+IVA);
alert("El total a pagar es: "+Total);
//Ejercicio 6:
var alhombres = prompt("ingrese el numero de hombres");
var almujeres = prompt("Digitar el numero de mujeres ");
var total = parseInt (alhombres)+ parseInt ( almujeres);
var porchombres =parseInt  (alhombres * 100 / total);
var porcmujeres =parseInt  (almujeres * 100 / total);

alert("El porcentaje de alumnos hombres es de: " + porchombres+"%");
alert("El porcentaje de alumnos mujeres es de: " + porcmujeres+"%");
//Ejercicio 7:
var nota1 = prompt("ingrese la primera nota: ");
var nota2 = prompt("ingrese la segunda nota: ");
var nota3 = prompt("ingrese la tercera nota: ");
var nota4 = prompt("ingrese la cuarta nota: ");
var nota5 = prompt("ingrese la quita nota: ");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;
alert ("El promedio de las notas del alumno es de: " + promedio);
//Ejercicio 8
var Num, Tip1Num, Tip2Num;
Num = prompt("Digite el número a anlizar: ");
if (Num%2==0)
{
    alert("El número "+Num+" es par");
}
else
{
    alert("El número "+Num+" es impar");
}
if(Num>0)
{
    alert("El número "+Num+" es positivo");
}
else
{
    alert("El número "+Num+" es negativo");
}
//Ejercicio 9
var Num1, Num2;
Num1 = prompt("Digite el número uno: ");
Num2 = prompt("Digite el número dos: ");
if (Num1>Num2)
{
    alert("El número "+Num1+" es mayor que el número "+Num2);
}
else if (Num2>Num1)
{
    alert("El número "+Num2+" es mayor que el número "+Num1);
}
else
{
    alert("El número "+Num2+" es igual al número "+Num1);
}
//Ejercicio 10
var  dia = prompt("Digite un número del 1 al 7: ");
switch (parseInt(dia)){
    case 1: prompt("Lúnes");
    break;
    case 2: prompt("Martes");
    break;
    case 3: prompt("Miércoles");
    break;
    case 4: prompt("Jueves");
    break;
    case 5: prompt("Viernes");
    break;
    case 6: prompt("Sábado");
    break;
    case 7: prompt("Domingo");
    break;
    default: prompt("Digite un número del 1 al 7");
    break;
}
//Ejercicio 11
var edad = prompt ("Digite su edad: ");
if (edad<=18) {
    alert("Usted es menor de edad");
}
else if (edad<=28) {
        alert("Usted es adulto adolescente");
}
else if (edad<=49){
        alert("Usted es adulto");
}
else {
alert("Usted es adulto mayor");
}
//Ejercicio 11 con switch
var edad = prompt ("Digite su edad: ");
switch(true){
    case edad < 18: alert("Usted es menor de edad");
    break;
    case edad <= 28: alert("Usted es adulto adolescente");
    break;
    case edad <= 49: alert("Usted es adulto");
    break;
    default: alert("Usted es adulto mayor");
}
//Ejercicio 12
var pro1 = prompt("Ingrese el valor del primer producto: ");
var pro2 = prompt("Ingrese el valor del segundo producto: ");
var pro3 = prompt("Ingrese el valor del tercer producto: ");
var pago = prompt("como deseas pagar el porducto, Efectivo, Credito o por Cupon: ")

if (pago == "Efectivo"){
    valortota = parseInt(pro1) + parseInt(pro2) + parseInt(pro3);
    alert ("El precio del producto es igual a: "+valortota);
}else if(pago == "Credito"){
    valortota = parseInt(pro1) + parseInt(pro2) + parseInt(pro3);
    descuento = valortota * 0.05;
    valortota = valortota + descuento;
    alert ("El precio del producto es igual a: "+valortota);
}else{
    valortota = parseInt(pro1) + parseInt(pro2) + parseInt(pro3);
    descuento = valortota * 0.03;
    valortota = valortota - descuento;
    alert ("El precio del producto es igual a: "+valortota);
}
//Ejercicio 13
var Prom = 0;
var Not1 = prompt("Ingrese la Nota 1: ");
var Not2 = prompt("Ingrese la Nota 2: ");
var Not3 = prompt("Ingrese la Nota 3: ");
Prom = (parseInt(Not1) + parseInt(Not2) + parseInt(Not3)) / 3;
if(Prom<=10){
    alert("El nivel del alumno es malo");
}
else if (Prom<=13){
    alert("El nivel del alumno es regular");
}
else if (Prom<=16){
    alert("El nivel del alumno es bueno");
}
else {
    alert("El nivel del alumno es muy bueno");
}
//Ejercicio 14
var AñoNac = prompt("Ingrese el año de su nacimiento: ");
var MesNac = prompt("Ingrese el mes de su nacimiento: ");
var DiaNac = prompt("Ingrese el día de su nacimiento: ");
DiasNac = (parseInt(AñoNac)*360) + (parseInt(MesNac*30)) + parseInt(DiaNac);
var AñoCorte = prompt("Ingrese el año en el que quiere cálcular su edad: ");
var MesCorte = prompt("Ingrese el mes en el que quiere cálcular su edad: ");
var DiaCorte = prompt("Ingrese el día en el que quiere cálcular su edad: ");
DiasCorte = (parseInt(AñoCorte)*360) + (parseInt(MesCorte*30)) + parseInt(DiaCorte);
EdadDias = parseInt (DiasCorte) - parseInt (DiasNac);
EdadAños = EdadDias / 360;
if (EdadDias%360==0){
    EdadMeses = 0;
}
else {
    EdadMeses = (EdadDias - (EdadAños * 360)) / 30;
}
if(EdadDias%360==0){
    EdadFinalDias = 0;
}
else if (((EdadDias - (EdadAños * 360)) / 30)%30==0){
    EdadFinalDias = 0;
}
else{
    EdadFinalDias = EdadDias - (EdadAños*360)-(EdadMeses*30);
}
alert("Su edad en años es: "+EdadAños+", su edad en meses es: "+EdadMeses+" y su edad en días es: "+EdadFinalDias);
//Ejercicio 15
var Edad = prompt("Digite su edad: ");
var Dias = prompt("Digite los días de Hospitalización: ");
switch (true){
    case Edad <= 10:
        if(Dias<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (Dias<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (Dias<=7){
            CostoDía = 25000;
            Recargo = 0.05;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case Edad <= 17:
        if(Dias<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (Dias<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (Dias<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case Edad <= 49:
        if(Dias<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (Dias<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (Dias<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.15;  
        }
        break;
        default :
        if(Dias<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (Dias<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (Dias<=7){
            CostoDía = 25000;
            Recargo = 0.15;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.20;  
        }
}
Subt = (Dias * CostoDía);
ValorRec = Subt * Recargo;
Costo = Subt + ValorRec;
alert ("Los días de hospitalización del paciente son: "+Dias+", el costo por día es: "+CostoDía+", el valor del recargo es: "+ValorRec+" y el valor a pagar es: "+Costo);*/














