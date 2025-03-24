# Sanity
Sanity es un software de gestión de datos para proyectos web y móviles. Con Sanity, puedes estructurar y relacionar diferentes tipos de contenido de manera flexible y escalable.


## Requisitos
Para poder utilizar Sanity, necesitarás tener instalado Node.js en tu sistema.

## Instalación
Para instalar Sanity, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.



2. Abre una terminal en el directorio raíz del proyecto backoffice y ejecuta el siguiente comando para instalar las dependencias:

```bash
yarn
``` 

3. Para ejecutar la aplicación, ejecuta el siguiente comando:

```bash
yarn develop
```

4. Abre un navegador web y visita http://localhost:3333 para ver la aplicación en funcionamiento.


## Actualizar

1. Para guardar los cambios realizados y que se muestren en producción, ejecuta el siguiente comando:

```bash
yarn deploy
```

2. Para guardar los cambios realizados y se actualice la BBDD, ejecuta el siguiente comando:

```bash
yarn deploy-graphql 
```

h1111
  


























# Guía de inicio de Sanity.io

Instrucciones para cerrar sesión, iniciar sesión y crear un nuevo proyecto en Sanity.io.

## Cerrar sesión
Para cerrar sesión en Sanity.io, ejecuta el siguiente comando en la terminal:

```bash
npx -y @sanity/cli logout
```

## Iniciar sesión
Para iniciar sesión en Sanity.io, ejecuta el siguiente comando en la terminal:

```bash
sanity login
 ```
Esto abrirá una ventana del navegador en la que podrás iniciar sesión con tus credenciales de Sanity.io.

## Crear un nuevo proyecto
Para crear un nuevo proyecto en Sanity.io, ejecuta los siguientes comandos en la terminal:

```bash
npm create sanity@latest
```

## Sigue las instrucciones en pantalla para configurar tu nuevo proyecto. 

Select project to use Create 
<p style='color: #72DDF7;'> new project</p>
Your project name:
<p style='color: #72DDF7;'> nombre-de-tu-proyecto</p>
Use the default dataset configuration?
<p style='color: #72DDF7;'>Yes</p>
Project output path:
<p style='color: #72DDF7;'> nombre-de-tu-proyecto</p>
Select project template
<p style='color: #72DDF7;'> Clean project with no predefined schemas</p>
Do you want to use TypeScript?
<p style='color: #72DDF7;'> Yes </p>
Package manager to use for installing dependencies?
 <p style='color: #72DDF7;'>yarn </p>


## Una vez que hayas completado la configuración, se creará una carpeta con el nombre de tu proyecto en el directorio actual. Para acceder a esta carpeta, ejecuta el siguiente comando:
```
cd nombre-de-tu-proyecto
```

## Para iniciar el servidor de desarrollo y comenzar a trabajar en tu proyecto, ejecuta el siguiente comando:
```bash
yarn dev
```

## Abre un navegador web y ve a la siguiente URL para acceder a la interfaz de administración de tu proyecto:
```bash
http://localhost:3333
 ```

## Ingresa tus credenciales de Sanity.io si se te solicita y comienza a trabajar en tu proyecto.

 