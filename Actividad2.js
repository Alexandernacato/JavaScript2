//Crea una funcion declarada llamada calcular promedio que reciba tres numeros como paremtros y retorne su promedio 

function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
}

// declara una funcion expresada llamada determinarMayor que reciba dos numeros como parametros y retorne el mayor de ellos

const determinarMayor = function (a, b) {
    return a > b ? a : b;
};

//Crea una funcion flecha llamada esPar que reciba un numero como parametro y retorne true si es par y false si es impar

const esPar = x => {
    return x % 2 === 0;
};

//Escriba una funcion anonima autoejecutable que

//Lame a las funciones anteriores (calcularPromedio, determinarMayor y esPar) 
//Use valores de ejemplo y muestre los resultados por consola
//Reto: Agrega validaciones para segurarte que los parametros son numeros antes de realizar las operacioens
//Si algun parametro no es un numero lanza un error conun mensaje descriptivo 

(function () {
    console.log("Llamando a las funciones:");
    const a = 4, b = 6, c = 8; 
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        console.log("Error: Todos los parámetros para calcularPromedio deben ser números.");
    } else {
        console.log("Promedio:", calcularPromedio(a, b, c));
    }

  
    const x = 10, y = 20; 
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.log("Error: Ambos parámetros para determinarMayor deben ser números.");
    } else {
        console.log("Mayor:", determinarMayor(x, y));
    }

    const z = 8; 
    if (typeof z !== 'number') {
        console.log("Error: El parámetro para esPar debe ser un número.");
    } else {
        console.log("¿Es par?:", esPar(z));
    }
})();
