# Data Lovers

## Índice

* [1. Preámbulo del proyecto](#1-preámbulo-del-proyecto)
* [2. Investigación de UX](#2-investigación-de-ux)
* [3. Trabajo Colaborativo](#3-trabajo-colaborativo)
* [4. Historias de Usuario](#4-historias-de-usuario)
  * [4.1 Historia de Usuario 1](#41-historia-de-usuario-1)
  * [4.2 Historia de Usuario 2](#42-historia-de-usuario-2)
  * [4.3 Historia de Usuario 3](#43-historia-de-usuario-3)
  * [4.4 Historia de Usuario 4](#44-historia-de-usuario-4)
  * [4.5 Historia de Usuario 5](#45-historia-de-usuario-5)
  * [4.6 Historia de Usuario 6](#46-historia-de-usuario-6)
  * [4.7 Historia de Usuario 7](#47-historia-de-usuario-7)
* [5. Pruebas Unitarias](#5-pruebas-unitarias)
* [6. Vista final del proyecto](#6-vista-final-del-proyecto)
* [7. Objetivos de Aprendizaje](#7-objetivos-de-aprendizaje)


***

## 1.  Preámbulo del proyecto

Este proyecto tuvo como objetivo el aprender a manipular un conjunto de datos (set de datos o data) para hacerlos accesibles a través de una página web de utilidad para usuarias específicas.

El corazón del proyecto constó de mostrar, filtrar, y ordenar los elementos que constituyen la base de datos, así como hacer cálculos a partir de la misma data.

Como dupla elegimos la temática de Pokémon Go, por lo que el set de datos manipulado gira entorno a data sobre aspectos de pelea, tamaño, región, tipo, etc., de 251 pokemones.

## 2. Investigación de UX

Las usuarias objetivo de la página web son aquellas interesadas en obtener información acerca de los pokemones encontrados en el juego de Pokémon Go.

La data que se muestra en esta página web permite a la usuaria familiarizarse con información de relevancia para su experiencia como entrenadora virtual de Pokémon Go, específicamente sobre los 251 pokemones de las primeras dos generaciones Pokémon.

Entre los datos de interés que se pueden visualizar se encuentran las estadísticas de ataques especiales de cada Pokémon.

Las estadísticas mostradas son acerca del STAB (Same Type Attack Bonus) que es la unificación de ataque del mismo tipo, sobre el DPS (Damage Per Second) o daño por segundo, y sobre el EPS (Energy Per Second) que es la energía gastada por ataque pokémon en una pelea.

Esta información le ayudará a la usuaria a saber cuál estrategia de pelea implementar en sus partidas de Pokémon Go, de acuerdo al pokémon contrincante y al pokémon campeón elegido para la batalla.


## 3. Trabajo Colaborativo

Para la elaboración de este proyecto, primeramente acordamos horarios de trabajo colaborativo e individual. Para ello utilizamos la herramienta [Trello Pokémon](https://trello.com/b/Q65GSUH7/proyecto-2-data-lovers-pok%C3%A9mon), en la cual organizamos las tareas a realizar día con día, a lo largo de cada sprint, según las Historias de Usuario diseñadas para alcanzar los objetivos de este proyecto.

Asimismo, categorizamos por etiquetas las tareas a realizar a partir de lo que engloba el proyecto (Figma, CSS, HTML, JavaScript, Jest).

En el tablero de Trello hicimos columnas de OA’s, project backlog, sprint backlog, doing, done, bloqueos y links.


## 4. Historias de Usuario (HU)

* [Visualización de HU en Figma](https://www.figma.com/file/4ObJY2nEcJBYkfOtJ36xZB/Data-Lovers-Pokemon?node-id=0%3A1)

### 4.1 Historia de Usuario 1

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero que se muestre el nombre y la imagen de todos los pokémon en la página",
* Qué sigue: "para poder visualizar a detalle la info de cada pokémon una vez que lo seleccione".

**Criterios de Aceptación**
* Mostrar todos los personajes (nombre, imagen, número y tipo en la UI).
* Scroll desde el primer elemento hasta el último.
* Que se muestren los personajes a manera de cuadrícula.

**Definición de Terminado**
* Se muestran los personajes en cuadrícula en la página (imagen, nombre, número y tipo).
* Pasar pruebas unitarias.

#### Prototipo baja fidelidad en Papel

Hicimos un prototipo por Historia de Usuario.

Para está historia de usuario diseñamos un prototipo en el que únicamente mostramos parte de la data (imagen de pokémon, nombre, número de pokedex, y tipo). Estos datos se muestran a manera de cuadrícula y se les puede dar scroll de arriba-abajo.

   ![](<./ImgREADME/HU1papel.png>)

#### Prototipo de alta fidelidad (Figma)

En este prototipo se muestra el diseño del header, contenido main (tarjetas individuales por pokémon) y el footer.

Seleccionamos un estilo basado en el juego Pokémon de Nintendo, considerando una fuente de texto usada en el videojuego, así como una paleta de colores similar.  

Empleamos el logotipo oficial de Pokémon Go y su principal o más conocido entrenador pokémon “Ash” para que se identifiqué desde el header de qué trata la página.

En las tarjetas individuales mostramos la imagen del pokemon y sus tipos a manera de íconos, como se realiza en la app original de Pokémon Go.

Como parte del estilo, al pasar el cursor por una de las tarjetas individuales (hover) estas aumentan su saturación y se les da un efecto de sombra al borde.

En el footer se muestra el copyright de la marca Pokémon Go, y lo que serían ligas a sus redes sociales, como tradicionalmente se muestran en este tipo sitios.

![](<./ImgREADME/Historia1.png>)

**Proceso de código**

Para esta HU, investigamos qué son los objetos y los arrays para poder extraer los elementos de interés de la data, así como poder mostrarlos en la sección main del HTML. Para dar estilo a estos elementos también investigamos el modelo de la caja en CSS, particularmente flex-box.

### 4.2 Historia de Usuario 2

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder filtrar en la página los personajes según categorías",
* Qué sigue: "para poder visualizar a detalle la info de cada pokémon que entre en la categoría que seleccioné".

**Criterios de Aceptación**
* Que funcione el botón de filtrado, desplegando categorías que se pueden elegir.
* Mostrar todos los personajes que contienen elementos que son parte de la categoría a filtrar elegida.

**Criterios de Terminado**
* Pasar test unitario de la función filtrado.
* Que en la pantalla se muestren los valores de los objetos que tengan la propiedad (la categoría) seleccionada con el botón de filtrado.
* Desplegar en GitHub Pages.

#### Prototipo baja fidelidad en Papel

Para esta Historia de Usuario se diseñaron los botones de filtrado (por región y por tipo) de tipo select. Una vez que se le da click a una opción se muestra el filtrado seleccionado.

![](<./ImgREADME/HU2papel.png>)

#### Prototipo de alta fidelidad (Figma)

Como parte del prototipo de alta fidelidad, plasmamos nuestra idea de forma más concisa.

En las opciones de cada select se encuentran los filtros por cada región (2 regiones) y por tipo pokémon (18 tipos diferentes).  Al pasar el cursor sobre alguna opción cambia el color del elemento mostrando que sobre ese está el cursor y al hacer click se muestra únicamente los pokemones que están dentro del filtro seleccionado.

Los pokemones se muestran en la misma tarjeta diseñada y codeada desde la Historia de Usuaria 1.

![](<./ImgREADME/Historia2.png>)

**Proceso de código**

Buscamos qué métodos podíamos emplear para poder filtrar la data de acuerdo a la opción que seleccionaba la usuaria. Encontramos el método filter () y fue el que empleamos en ambas funciones de filtrado.

### 4.3 Historia de Usuario 3

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder filtrar en la página los personajes al escribir su nombre en el buscador",
* Qué sigue: "para poder visualizar a detalle la info del pokémon que escribí".

**Criterios de Aceptación**
* Funcione botón buscar a partir del input text ingresado.
* Mostrar en pantalla el pokémon ingresado en input y sus detalles.

**Criterios de Terminado**
* Pasar test unitario de la función filtrado por nombre ingresado.
* Que en la pantalla se muestren los valores del pokémon ingresado por nombre en el input de texto.
* Desplegar en GitHub Pages.

#### Prototipo baja fidelidad en Papel

Para esta Historia de usuario, diseñamos una tarjeta con información más detallada (agregamos una descripción del pokémon, su generación y su región) de cada pokémon, pensando en que esta se mostrará cuando la usuaria busqué en el buscador por nombre a un pokémon en específico.

![](<./ImgREADME/HU3papel.png>)

#### Prototipo de alta fidelidad (Figma)

Plasmamos nuestra idea en el prototipo de alta fidelidad, respetando el diseño de la tarjeta a mostrar de nuestro prototipo en papel. Especificamos que el buscador sólo funcionará a partir del input del nombre de un pokémon.

Le dimos un color diferente a la región y generación para hacer resaltar esta nueva información, y de igual manera, le dimos un color de  fondo de acuerdo a nuestra paleta de colores a la pequeña descripción del pokémon.

![](<./ImgREADME/Historia3.png>)

**Proceso de código**

Para esta historia investigamos cómo filtrar con el método filter, teniendo como argumento un input text (el nombre del pokémon) de la usuaria, para mostrar únicamente la tarjeta del pokémon buscado.

### 4.4 Historia de Usuario 4

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder visualizar si el input de mi búsqueda no obtuvo ningún resultado en la página ",
* Qué sigue: "para poder corregir mi búsqueda o saber que no hay información respecto a lo que busqué".

**Criterios de Aceptación**
* Funcione botón buscar a partir del input (text) ingresado.
* Mostrar en pantalla mensaje de error que incluya el input de texto ingresado por la usuaria y un gif de error para darle estilo al mensaje.

**Criterios de Terminado**
* Que en la pantalla se muestre el mensaje de error : We found no matches for "input ingresado " try typing only the full name of a pokémon.
* Desplegar en GitHub Pages.

#### Prototipo baja fidelidad en Papel

Para esta Historia de usuario únicamente mostramos cómo se desplegaría el mensaje de error si no hay ningún “match” entre lo que la usuaria ingreso cómo input para búsqueda y los nombres de los pokémon presentes en la data.

Junto al texto pusimos que iría una imagen referente a que existe un error.

![](<./ImgREADME/HU4papel.png>)

#### Prototipo de alta fidelidad (Figma)

Dimos estilo al mensaje dentro de una caja con bordes llamativos y un color de letra que sobresale de la paleta de colores que usamos (no logramos plasmar en figma exactamente cómo quedó el estilo del borde en la página web). Asimismo, añadimos al final un gif que da cuenta de que hay un error en la búsqueda que ingresó la usuaria.

Dentro del mensaje se muestra el input que se escribió para que la usuaria note si tuvo un error de dedo o si no ingresó correctamente un nombre de pokémon.

![](<./ImgREADME/Historia4.png>)

**Proceso de código**

Tuvimos que crear una sección de html a mostrar cuando se detectara el error el input ingresado.En dicha sección encontramos la manera de retornar el mismo input ingresado dentro del mensaje de error.


### 4.5 Historia de Usuario 5

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder ORDENAR en la página los personajes según una opción de ordenado",
* Qué sigue: "para poder visualizar la data organizada de la forma seleccionada ".

**Criterios de Aceptación**
* Funcione botón ordenado por A-Z, Z-A, y, por orden ascendente y descendente de no. de pokedex.
* Mostrar en pantalla la data ordenada según la opción seleccionada.

**Criterios de Terminado**
* Pasar test unitario de la función ordenado A-Z, Z-A, descendente no. pokedex.
* Que en la pantalla se muestren los pokemones en el orden seleccionado.
* Desplegar en GitHub Pages.

#### Prototipo de baja fidelidad en papel

Para esta Historia de usuario agregamos el botón de ordenado con un despliegue de opciones de orden de A-Z, Z-A, y # Pokedex. Las tarjetas de los pokemones que se muestran en la sección de main se ordenan según la opción elegida (en el caso dibujado de A-Z).

![](<./ImgREADME/HU5papel.png>)

#### Prototipo de alta fidelidad (Figma)

En este prototipo le dimos estilo al select que despliega las opciones de ordenado, y agregamos la opción de ordenar en número pokedex descendente. Mostramos las mismas tarjetas pokémon individuales creadas desde un inicio, únicamente cambia el orden en que se presentan según la opción elegida.

![](<./ImgREADME/Historia5.png>)

**Proceso de código**

Investigamos el método de sort() para poder ordenar según los valores de la data a considerar a partir de la opción seleccionada, creando 4 funciones de orden (una por cada tipo).


### 4.6 Historia de Usuario 6

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder visualizar estadística "STAB, DPS y EPS" en una tarjeta por cada pokémon".
* Qué sigue: "para poder elegir mi estrategia de batalla ".

**Criterios de Aceptación**
* Añadir a la tarjeta pokémon datos de estadística (Ataque especial de los pokemones).
* Mostrar en pantalla las estadísticas de STAB, DPS y EPS.

**Criterios de Terminado**
* Pasar test unitario de las funciones de estadísticas.
* En la pantalla se muestran los datos de la estadística de ataques especiales dentro de la tarjeta pokémon.
* El código está en el upstream rama main.
* Desplegar en GitHub Pages.

#### Prototipo baja fidelidad en Papel

Para esta Historia de usuario modificamos la tarjeta pokémon a mostrar cuando se ingresa una búsqueda de pokémon por nombre. Agregamos una tabla en la que se muestran los cálculos relevantes para peleas pokémon (STAB, DPS, EPS) por pokémon seleccionado. Igualmente, agregamos información sobre su peso y tamaño.

Empleamos un reacomodo de información en la tarjeta a partir de feedback de usuarias (nuestras compañeras) para que se visualice de forma llamativa y cohesiva la información.

![](<./ImgREADME/HU6papel.png>)

#### Prototipo de alta fidelidad (Figma)

El prototipo de alta fidelidad sigue fielmente al prototipo en papel, únicamente se le agregó el número pokémon e íconos de peso y altura, así como estilo general y la paleta de colores a seguir a partir del acomodo decidido.

![](<./ImgREADME/Historia6.png>)

**Proceso de código**

Buscamos cómo convertir datos tipo string a números para poder realizar las operaciones, así como pasar los resultados a números redondeados para que fueran más agradables a la vista.

También hicimos uso de condicionales para que se aplicaran las operaciones correspondientes en los casos debidos (p.e. STAB se incluye únicamente si el tipo de ataque es igual al tipo de pokémon).

Por otra parte, buscamos cómo generar tablas dinámicas para que estas se vincularan y actualizaran a partir de las funciones de cálculo, mostrando en ellas los resultados obtenidos para cada dato de ataque especial.

### 4.7 Historia de Usuario 7

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder regresar al estado inicial de la página cuando concluya mi búsqueda o quiera limpiar filtros aplicados",
* Qué sigue: "para poder realizar una nueva forma de búsqueda o aplicar nuevos filtros".

**Criterios de Aceptación**
* Que al dar click en el logotipo de pokémon go, regrese a página principal.
* Que al dar click en botón clean (limpiar) se limpien todos los filtros y tipos de orden sobre la data.

**Criterios de Terminado**
* Dar funcionalidad de regresar a estado default de la página al dar click al logotipo (pokémon go) en header.
* Crear botón de limpiado que igualmente funciona al darle click y así regrese a estado default de la página web.
* Actualizar estas funcionalidades en rama main.
* Desplegar en GitHub  Pages.

#### Prototipo de alta fidelidad (Figma)

Para esta Historia de usuario realizamos de forma directa el prototipo de alta fidelidad, ya que únicamente agregamos un botón de limpiado (que se diferencia a partir de sus colores de los botones de filtrado y de orden).

![](<./ImgREADME/Historia7.png>)

**Proceso de código**

Para esta última Historia de usuario buscamos cómo, al dar click sobre el botón de limpiar o sobre el logotipo en el header, se volviera al estado inicial de la página.

## 5. Pruebas Unitarias

Para este proyecto, como parte de los objetivos de aprendizaje, diseñamos e implementamos nuestros propios test con la librería de Jest.

Investigamos sobre data mocks y los creamos; los data mocks son secciones específicas de la data o bien data artificial creada específicamente para testear el funcionamiento de nuestro código.

Igualmente, investigamos sobre lo que son los statements, branches, functions y lines, de los cuales se evalúa su cobertura en los test unitarios.

Dependiendo de qué funciones estábamos testeando se desarrollaron los test para la función en cuestión con su data mock específico, logrando abarcar así la cobertura del 100% de branches, statements, functions y lines. Con ello verificamos que nuestro código es realmente funcional para diferentes casos, haciendo pruebas para cada instrucción, condición, y función escrita.

![](<./ImgREADME/PruebasUnitarias.png>)

## 6. Vista final del proyecto

[Despliegue en GitHub Pages](https://karlacruz11.github.io/CDMX013-data-lovers/)

https://www.loom.com/share/c5c2cc6d9b0548ecb0f0c64078c94f88

## 7. Objetivos de Aprendizaje

### HTML

* [✔️] **Uso de HTML semántico: header, div, main, select | option, input, button, label, footer, tr y th**

### CSS

* [✔️] **Uso de selectores de CSS**

* [✔️] **Modelo de caja (box model): borde, margen, padding**

* [✔️] **Uso de flexbox en CSS**

### Web APIs

* [✔️] **Uso de selectores del DOM (getElementById)**

* [✔️] **Manejo de eventos del DOM (addEventListener)**

* [✔️] **Manipulación dinámica del DOM (replaceChildren, append, classList, createElement, innerHTML)**

### JavaScript

* [✔️] **Uso de Vainilla JS**

* [✔️] **Diferenciar entre tipos de datos primitivos y no primitivos**

* [✔️] **Arrays (uso de métodos como: filter, sort,includes, forEach)**

* [✔️] **Objetos (key, value)**

* [✔️] **Variables (declaración, asignación, ámbito)**

* [✔️ ] **Uso de condicionales (if-else, operador ternario, lógica booleana)**

* [✔️] **Uso de bucles/ciclos (for)**

* [✔️] **Funciones (params, args, return)**

* [✔️] **Pruebas unitarias (Jest: describe, expect, toBe,toEqual)**

* [✔️] **Módulos de ECMAScript (ES Modules: import y export)**

* [✔️] **Uso de linter (ESLINT)**

* [✔️] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

* [❌] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

  * Sólo encontramos que son las sentencias, no encontramos información de expresiones en pruebas unitarias.


### Control de Versiones (Git y GitHub)

* [✔️] **Git: Instalación y configuración**

* [✔️] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

* [✔️] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge)**

* [✔️] **GitHub: Creación de cuenta y repos**

* [✔️] **GitHub: Despliegue con GitHub Pages**

* [✔️] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity

* [✔️] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

* [✔️] **Crear prototipos de alta fidelidad que incluyan interacciones**

* [✔️] **Seguir los principios básicos de diseño visual**

### research

* [❌] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  * Sólo lo hicimos en una Historia de usuario, no replicamos durante el resto del proyecto.
