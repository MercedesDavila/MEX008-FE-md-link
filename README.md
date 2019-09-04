# Markdown Links.
# Libreria `md-links-md`

## Introducción.

`md-links-md`  es una libreria que permite extraer los links presentes en un archivo Markdown (.md).Puedes utilizarlo como módulo o requerirlo desde un archivo javascript en tu proyecto. Además indica la ruta del archivo donde se encontró el link y el texto que aparece dentro del link (`<a>`).

### Objetivo del proyecto

Crear una librería desde cero que haga uso de otras librerías para retornar los links detectados en un archivo MD y validar que estos sean funcionales o no. Así como entregar estadísticas respecto a estos mismos links.

### Diagrama de flujo del programa md-links-md.:bar_chart:

![diagramadeflujo](https://github.com/MercedesDavila/MEX008-FE-md-link/blob/master/img/Diagrama%20de%20Flujo%20MD-Links.jpeg?raw=true)

## Plan de Acción.:bookmark_tabs:

Para este proyecto se siguio el siguiente plan de acción:

### Inicializar el proyecto.:computer:

 - [x] Forkear y clonar repositorio de 
       [Laboratoria](https://github.com/Laboratoria/MEX008-FE-md-link).
 - [x] Instalar dependencias (jest, eslint).
 - [x] Leer librerías sugeridas para implementar la adecuada a mi proyecto.

### NPM.:file_folder:

 - [x] Crear cuenta en NPM. 
 - [x] Crear archivo package.json.
 - [x] Vincular proyecto con NPM.
 - [ ] Versionar archivo package.json.
 - [ ] Subir archivos a NPM.

### Elegir Librerias.:newspaper:

 - [x] node-fetch.
 - [x]  colors.
 - [x] path.
 - [x] fs.
 - [x] markdown-link-extractor.

### Boilerplate.:clipboard:

 - [ ] README.md.
 - [ ] index.js.
 - [ ] package.json. 
 - [ ] test/md-links.spec.js. 
 - [ ] mdLinks().

## - Planificación

Para la planificación se utilizo issues y milestones, revisar en el siguiente link:
[mdLinksmd Markdown Planificación](https://github.com/MercedesDavila/MEX008-FE-md-link/projects/1).

## Instalación.:globe_with_meridians:

Para instalar el módulo en tu proyecto, debes posicionarte en la carpeta de este e ingresar el siguiente comando en la terminal:

npm install --save [https://github.com/MercedesDavila/MEX008-FE-md-link.git](https://github.com/MercedesDavila/MEX008-FE-md-link.git)

## Autores. :pencil2:

Este proyecto fue desarrollado e implementado por:

-  **Mercedes Dávila Vázquez**  [MercedesDavila]

## Checklist

### General

 - [ ] Puede instalarse via  `npm install --global <github-user>/md-links`.

### README. md

 - [x] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
 - [x] Un board con el backlog para la implementación de la librería.
 - [ ] Documentación técnica de la librería.
 - [ ] Guía de uso e instalación de la librería

### API  `mdLinks(path, opts)`

 - [ ] El módulo exporta una función con la interfaz (API) esperada.
 - [ ] Implementa soporte para archivo individual.
 - [ ] Implementa soporte para directorios.
 - [ ] Implementa  `options.validate`.

### Pruebas / tests

 - [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions, lines, y branches.
 - [ ] Pasa tests (y linters) (`npm test`).

### CLI

 - [ ] Expone ejecutable  `md-links`  en el path (configurado en  `package.json`).
 - [ ] Se ejecuta sin errores / output esperado.
 - [ ] Implementa  `--validate`.
 - [ ] Implementa  `--stats`.

## Hacker Edition

 - [ ] Crear un script en el package.json que transforme el codigo ES6+ a ES5.
 - [ ] Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
 - [ ] Puedes agregar más estadísticas.
 - [ ] Integración continua con Travis o Circle CI.

 