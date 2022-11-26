# REACT - Frontend App Videclub inspirado en los años 90´s.
Ejercicio técnico frontend. 

### Datos generales

**- Autores del proyecto:** Mara Scampini & Alejandro López.

**- Título del proyecto:** Ejercicio técnico 5 - Frontend App alquier películas

**- Fecha:** 04/12/2022

- Tecnologías y dependencias: 
 - REACT
 - REDUX
 - BOOTSTRAP
 - JAVASCRIPT
 - NODE
 - NODEMON
 - SQL
 - SEQUELIZE
 - EXPRESS JS
 - POSTMAN
 - CORS
 - JWT
 
 
 ### Descripción general del proyecto 

El siguiente ejercicio consiste en el diseño y desarrollo de un FRONTEND para una APP funcional que ofrece el servicio de alquiler de películas. Este FRONTEND conecta
con una API que permite la conexión con una BASE DE DATOS SQL donde se encuentra almacenada toda la información para un correcto funcionamiento de la aplicación.


 ### Diseño y aspecto de la APP
 
 En nuestra propuesta de videoclub decidimos ofrecer un servicio de alquiler de películas de la época de los 90s. En relación a esta época, el nombre que hemos escogido para nuestra 
 aplicación es SUPER EIGHT, y hace referencia a las bobinas que se utilizaban hace unas décadas para filmar las películas. 
 
 Siguiendo una inspiración 'años 90' y apostando por un diseño gráfico que nos recuerde a esta época, establecemos unos colores para la estructuración de las distintas pantallas, así
 como una serie de recursos gráficos, imágenes y vectores que nos recuerdan al aspecto de las interfaces de las webs que empezaban a surgir por aquel entonces. Los 
 componentes de la aplicación simulan ventanas emergentes y con un aspecto sencillo que se adapta completamente a las funcionalidades de la web pero que intentan 
 emular este estilo 'retro'.
 
 Moodboards e inspiración:
 
 ![moodboard-1](https://user-images.githubusercontent.com/113507322/204105036-a9d41883-f395-4caf-b97f-2d03d743532a.png)

![moodboard-2](https://user-images.githubusercontent.com/113507322/204105056-8b3ea1a3-f776-413f-9098-4ed8bfb1adf4.png)

 


### DB: Tablas y relaciones

La base de datos consta de 5 tablas: LOANS, MOVIES, USERS, FAVOURITES and ROLES. Al tratarse de un modelo relacional de base de datos, las relaciones entre las tablas son las siguientes: 

- La tabla MOVIES tiene una relación de "1 TO MANY" (1:N) con la tabla LOANS. 
- La tabla USERS tiene una relación de "1 TO MANY" (1:N) con la tabla LOANS. 
- La tabla FAVOURITES tiene una relación de "1 TO MANY" (1:N) con la tabla USERS y la tabla MOVIES.
- La tabla ROLES tiene una relación de "1 TO MANY" (1:N) con la tabla USERS. 


![db-videoclubapp-tables](https://user-images.githubusercontent.com/113507322/204104192-db72dea8-0798-496d-a896-1598a08056fd.png)


/////////////////////////////////////////////////// CONTINUAR (AÑADIR ENDPOINTS, SI PROCEDE) //////////////////////////////////////////////////////////

### PANTALLAS Y PÁGINAS DE LA APLICACIÓN




**RECURSOS ALTERNATIVOS**

Diseño y edición de imágenes y vectores:
  - ADOBE PHOTOSHOP.
  - ADOBE ILLUSTRATOR. 

**FUENTES**

- Vectores editables y autores: www.freepik.es / www.pixabay.com / www.pexels.com


