
let prod = JSON.parse(localStorage.getItem("producto")) 

if (prod == null) {
    let producto =
    [
        {
        codigo_barra : "2222",
        nombre : "Heladera",
        precio : 150,
        fecha_vencimiento : "2050-04-01"
        },
        {
        codigo_barra : "2222",
        nombre : "Microondas",
        precio : 300,
        fecha_vencimiento : "2040-02-01"
        },
        {
        codigo_barra : "4444",
        nombre : "TV",
        precio : 225,
        fecha_vencimiento : "2050-03-01"
        },
        {
            codigo_barra : "5555",
            nombre : "PC",
            precio : 755,
            fecha_vencimiento : "2050-03-01"
        }
    ]
    localStorage.setItem("producto", JSON.stringify(producto))
    console.log("Producto creado")
} else {
    console.log("Ya existe el producto")
}

console.log(prod)

function mostrarProductos() {
    alert("Los productos son: " + JSON.stringify(prod))
}

function guardarProducto() {
    let codigo = document.querySelector("#id").value
    let nombre = document.getElementById("nombre").value
    let precio = document.getElementById("precio").value
    let fecha_vencimiento = document.getElementById("fecha_vencimiento").value

    let nuevo_producto = {
        codigo_barra: codigo,
        nombre: nombre,
        precio: precio,
        fecha_vencimiento: fecha_vencimiento
    }

    prod.push(nuevo_producto)
    console.log("Último producto agregado:", nuevo_producto);
    localStorage.setItem("producto", JSON.stringify(prod))
}


boton_eliminar.addEventListener("click", eliminarProductos)

function eliminarProductos() {
    localStorage.removeItem("producto")
    console.log("Se eliminaron todos los productos")
    console.log(prod)
}

function eliminarProductoPorId() {
    let id = document.getElementById("id_eliminar").value

    let encontrarID = prod.find(producto => producto.codigo_barra == id);

    if (encontrarID != null) {
        alert("El producto con el ID " + id + " fue eliminado")
        prod = prod.filter((producto) => producto.codigo_barra != id)
        localStorage.setItem("producto", JSON.stringify(prod))
        console.log(prod)
    } else {
        alert("El producto con el ID " + id + " no existe") 
    }

    }