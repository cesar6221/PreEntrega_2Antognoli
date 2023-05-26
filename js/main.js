alert("Bienvenidos!!!   a Pet Shop:  Patitas Felices\nIngrese a continuación los datos de su mascota");

let raza = prompt("Ingrese el tipo de su mascota: Perro o Gato");
let edad = prompt("Ingrese la edad de su mascota");
let tamano = prompt("Ingrese el tamaño de su mascota");

function Mascota(raza, edad, tamano) {
    this.raza = raza;
    this.edad = edad;
    this.tamano = tamano;
    }

    function usuarioCliente() {
    let mascota = new Mascota(raza, edad, tamano);
    let datosUsuarioCliente =
        "Raza ingresada: " +
        mascota.raza +
        "\n" +
        "Edad: " +
        mascota.edad +
        "\n" +
        "Tamaño: " +
        mascota.tamano;
    alert(datosUsuarioCliente);

    let editarDatos = prompt("¿Está seguro de haber ingresado correctamente los datos?\n1-Si, 2-No");
    while (editarDatos) {
        if (editarDatos === "1") {
        alert("Sigamos con la elección del alimento para su mascota");
        alimentos(mascota);
        break;
        } else {
        alert("Volvamos a editar los datos de su mascota");

        raza = prompt("Ingrese la raza de su mascota");
        edad = prompt("Ingrese la edad de su mascota");
        tamano = prompt("Ingrese el tamaño de su mascota");

        mascota = new Mascota(raza, edad, tamano);
        datosUsuarioCliente =
            "Raza ingresada: " +
            mascota.raza +
            "\n" +
            "Edad: " +
            mascota.edad +
            "\n" +
            "Tamaño: " +
            mascota.tamano;
        alert(datosUsuarioCliente);

        editarDatos = prompt("¿Está seguro de haber ingresado correctamente los datos?\n1-Si, 2-No");

        if (editarDatos === "1") {
            alert("Excelente, prosigamos con la elección de alimentos para su mascota");
            alimentos(mascota);
            break;
        } else {
            alert("Vuelva a ingresar correctamente los datos");
            break;
        }
        }
    }
    }

    function alimentos(mascota) {
    let opciones = [
        { marca: "Agility perro adulto", peso: "20 kilos", precio: "15.000" },
        { marca: "Dog Chow perro adulto", peso: "20 kilos", precio: "17.000" },
        { marca: "Pedigree perro adulto", peso: "20 kilos", precio: "22.000" },
        { marca: "Royal Canin perro adulto", peso: "20 kilos", precio: "24.000" },
        { marca: "Pro-plan perro adulto", peso: "20 kilos", precio: "25.000"},
        { marca: "Dog Selection cachorros", peso: "15 kilos", precio: "15.000"},
        { marca: "Infinity cachorros", peso: "15 kilos", precio: "12.000"},
        { marca: "Excellent cachorros", peso: "15 kilos", precio: "9.500"},
        { marca: "Pedigree cachorros", peso: "15 kilos", precio: "13.000"},
        { marca: "Dog Chow cachorros", peso: "15 kilos", precio: "11.000"},
        { marca: "Excellent gato adulto", peso: "7.5 kilos", precio: "16.000"},
        { marca: "Pro-plan gato adulto", peso: "7.5 kilos", precio: "18.000"},
        { marca: "Royal Canin gato", peso: "7.5 kilos", precio: "19.800"},
    ];

    alert("Opciones de alimentos disponibles:");
    for (let i = 0; i < opciones.length; i++) {
        let opcion = opciones[i];
        alert(i + 1 + ": " + opcion.marca + ": " + "x " + opcion.peso + ", $" + opcion.precio);
    }

    let opcionesAlimentos = parseInt(
        prompt(
        "¿Qué marca de alimento desea comprar para su mascota? Seleccione una opción:\n1: Agility\n2: Dog Chow\n3: Pedigree\n4: Royal Canin\n5: Pro-Plan\n6: Excellent\n7: Dog Selection\n8: Infinity"
        )
    );

    if (opcionesAlimentos >= 1 && opcionesAlimentos <= opciones.length) {
        let seleccionado = opciones[opcionesAlimentos - 1];
        let resultadoCompra =
            mascota.raza +
            " " +
            mascota.tamano +
            " " +
            mascota.edad +
            " eligió " +
            seleccionado.marca +
            " x " +
            seleccionado.peso +
            " a $" +
            seleccionado.precio;
        
            alert(resultadoCompra);

            let buscarMarca = prompt("Ingrese el nombre de una marca para buscar en las opciones:");
            let resultadosBusqueda = opciones.filter((opcion) =>
                opcion.marca.toLowerCase().includes(buscarMarca.toLowerCase())
                );
            
                if (resultadosBusqueda.length > 0) {
                alert("Resultados de búsqueda:");
            
                for (let i = 0; i < resultadosBusqueda.length; i++) {
                    let opcion = resultadosBusqueda[i];
                    alert(opcion.marca + ": x " + opcion.peso + ", $" + opcion.precio);
                }
                } else {
                alert("No se encontraron resultados para la marca ingresada.");
                }
            
            } else {
                alert("La opción ingresada no es correcta. Por favor vuelva a intentarlo.");
                let reintentar = prompt("¿Desea intentar nuevamente?\n1 - Si\n2 - No");
                if (reintentar === "1") {
                alimentos(mascota);
                } else {
                alert("Lamentamos no poder ayudarte con tu compra. ¡Vuelve a visitarnos pronto!");
                }
            }
        }  

        usuarioCliente();
        alert("Gracias por visitar nuestra página");
