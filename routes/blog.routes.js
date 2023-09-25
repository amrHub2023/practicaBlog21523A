// Se implementa el enrutador de Express
// const router = require('express').Router();

const { Router } = require('express');
const router = Router()
const {
    crearPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion,
    actualizarPublicacion,    
    eliminarPublicacion     
    
} = require('../controllers/blog.controllers');

 
// ==================================================
//         Rutas para renderizar vistas
// ==================================================
//Muestra la vista principal
router.get('/', (req, res) => {
    res.render('home')
})  

// Ruta para devolver la vista admin
router.get('/admin', async (req, res)=> {
    res.render('admin')
})

// Ruta para devolver la vista admin
//agregado de lauti
router.get('/editar/:id', async (req, res)=> {
    res.render('editar', { id:req.params.id })
})

// Ruta para eliminar una publicación
//agregado de Lauti
router.get("/publicacion/:id", async (req, res) => {
  const id = req.params.id;
  eliminarPublicacion(id);
  res.redirect("/");
})

// ==================================================
//         Rutas para CRUD de Publicaciones
// ==================================================

// Crear nueva publicación Admin.js
router.post('/publicacion', crearPublicacion);

// Obtener todas las publicaciones home.js
router.get('/publicaciones', obtenerPublicaciones);

// Obtener una publicación
router.get('/publicacion/:id', obtenerPublicacion);

// Actualizar una publicación
router.put('/publicacion/:id', actualizarPublicacion);

// Eliminar una publicación
router.delete('/publicacion/:id', eliminarPublicacion);

module.exports = router;
