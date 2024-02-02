//Solicitar al usuario la temperatura en grados Celsius y convertir grados Fahrenheit y Kelvin

//Inicializar variables
let temperatura = parseFloat(prompt("Ingrese la temperatura en grados Celsius"));
let temperaturaFahrenheit = temperatura * 9/5 + 32;
let temperaturaKelvin = temperatura+273.15;

//Verificar que es un número ingresado
if (temperatura==null || /\D/.test(temperatura) || temperatura== ""){
    Swal.fire({
        title: `Hola, ${temperatura} no es un número, ingresa un número válido`,
        icon: "error",
    })
}else{
    //Mostrar las temperaturas
    Swal.fire({
        title: `La temperatura en grados Fahrenheit ${temperaturaFahrenheit} y en grados Kelvin ${temperaturaKelvin}`,
        icon: "info",
    })
}

