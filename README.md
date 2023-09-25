# Argentina Programa 4.0
Proyecto Final Lenguajes de programación 1 - EPICA SAPEM - Full Stack Tramo 2

Proyecto del curso "Tramo II - Lenguajes de Programación I - Comisión 21523 A"  como "Full Stack Developer", donde se utiliza Node.js con Express y Sequelize para interactuar con una base de datos MySQL y EJS con HTML, CSS y Boostrap para el consumo de la API creada. A continuación, se detallan las dependencias necesarias y las instrucciones para configurar y probar el proyecto.



## ⚠ Dependencias ⚠

Requiere tener instalado las siguientes dependencias:

- [Node.js](https://nodejs.org/): Plataforma de tiempo de ejecución de JavaScript.
- [npm](https://www.npmjs.com/): Gestor de paquetes de Node.js.

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
  npm install
```

Las dependencias incluidas en el proyecto son las siguientes:

- **express**: Framework web de Node.js.
- **body-parser**: Middleware para analizar las solicitudes HTTP entrantes.
- **cors**: Middleware para habilitar el acceso a recursos en diferentes dominios (CORS).
- **morgan**: Middleware para registrar solicitudes HTTP.
- **sequelize**: ORM (Object-Relational Mapping) para interactuar con la base de datos.
- **mysql2**: Controlador MySQL para Sequelize.
- **dotenv** (opcional): Para cargar variables de entorno desde un archivo `.env`.
- **nodemon** (opcional): Herramienta para reiniciar automáticamente el servidor en desarrollo cuando se hacen cambios en el código.

## ⚙ Configuración ⚙

1. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos.

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=contraseña
DB_NAME=nombre_de_la_base_de_datos
```
## Servidor Express

![Node Express](https://somospnt.com/images/blog/zojuy79lo3fn3qdt7g6p.png)

El servidor estará disponible en `http://localhost:5000`.

## 📱 Uso 📲

Este proyecto proporciona una interfaz de usuario basada en EJS para interactuar con las publicaciones. A continuación, se describen las funcionalidades proporcionadas por cada interfaz:

## Lista de Publicaciones 📘 (home.ejs)

- Muestra una lista de todas las publicaciones existentes, cuando se creo, el autor y una breve descripcion de la misma.
- Permite ver los detalles de cada publicación.
- Enlace que permite ir a la publicación.



### Administración de Publicaciones 📖 (admin.ejs)

- Permite crear una nueva publicación.
- Se pueden ingresar el título, la descripción, la fecha y la URL de la imagen de la nueva publicación, y autor de la misma.
- Al guardar la nueva publicación, se crea en la base de datos.

##  Autor 

- [@AlejandroMoreno](https://github.com/amrHub2023/practicaBlog21523A)