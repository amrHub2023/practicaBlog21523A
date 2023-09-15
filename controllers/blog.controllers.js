const ctrl = {}    //se importa de la capeta models/Publicaciones

const MisPublicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {
    try {
        // Se crea una nueva publicación
        const publicacion = await MisPublicaciones.create(req.body);
        res.send({
            msg: "Publicación creada con éxito",
            publicacion
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Error al crear nueva publicación"
        })  
    }

}

// Se consultan todas las publicaciones
ctrl.obtenerPublicaciones = async (req, res) => {
    const publicaciones = await MisPublicaciones.findAll();
    res.json(publicaciones)
}

ctrl.actualizarPublicacion = async (req, res) => {
    const { id } = req.params;

    const publicacion = await MisPublicaciones.findByPk(id)
    publicacion.set(req.body)

    await publicacion.save() // Con esta instrucción se guarda en la BD

    res.json({
        msg: "Publicación actualizada correctamente"
    })
};

ctrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;    
    await MisPublicaciones.destroy({
        
        where: {
            id
        }
    });

    res.json({
        msg: "Publicación eliminada correctamente"
    })

};

ctrl.obtenerPublicacion = async (req, res) => {
    const publicacion = await MisPublicaciones.findByPk(req.params.id)
    return publicacion;
};



module.exports = ctrl;   