const ctrl = {}    //se importa de la capeta models/Publicaciones
const MisPublicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {
    try {
        // Se crea una nueva publicación
        const publicacion = await MisPublicaciones.create(req.body);
        res.send({
            msg: "Publicación creada con éxito",
            publicacion  //que hace esta linea?
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Error al crear nueva publicación"});  
    }

};

// Se consultan todas las publicaciones
ctrl.obtenerPublicaciones = async (req, res) => {
    const publicaciones = await MisPublicaciones.findAll();
    res.json(publicaciones)
};

// para consultar una publicacion 
ctrl.obtenerPublicacion = async (req, res) => {
    //const  id  = req.params;  
    try { 
    const publicacion = await MisPublicaciones.findByPk(req.params.id);
    return  res.json(publicacion);

}   catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al tratar de obtener la publicación" });
 }
};

ctrl.actualizarPublicacion = async (req, res) => {
    try { 
        const  id  = req.params;    
        const publicacion = await MisPublicaciones.findByPk(id);    
        publicacion.set(req.body);
        await publicacion.save() // Con esta instrucción se guarda en la BD

        res.json({
        msg: "Publicación actualizada correctamente"
    });
}  catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar la publicación" });

    }
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
    });

};




module.exports = ctrl;   