

function fibo(n){
    /*
    if (n==0) return 0;
    if (n==1) or (n==2); return 1;
    console.log(n)
    if (n>=3); return (fibo(n-1) + fibo(n-2));
    */

    // Usando el código de esta página https://www.youtube.com/watch?v=_d4HoUAYwQs&ab_channel=LoveforCode
    var n1 = 1;
    var n2 = 2;
    var r = 0;
    for (var i=0; i<n; i++){
        r=n1+n2;
        n1=n2;
        n2=r;
        console.log(r)
    }
}

//Escriba aqui el numero de la secuencia que quiere
//var n = 10;
var n = parceInt(prompt("escribe algo: "));
console.log(fibo(n));
console.log("hola")

