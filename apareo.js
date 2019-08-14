const fs = require('fs')

//leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in')
//escribirTextoEnArchivo ('hola.txt', 'texto test', true );
transformarStringEnArrayDeNumeros ('12|34|56' , '|')
/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta 
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    const texto = fs.readFileSync(ruta , 'utf-8')
    console.log(texto) //test
    return texto
    
}

/**
 * escribe el texto en el archivo de la ruta. si no existe, y no se indica que se lo cree, debe lanzar un error.
 * @param {string} ruta 
 * @param {string} texto 
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try{
       
         const archivo = fs.readFileSync(ruta)
         fs.writeFileSync(ruta , texto)
    }
    catch (ENOENT){
        if (shouldCreateIfNotExists){
            fs.writeFileSync(ruta , texto)
        }
        else{
            console.log(ENOENT)
        }
    }
}

/**
 * separa el string ante cada ocurrencia del separador, y agrega al array resultado siempre que pueda
 * transformar al fragmento de string en numero.
 * @param {string} str 
 * @param {string} separador
 * @returns {number[]} array de numeros
 */
function transformarStringEnArrayDeNumeros(str, separador) {
    var number = []
        for (var i = 0; i< str.length; i++) {
              var char = str.charAt(i);
              if( char != separador ) {
                 number[number.length]=parseInt(char)
                 
               } 
         }
     console.log(number)
       
    
}

/**
 * concatena todos los numeros entre sí, intercalando un separador entre número y número.
 * @param {number[]} arr 
 * @param {string} separador 
 * @returns {string} el nuevo string
 */
function transformarArrayDeNumerosAUnSoloString(arr, separador) {
}

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
}

/**
 * devuelve el indice de la posicion con el menor valor de un array.
 * @param {number[]} valores el array de numeros
 * @returns {number} el indice del menor valor
 */
function findMin(valores){
}

function actualizarIndicesYValores(indices, valores, arrs, min) {
}
