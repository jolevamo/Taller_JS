/*var n1 = prompt("Digite el número 1: ");
var n2 = prompt("Digite el número 2: ");
function Calcular_Num (Num1, NUm2){
    return  parseInt(Num1) + parseInt(NUm2);
}
//Se captura la función anterior en una variable
var resultado = Calcular_Num (n1,n2);
function MostrarResult (){
    alert(resultado);
}
MostrarResult();
//Ejercicio 1:
var Ancho = prompt("Ingrese el ancho del rectangulo: ");
var Alto = prompt("Ingrese el alto del rectangulo: ");
function CalSuperf (Ancho, Alto){
    return alert("La superficie del rectangulo es: " + (Ancho * Alto));
}
CalSuperf(Ancho,Alto);
//Ejercicio 2:
var Km = prompt("Ingrese la velocidad en kilometros * hora: ");
function velocidad (Km){
    return alert("Esto equivale a "+(Km*1000)+" metros/hora y a "+(0.621371*Km+" millas * hora"));
}
velocidad(Km);
//Ejercicio 3:
var radio = prompt("Ingrese el radio de la circuferencia: ");
function Area (radio){ 
    return alert("El perimetro es:"+(Math.PI * radio)+" y el área es: "+(Math.pow (radio,2)));
}
Area(radio);
 //Ejercicio 4:
 var Num = prompt("Ingrese el número que desea elevar al cubo: ");
 function CubicarNum (n){
     return alert("El cubo del número "+Num + " es: "+(n * n * n));
 }
CubicarNum(Num);
/Ejericio 5
function Decir_Nombre (nombre){
    nombre || (nombre="User");
    if(typeof nombre === "string"){
        alert("Mi nombre es: "+nombre);
    }
    else{
        alert("El nombre no es valido");
    }
}
Decir_Nombre (1);
//Ejercicio 6:
var num1 = prompt("Ingrese el número 1: ");
var Num2 = prompt("Ingrese el número 2: ");
function Operaciones_Basicas (n1, n2){
    return alert("Las resultados de los números ingresados son: suma: "+(parseInt (n1)+(parseInt (n2))+" resta: "+(n1-n2)+" multiplicación: "+(n1*n2)+" división: "+(n1/n2)));
}
Operaciones_Basicas (num1, Num2);*/
//Ejercicio 7:
TipTEmp = prompt("Ingrese el tipo de temperatura a registrar, °Celsius (1) o Fahrenheit (2): ");
var GradosFar;
var GradosCel;
var TempConvert;
function MsjCaptTemp (n){
    if(n==1){
        Msj = alert("Ingrese los ° Celsius que desea convertir: ");
    }
    else{
          Msj = alert("Ingrese los ° Fahrenheit que desea convertir: ");
        }
        return Msj;
}
function CapTemp (){
    Temperatura = prompt(MsjCaptTemp(TipTEmp));
    return Temperatura;
}
CapTemp();
function ConvertTemp (){
    if(TipTEmp==1){
        TempConvert = (Temperatura * 1.8) + 32;
    }
    else {
        TempConvert = (Temperatura -32)/1.8
    }
    return TempConvert;
}
function ImprimeTemp (){
    if(TipTEmp==1){
        msj1 = alert (Temperatura+"°C equivale a "+ConvertTemp()+" °F");
    }
    else{
        msj1 =alert (Temperatura+"°F equivale a "+ConvertTemp()+" °C"); 
    }
}
ImprimeTemp();
function ImprMsj (){
    if (TipTEmp==1){
        if (TempConvert<32){
            msj2 = alert ("Nos congelamos");
        }
        else if (TempConvert<=50){
            msj2 = alert ("Esta haciendo frio");
        }
        else if (TempConvert<=77){
            msj2 = alert ("Está templado el dia");
        }
        else{
            msj2 = alert ("Tiene fiebre o es el apocalipsis");
        }
    }
    else if(TempConvert<5){
        msj2 = alert ("Nos congelamos");
    }
    else if(TempConvert<15){
        msj2 = alert ("Esta haciendo frio");   
    }
    else if(TempConvert<25){
        msj2 = alert ("Está templado el dia");
    }
    else{
        msj2 = alert ("Tiene fiebre o es el apocalipsis"); 
    }
    return msj2;
}/*
//Ejercicio 8:
ImprMsj();
var est = prompt("Ingrese su estatura en mts: ");
var peso = prompt("Ingrese su peso en kg: ");
function IMC (n1, n2){
    return n1 / (n2*n2)
}
function ImpMsjIMC (){
    if(IMC(peso,est)<18.5){
        msj = alert("Su IBC es "+IMC(peso,est)+" por lo tanto, tiene un bajo peso, se recomienda visitar al nutricionista");
    }
    else if (IMC(peso,est)<24.5){
        msj = alert("Su IBC es "+IMC(peso,est)+" por lo tanto, tiene un peso normal");
    }
    else if (IMC(peso,est)<29.9){
        msj = alert("Su IBC es "+IMC(peso,est)+" por lo tanto, tiene sobrepeso");
    }
    else{
        msj = alert("Su IBC es "+IMC(peso,est)+" por lo tanto, está obeso, se recomienda visitar al nutricionista");
    }
    return msj;
}
ImpMsjIMC();
//Ejercicio 9:
function CaptNomb (){
    var nombre = prompt("Ingrese el nombre: ");
    return nombre;
}
function ImpMsjBvd (){
    msj = alert ("Bienvenido "+CaptNomb());
    return msj;
}
ImpMsjBvd();
//Ejercicio 10:
 var precio = prompt("Digite el precio: ");
 var cantidad = prompt("Digite cantidad");

 function CalcularPrecio (n1,n2){
     return n1 * n2;
 }
 var precioParcial = CalcularPrecio(precio,cantidad);

 function CalcularIva (SinIva){
    return SinIva * 1.19;
 }
 CalcularIva(precioParcial);

 function Mostrar_Calc (){
     alert("El precio total es: "+CalcularIva(precioParcial));
 }
 Mostrar_Calc();
 //Ejercicio 11
 function fecha() {
    var dia = prompt("Ingrese el dia actual");
    var mes = prompt("Ingrese el mes actual");
    var anio = prompt("Ingrese el año actual");
    return {dia,mes,anio}
}

function calcularDias(fechaAct){
	const fechainicial = new Date(`${fechaAct.anio}-${fechaA.mes}-${fechaA.dia}`);
	
	const fechafin = new Date('2022-12-31');
	const diasdif= fechafin.getTime()-fechainicial.getTime();
	const contdias = Math.round(diasdif/(1000*60*60*24));
	return contdias;
}

const fechaA = fecha();

const diasR = calcularDias(fechaA);

function calcularSemana(diasRestantes){
	return (diasRestantes / 7).toFixed(2);
}


alert(`Dias restantes del año es: ${diasR}
Semanas restantes del año  es de: ${calcularSemana(diasR)}`); 


function calcularTotal(numProducto, nombre, valor) {
    return "<p># de producto:"+ numProducto+ " </p>"+
         "<p> nombre del producto:"+ nombre+ " </p>"+
         "<p> precio del producto:"+ valor+ " </p>";
   
}
 //Ejercicio 12
 
 n = prompt("Ingrese la cantidad de productos a facturar: ")
 var Vect = [n];
 function Capt_Product (){
    for(a=0;a<n;a++){
       Nombre_Product = prompt("Ingrese el nombre del producto "+(a+1)+": ");
       Val_Product = prompt("Ingrese el valor del producto"+(a+1)+": ");
       Vect[a]= "Producto "+(a+1)+": "+Nombre_Product+" <br>"+"Valor product"+(a+1)+": "+Val_Product
    }
 }
 Capt_Product();
 function Impri_Produ (){
     for(a=0;a<n;a++){
        document.write("<p>"+Vect[a]+"</p>");
     }
 }
Impri_Produ();*/
