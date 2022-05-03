/*//Número consecutivo
var n = prompt("Digite un número: ");
var con = 1;
while (con<= parseInt(n)){
    document.write("<p>"+ con +"</p>");
    con = con + 1;
}
//Tabla de multiplicar
var n = prompt("Digite un número: ");
var con = 1;
while (con<= 30){
    document.write("<p> "+ con +" x "+n+"= "+ (con*n)+"</p>");
    con = con + 1;
}
//Hasta que yo coloque si
var n = prompt("Digite un número: ");
var con = 1;
var acumulador = 0;
while (n !== "s"){
    acumulador = n;
    n = prompt("Digite un número: ");
    document.write("<p> Los números que digitó son: "+acumulador+"</p>")
    con = con + 1;
}
n = prompt("Digite un número: ");
con = 1;
while(con <= n){
    var cono = 1;
    while(cono <= 3){
        document.write("<span>"+cono+"</span>");
        cono = cono + 1; 
    }
    document.write("<br>");
    con++;
}
//                                                                   TALLER CICLOS
//Ejercicio 1/*
n = prompt("Ingrese el número límite para realizar la suma de los números naturales: ");
for (i=1;i<=n;i++){
    Sum = i + 1;
}
alert("La suma de los primeros numeros naturales con límite en el número "+n+" es: "+Sum);
//Ejercicio 2
n = prompt("Ingrese la cantidad de notas a ingresar: ");
Sum = 0;
for (i=1;i<=n;i++){
    Notas = prompt("Digite la nota "+i+" :");
    Sum = Sum + parseInt(Notas);
}
prom = Sum / n;
if (prom>=3){
    alert("Su nota final es: "+prom+" por tanto, aprueba el curso");
} 
else{
    alert("Su nota final es: "+prom+" por tanto, reprueba el curso");
}
//Ejercicio 3
i = 1;
Sum = 0;    
Num = prompt("Ingrese el número "+i);
while (Num != "FIN"){   
    document.write("<P>"+Num+"</P>");
    document.write("<br>");
    Sum = Sum +parseInt(Num);
    i = i + 1;
    Num = prompt("Ingrese el número "+i);
}
document.write("<br>");
document.write("<span>"+"La suma de los números ingresados es: "+Sum+"</span>");
//Ejercicio 4
n = prompt("Ingrese el número que desea multiplicar: ");
for (i = 1; i <= 30; i++){
    document.write("<p>"+n+" x "+i+" = "+(n*i)+"</p>");
    document.write("<br>");
}
//Ejercicio 5 con For
n = prompt("Ingrese el número que desea multiplicar: ");
for (i = 10; i >= 1;){
    document.write("<p>"+n+" x "+i+" = "+(n*i)+"</p>");
    document.write("<br>");
    i = i - 1;
}       
//Ejercicio 6
n = prompt ("Contar intervalos de a: ");
Contador = 0;
for (i= parseInt(n);i<=30;){
document.write("<P>"+i+"</P>");
document.write("<br>"); 
Contador = Contador + 1;
i = i + parseInt(n);
}
document.write("<br>");
document.write("<span>"+"La cantidad de intervalos son: "+Contador+"</span>");
//Ejercicio 7
n = prompt ("Contar intervalos de a: ");
Contador = 0;
for (i= 30 ;i>=1;){
document.write("<P>"+i+"</P>");
document.write("<br>"); 
Contador = Contador + 1;
i = i - parseInt(n);
}
document.write("<br>");
document.write("<span>"+"La cantidad de intervalos son: "+Contador+"</span>");
//Ejercicio 8
n = prompt("Digite un número: ");
for (a=1;a<=n;a++){
    for(b=1;b<=a;b++){
        document.write("<span>"+"*"+"</span>");
    }
    document.write("<br>"); 
}
//Ejercicio 9
n = prompt("Digite un número: ");
for (a=n;a>=1;a--){
    for(b=a;b>=1;b--){
        document.write("<span>"+"*"+"</span>");
    }
    document.write("<br>"); 
}
//Ejercicio 10
n = prompt("Digite el número de facturas a registrar: ")
Total = 0;
for (a=1;a<=n;a++){
    CantProduc = prompt("Cuantos productos va a comprar el cliente: "+a+": ");
    document.write("<p>"+"Cliente "+a+" :"+"</p>");
    document.write("<p>"+"Número de productos cliente "+a+" : "+CantProduc+"</p>");
    Subt = 0;
    for(b=1;b<=CantProduc;b++){
        let PrecioUNit = prompt("Ingrese el valor del producto :"+b);
        document.write("<p>"+"Valor producto "+b+": $"+PrecioUNit+"</p>");
        Subt = Subt + parseInt(PrecioUNit);
    }
    Total = Total + Subt;
    document.write("<p>"+"Total compra"+": $"+Subt+"</p>");  
    document.write("<br>"); 
}
document.write("<p>"+"Total ventas del día"+": "+n+"</p>"); 
document.write("<p>"+"Total general del día"+": $"+Total+"</p>");
//Ejercicio 11
for ( i= 1; i <= 3; i++){
    document.write("<br>"); 
    promedio=0, suma=0;
    nombre = prompt("Ingrese el nombre del estudiante: " +""+i);
    materia = prompt("ingrese el nombre de la materia: ")+"";

    document.write("<p>"+"Nombre del estudiante "+i+":"+" "+""+nombre+"</p>");
    document.write("<p>"+"Matería: "+""+""+materia+"</p>");

    for( n= 1; n <= 3; n++){
        notas = Number (prompt ("Ingrese la nota"+n));
        suma += notas;
        document.write("<p>"+"Notas: "+""+n+ ": "+notas+"</p>");
    }
    promedio = (suma / 3).toFixed(1);
    document.write("<p>"+"Promedio: "+promedio+"</p>");

}/*
//Ejercicio 12
var body = document.getElementsByTagName("body")[0];
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");

       
        var fila1 = document.createElement("tr");
        for (var f1 = 1; f1 <= 5; f1++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f1);
            celda.appendChild(textoCelda);
            fila1.appendChild(celda);
        }
        tblBody.appendChild(fila1);
        var fila2 = document.createElement("tr");
        for (var f2 = 6; f2 <= 10; f2++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f2);
            celda.appendChild(textoCelda);
            fila2.appendChild(celda);
        }
        tblBody.appendChild(fila2);
        var fila3 = document.createElement("tr");
        for (var f3 = 11; f3 <= 15; f3++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(f3);
            celda.appendChild(textoCelda);
            fila3.appendChild(celda);
        }
        tblBody.appendChild(fila3);

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", 2);
        tabla.setAttribute("id", "tabla");
//Ejercicio 13
var may = 0;
var men = 0;
for (i=1;i<=10;i++){
    edad = prompt("Digitela edad del estudiante "+i+": ");
    if(edad>=18){
        may = may + 1;
    }
    else{
        men = men + 1;
    }
}
alert("Los alumnos mayores de edad son: "+may);
alert("Los alumnos menores de edad son: "+men);*/
//Ejercicio 14
var i = 1;
numAlea = Math.floor(Math.random()*20);
console.log(numAlea);
while(i<=3){
    num = prompt("Ingrese un número: ");
    if(num==numAlea){
        alert("Felicitaciones has acertado");
        i = 4;
    }
    else{
        alert("Lo siento, por esta vez no has acertado, te quedan "+(3-i)+" intentos")
        i = i + 1;
    }
 
}/*
//Ejercicio 12
var fila = 3;
var colum = 5;
var cont = 1;
var num = 1;
document.write("<table border = '1'>");
while(cont <= fila){
    document.write("<tr>");
    var cont1 = 1;
    while(cont1<=colum){

        document.write("<td>"+(num++)+"</td>");
        cont1++;
    }
    document.write("</tr>");
    cont++;
}
document.write("</table>");*/