
let persona = JSON.parse(localStorage.getItem("persona")) || [];

let btn_guardar = document.querySelector("#btn_guardar")
btn_guardar.addEventListener("click", cargarDatos)

function cargarDatos(){
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value

    nueva_persona = {
        nombre: nombre,
        edad: edad
    }

    persona.push(nueva_persona)
    localStorage.setItem("persona", JSON.stringify(persona));

    alert("entro")
}
