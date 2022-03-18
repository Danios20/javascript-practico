// Se declara e inicializa un Array
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

// Se declara un objeto.
const lista1Count = {};

// Se usa un metodo propio de los Arrays para llenar el objeto con los elementos del Array, el cual va recorriendo la lista y si el elemento se repite le va sumando 1 y si no se repite es igual a 1.
lista1.map(
    function (elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

//Se transforma el objeto lista1Count en un Array de Arrays con el metodo Object.entries, que practicamente se comporta como  como una matriz (x)(y). El metodo sort se emplea para organizar de acuerdo a la cantidad de n de elementos que más se repite en el Array de Arrays.

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {

        // Se organiza de acuerdo a la segunda posición que es la cantdidad que se repite el elemento.
        return elementoA[1] - elementoB[1];
        //1, b se va situar en un indice menor que a
        //0, no hay cambios
        //-1, a se va situar en un indice menor que b
    }
);

// Se imprime la ultima posición en nuestro Array de Arrays, el cual es el elemento que más se repite n cantidad de veces.

const moda = lista1Array[lista1Array.length - 1];