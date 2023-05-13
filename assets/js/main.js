const producto = {
    nombre: 'Harina de Trigo',
    precio: 1800,
    peso: 1000,
    marca: 'Alimentos 1',
    tipo: 'Harinas'
}

const otraInfoProducto = {
    ingredientes: [
        "Germen de trigo",
        "Mejoradores de masa"
    ],
    vitaminas: ["B6","B12"],
    peso: 2000
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


// console.log(producto);
// console.log(otraInfoProducto);


// Opción 1 para concatenar atributos de objetos
const producto2 = JSON.parse(JSON.stringify(producto))
// const producto2 = { ...producto }
for (const key of Object.keys(otraInfoProducto)) {
    producto2[key] = otraInfoProducto[key]
}

// Opción 2 para concatenar atributos de objetos (Operador de propagación - Operator Spread)
// const producto2 = {...otraInfoProducto, ...producto };
// console.log("Producto2", producto2);
// console.log("Producto", producto);



// Clase Set - Crear objeto con valores únicos ******************************************
const numeros = new Set([2,2,3,3,5,5,8,5,2])

//Función Add añade elementos al SET
numeros.add("3")
numeros.add(9)

//Atributo size nos muestra la longitud del elemento SET
console.log(numeros);
console.log("longitud", numeros.size );

/* Función delete elimina el elemento del SET en caso de que exista, 
    y nos retorna un boolean para comprobar si eliminó un elemento */
const confirmacionEliminacion = numeros.delete(1)
console.log("confirmacionEliminacion", confirmacionEliminacion);


// Función values obtiene cada uno de los elementos del SET
console.log("Values", numeros.values());

// Función Has nos permite saber si el valor existe en el SET, retorna un boolean
console.log("Has", numeros.has(2));

//Nos permite limpiar la estructura SET
numeros.clear()

console.log(numeros);


// Clase Map *******************************************************************
const personas = new Map()

// La función SET incorpora un nuevo elemento al MAP
personas.set('maria', { rut: '12345678-5', nombre: "María González", edad: 28 })
personas.set('jose', { rut: '12345699-5', nombre: "José González", edad: 35 })

// Si se repite la llave, sustituye la definición anterior
personas.set('jose', { rut: '99999999-5', nombre: "José Mora", edad: 38 })

// La función delete elimina un elemento del MAP y retorna un boolean para comprobar si hubo eliminación
const eliminoPersona = personas.delete("jose")


// La función Has nos devuelve un boolean para comprabar si existe un elemento con la llave proporcionada
console.log("has", personas.has("maria"));

console.log(personas);
console.log("Eliminó?", eliminoPersona);

