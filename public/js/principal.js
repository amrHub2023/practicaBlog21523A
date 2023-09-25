// Funcion para obtener todas las publicaciones
const obtenerPublicaciones = async () => {
    try {
      const response = await fetch("/publicaciones");
      if (!response.ok) {
        throw new Error("Error al obtener las publicaciones");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener las publicaciones:", error);
      throw error;
    }
  };
  
  // Funcion para obtener una publicación en base a su id
  const obtenerPublicacion = async (id) => {
    try {
      const response = await fetch(`/publicacion/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener la publicación:", error);
      throw error;
    }
  };
  
  // Función para eliminar una publicación específica en base a su id
  function eliminarPublicacion(id) {
    fetch(`/publicacion/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          mostrarModal("Publicación eliminada correctamente");
        } else {
          mostrarModal("Error al eliminar la publicación");
        }
      })
      .catch((error) => {
        console.error("Error al eliminar la publicación:", error);
      });
    }