const producto = {
    nombre: 'Harina de Trigo',
    precio: 1800,
    peso: 1000,
    marca: 'Alimentos 1',
    tipo: 'Harinas'
}

var tipo = "Pagina Web"

//Opción 1 para obtener valores de OBJETOS
// let precio = producto['precio']
// let nombre = producto['nombre']
// let peso = producto.peso
// let precio2 = producto.precio

//Opción 2 para obtener valores de OBJETOS
let { nombre, precio, peso, tipo: tipo_alimento } = producto 



// console.log("Nombre", nombre);
// console.log("Precio", precio);
// console.log("Peso", peso);
// console.log("Tipo", tipo_alimento);
// console.log(tipo);




/**Destructuring de Arreglos ***************************************/
const nombres = ["José","María","Jesús","Juan"]

// Opción 1 para obtener valores de un arreglo
// let primero = nombres[0]
// let segundo = nombres[1]
// let tercero = nombres[2]
// let cuarto = nombres[3]



// Opción 2 para obtener valores de un arreglo Destructuring
// Obtener los 4 elementos del arreglo
// let [primero, segundo,  tercero, cuarto ] = nombres

// Obtener sólo el cuarto elemento del arreglo
// let [,,, cuarto ] = nombres

// Destructuring de arreglo con opción a obtener el resto de elemento no accedidos
let [ primero, ...restoElementos ] = nombres


// console.log(primero);
// console.log(restoElementos);
// console.log(segundo);
// console.log(tercero);
// console.log(cuarto);

const otrosNombres = ["Carlos", "Pedro"]

const apellidos = ["Pérez", "Gonzalez","Ojeda"]

//Opción1 para concatenar arreglos
// const nuevosNombres = nombres.concat(otrosNombres)

//Opción2 para concatenar arreglos
const nuevosNombres = [...nombres, ...otrosNombres, ...apellidos]

console.log(nuevosNombres);

