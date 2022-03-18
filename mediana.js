
function calcularMediaAritmetica(lista) {

    // Suma los elementos de la lista con el metodo reduce de los Arrays
    const sumaLista = lista.reduce (
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [
    100,
    200,
    150,
];

//El metodo sort ordena el arreglo de manera ascendente (Se acorta el código con una función flecha)
lista1.sort((a,b) => a - b); 
        //1, b se va situar en un indice menor que a
        //0, no hay cambios
        //-1, a se va situar en un indice menor que b

//Se calcula el elemento de la mitad de la lista y se tipea a forma entera con parseInt en caso de que retorne un numero impar.
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) { // Se valida con mod si la longitud del arreglo es par
    if (numerito % 2 === 0) {
        return true; // Si es par la longitud del arreglo retorna true
    } else { // Si no es par la longitud del arreglo retorna false
        return false;
    }
}

let mediana;


if (esPar(lista1.length)) {// En caso de ser par se almacena los 2 elementos del medio del arreglo en constantes.
   const elemento1 = lista1[mitadLista1 - 1];
   const elemento2 = lista1[mitadLista1];
   
   const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,]);
   
   mediana = promedioElemento1y2;
} else { // En caso de ser immpar se llama la mediana que en este caso es la posición que se encuentra en la mitad del arreglo
    mediana = lista1[mitadLista1];
}