// Referencia al elemento de formulario html
const formGuardar = document.querySelector("#form-guardar")

formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se capturan los datos del formulario
    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const url_producto = document.querySelector('#url_producto').value;
    const fecha = document.querySelector('#fecha').value;
    const nombre =document.querySelector('#nombre').value;

    // Enviar al servidor
    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imagen, url_producto, fecha,nombre})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})
