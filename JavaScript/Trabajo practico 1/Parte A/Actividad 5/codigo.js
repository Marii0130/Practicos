var numero = Math.floor((Math.random() * 1000000) + 1);
var cont = 0;
do{
    do{
        if(cont == 0 ){
            var num1= prompt("Ingrese un número para adivinar el número secreto:")   
        }else{
            var num1= prompt("Intente de nuevo:")
        }
        if(isNaN(num1)){
            alert("Sólo se permiten números")
        }else{
            num2 = parseInt(num1)
        }
    } while (isNaN(num1))
    if(numero > num2){
        alert("El número secreto es mayor");
    }else if(numero < num2){
        alert("El número secreto es menor")
    }
    cont++
} while (numero != num2)
alert("¡FELICIDADES! "+ numero +" es el número secreto. Logró acertarlo en "+cont+" intentos")