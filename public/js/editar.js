
// Referencia al elemento de formulario html  
const formGuardar = document.querySelector("#form-guardar")
let id;
const obtenerPublicacion = async (id) => {
    const response = await fetch(`/publicacion/${id}`)
    const data = await response.json()
    return data;
}
// Primero tiene que cargar el contenido de la pagina
document.addEventListener('DOMContentLoaded', async () => {
    const id = formGuardar.dataset.id;
    //Una vez cargada la pagina, se obtienen los datos por su id
    const publicacion = await obtenerPublicacion(id);    

    const titulo = document.querySelector('#titulo-post');
    const descripcion = document.querySelector('#detalle-post');    
    const url_imagen = document.querySelector('#url-img');
    const url_producto = document.querySelector('#url_producto');    
    const fecha = document.querySelector('#fecha');
    const nombre=document.querySelector('#nombre');
    //una vez capturado de la pagina, se asignan a las variables

    titulo.value = publicacion.titulo;
    descripcion.value = publicacion.descripcion;
    url_imagen.value = publicacion.url_imagen;
    url_producto.value = publicacion.url_producto;    
    fecha.value = publicacion.fecha;
    nombre.value = publicacion.nombre;
});
//una vez que se guardan en la pagina y se pone "guardar"

formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const url_producto = document.querySelector('#url_producto').value;    
    const fecha = document.querySelector('#fecha').value;
    const nombre = document.querySelector('#nombre').value;

    // Enviar al servidor
    const response = await fetch(`/publicacion/${id}`,{
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imagen, url_producto, fecha, nombre})
    });
    
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

});