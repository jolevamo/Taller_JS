/*function Decir_Nombre (nombre){
    nombre || (nombre="User");
    if(typeof nombre === "string"){
        alert("Mi nombre es: "+nombre);
    }
    else{
        alert("El nombre no es valido");
    }
}
Decir_Nombre ();
var n1 = prompt("Digite el número 1: ");
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
Area(radio);*/
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
