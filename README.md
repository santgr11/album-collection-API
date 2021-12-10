# DISC COLLECTION

Este proyecto contiene un MVP de una API para coleccionistas de discos.

## Descripcion

El proyecto consiste en tres entidades basicas, **albums**, **artistss** y **tracks**.

La API permite administrar estas entidades relacionadas para agregarlas, modificarlas, consultar y eliminarlas.

## Tecnologias

Está escrita en NodeJS, utilizando una base de datos MySQL.

Las librerias utilizadas de mayor importancia son:

- [Express](https://expressjs.com/) para definir los endpoints de la API y su estructura.
- [Sequelize](https://sequelize.org/) ORM para administrar la base de datos.
- [Joi](https://joi.dev/) para validar las llamadas que recibe la API.

## Como usar la API

### Crear la base da datos

Para crear la base de datos recomiendo utlizar [Docker](https://www.docker.com/) para crear un contenedor a partir de una imagen de MySQL.

Para ello, teniendo instalado Docker hay que correr los siguientes comandos.

```
docker run -d -p 3306:3306 --name  -e MYSQL_ROOT_PASSWORD=secret
```
De este paso es necesario guardar el puerte en el que vamos a escuchar la base datos, que es el numero a la izquierda del `:` luego del `-p` (podes usar el te resulte mas conveniente). Tambien vamos a guardar la contraseña que definimos seguido de `MYSQL_ROOT_PASSWORD`, en este caso `secret`.

Estas variables las podes ir estableciendo en el archivo [.env](./.env) en ubicado en la base del proyecto. Siguiente el ejemplo serían `DB_PASSWORD=secret` y `DB_PORT=3306`.

Si el contenedor esta corriendo podemos ejecutar
`docker exec -it test-db mysql -p` para entrar en el modo interactivo entrando la contraseña que definimos. Si entramos correctamente deberíamos ver `mysql>` en nuestra consola.

Ahora vamos a crear nuestra base de datos vacía corriendo `CREATE DATABASE disc_collection_db;`.

Deberiamos ver el resultado `Query OK`. Vamos a guardar el valor que definimos como nombre de la base de datos en el `.env` en la variable `DB_NAME`, en el ejemplo `DB_NAME=disc_collection_db`.

Podemos dejar que nuestro ORM se encargue de la creacion de las tablas estableciend la variable `DB_SYNC` en nuestro `.env` a true (`DB_SYNC=true`) y correr el programa ejecutando una consola abierta en la base del proyecto y corriendo el comando `npm start`.

### Probando la API.

Para facilitar los distintos endpoints tenemos una coleccion de postman con los distintos request posibles en la carpeta [resources](./resources/albums_collection.postman_collection.json)

