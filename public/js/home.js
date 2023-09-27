const obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let secciones = "";

    // Método para recorrer los registros
    publicaciones.forEach(publicacion => {
        secciones += `
            <section class="d-flex gap-2">            
            <img src="${publicacion.url_imagen}" class="rounded" height=200  >            

            <div class="d-flex flex-column justify-content-around">                        
            
                <a href="${publicacion.url_producto}" 
               <h5> ${publicacion.titulo}</h5>
                </a>
                <p> ${publicacion.descripcion}</p>               

                <p> ${publicacion.fecha}</p>
                <p> ${publicacion.nombre}</p>
            </div>
            </section>
        `
    })

    // Se crea la lista
    elementoHtml.innerHTML = secciones;

}

const eliminarPublicacion = async (id) => {
    
    // Se envía la petición al servidor
    const response = await fetch(`/api/publicacion/${id}`, {
        method: 'delete'
    })

    const data = await response.json();
    alert(data.msg)
    location.reload();
}





document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    if(!publicaciones) return alert('Error al obtener las publicaciones')
    console.log(publicaciones)


    // Modificar el DOM para mostrar las publicaciones
    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)
})