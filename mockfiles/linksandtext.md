
# Markdown Links

## [](https://github.com/MercedesDavila/MEX008-FE-md-link#%C3%ADndice)Índice

-   [1. Preámbulo](https://github.com/MercedesDavila/MEX008-FE-md-link#1-pre%C3%A1mbulo)
-   [2. Resumen del proyecto](https://github.com/MercedesDavila/MEX008-FE-md-link#2-resumen-del-proyecto)
-   [3. Objetivos de aprendizaje](https://github.com/MercedesDavila/MEX008-FE-md-link#3-objetivos-de-aprendizaje)
-   [4. Consideraciones generales](https://github.com/MercedesDavila/MEX008-FE-md-link#4-consideraciones-generales)
-   [5. Criterios de aceptación mínimos del proyecto](https://github.com/MercedesDavila/MEX008-FE-md-link#5-criterios-de-aceptaci%C3%B3n-m%C3%ADnimos-del-proyecto)
-   [6. Entregables](https://github.com/MercedesDavila/MEX008-FE-md-link#6-entregables)
-   [7. Hacker edition](https://github.com/MercedesDavila/MEX008-FE-md-link#7-hacker-edition)
-   [8. Evaluación](https://github.com/MercedesDavila/MEX008-FE-md-link#8-evaluaci%C3%B3n)
-   [9. Pistas, tips y lecturas complementarias](https://github.com/MercedesDavila/MEX008-FE-md-link#9-pistas-tips-y-lecturas-complementarias)
-   [10. Checklist](https://github.com/MercedesDavila/MEX008-FE-md-link#10-checklist)

----------

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown)  es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional  `README.md`).

Estos archivos  `Markdown`  normalmente contienen  _links_  (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando  [Node.js](https://nodejs.org/), que lea y analice archivos en formato  `Markdown`, para verificar los links que contengan y reportar algunas estadísticas.

## 2. Resumen del proyecto

[Node.js](https://nodejs.org/es/)  es un entorno de ejecución para JavaScript construido con el  [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/). Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo, ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder interactuar con el sistema en sí, archivos, redes, ...

En este proyecto nos alejamos un poco del navegador para construir un programa que se ejecute usando Node.js, donde aprenderemos sobre cómo interactuar con el sistema archivos, con el entorno (_proceso_,  _env_,  _stdin/stdout/stderr_).