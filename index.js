const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelectorAll("#papelera");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".img-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        const parr = document.getElementById(id_parrafo);
        seccion.appendChild(parr);
    })
})

papelera.forEach(papelera => {
    papelera.addEventListener("dragover", event => {
        event.preventDefault()
    })
    papelera.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        const elemento = document.getElementById(id_parrafo);
        elemento.remove("id") 
    })
})

