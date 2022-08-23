# Data Lovers

## Índice

* [1. Preámbulo del proyecto](#1-preámbulo-del-proyecto)
* [2. Investigación de UX](#2-investigación-de-ux)
* [3. Trabajo Colaborativo](#3-trabajo-colaborativo)
* [4. Historias de Usuario](#4-historias-de-usuario)
  * [4.1 Historia de usuario 1](#41-historia-de-usuario-1)
  * [4.2 Historia de usuario 2](#42-historia-de-usuario-2)
  * [4.3 Historia de usuario 3](#43-historia-de-usuario-3)
  * [4.4 Historia de usuario 4](#44-historia-de-usuario-4)
  * [4.5 Historia de usuario 5](#45-historia-de-usuario-5)
  * [4.6 Historia de usuario 6](#46-historia-de-usuario-6)
  * [4.7 Historia de usuario 7](#47-historia-de-usuario-7)
* [5. Pruebas Unitarias](#5-pruebas-unitarias)
* [6. Objetivos de Aprendizaje](#6-objetivos-de-aprendizaje)
* [7. Vista Final de proyecto](#7-vista-final-de-proyecto)

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

Para la elaboración de este proyecto, primeramente acordamos horarios de trabajo colaborativo e individual. Para ello utilizamos la herramienta Trello, en la cual organizamos las tareas a realizar día con día, a lo largo de cada sprint, según las Historias de Usuaria diseñadas para alcanzar los objetivos de este proyecto.

Asimismo, categorizamos por etiquetas las tareas a realizar a partir de lo que engloba el proyecto (Figma, CSS, HTML, JavaScript, Jest).

Hicimos columnas de OA’s, project backlog, sprint backlog, doing, done, bloqueos y links [Trello](https://trello.com/b/Q65GSUH7/proyecto-2-data-lovers-pok%C3%A9mon).


## 4. Historias de Usuario

### 4.1 Historia de Usuario 1

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero que se muestre el nombre y la imagen de todos los pokémon en la página",
* Qué sigue: "para poder visualizar a detalle la info de cada pokémon una vez que lo seleccione".

**Criterios de Aceptación:**
* Mostrar todos los personajes (nombre, imagen, número y tipo en la UI).
* Scroll desde el primer elemento hasta el último.
* Que se muestren los personajes a manera de cuadrícula.

**Definición de terminado:**
* Se muestran los personajes en cuadrícula en la página (imagen, nombre, número y tipo).
* Pasar pruebas unitarias.

#### Prototipo baja fidelidad en Papel

Hicimos un prototipo por Historia de Usuaria.

Para está historia de usuario diseñamos un prototipo en el que únicamente mostramos parte de la data (imagen de pokémon, nombre, número de pokedex, y tipo). Estos datos se muestran a manera de cuadrícula y se les puede dar scroll de arriba-abajo.

   ![](<./ImgREADME/HU1papel.png>)

#### Prototipo de alta fidelidad (Figma)

En este prototipo se muestra el diseño del header, contenido main (tarjetas individuales por pokemon) y el footer.

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

Para esta Historia de Usuaria se diseñaron los botones de filtrado (por región y por tipo) de tipo select. Una vez que se le da click a una opción se muestra el filtrado seleccionado.

![](<./ImgREADME/HU2papel.png>)

#### Prototipo de alta fidelidad (Figma)

Como parte del prototipo de alta fidelidad, plasmamos nuestra idea de forma más concisa.

En las opciones de cada select se encuentran los filtros por cada región (2 regiones) y por tipo pokémon (18 tipos diferentes).  Al pasar el cursor sobre alguna opción cambia el color del elemento mostrando que sobre ese está el cursor y al hacer click se muestra únicamente los pokemones que están dentro del filtro seleccionado.

Los pokemones se muestran en la misma tarjeta diseñada y codeada desde la HU1.

![](<./ImgREADME/Historia2.png>)

**Proceso de código**

Buscamos qué métodos podíamos emplear para poder filtrar la data de acuerdo a la opción que seleccionaba la usuaria. Encontramos en método filter () y fue el que empleamos en ambas funciones de filtrado.

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

Para esta HU3, diseñamos una tarjeta con información más detallada (agregamos una descripción del pokémon, su generación y su región) de cada pokémon, pensando en que esta se mostrará cuando la usuaria busqué en el buscador por nombre a un pokémon en específico.

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

Para esta HU únicamente mostramos cómo se desplegaría el mensaje de error si no hay ningún “match” entre lo que la usuaria ingreso cómo input para búsqueda y los nombres de los pokémon presentes en la data.

Junto al texto pusimos que iría una imagen referente a que existe un error.

![](<./ImgREADME/HU4papel.png>)

#### Prototipo de alta fidelidad (Figma)

Dimos estilo al mensaje al ponerlo en una caja con bordes llamativos y un color de letra que sobresale dentro de la paleta de colores que usamos (no logramos plasmar en figma exactamente cómo quedó el estilo del borde en la página web). Asimismo, añadimos al final un gif que da cuenta de que hay un error en la búsqueda que ingresó la usuaria.

Dentro del mensaje se muestra el input que se escribió para que la usuaria noté si tuvo un error de dedo o si no ingresó correctamente un nombre de pokémon.

![](<./ImgREADME/Historia4.png>)

**Proceso de código**

Tuvimos que crear una sección de html a mostrar cuando se detectara el error el input ingresado. A la vez en esta sección tuvimos que encontrar la manera de retornar el mismo input ingresado dentro del mensaje de error.


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
* Desplegar en GitHub Pages

#### Prototipo de baja fidelidad en papel

Para esta HU agregamos el botón de ordenado con un despliegue de opciones de orden de A-Z, Z-A, y # Pokedex. Las tarjetas de los pokemones que se muestran en la sección de main se ordenan según la opción elegida (en el caso dibujado de A-Z).

![](<./ImgREADME/HU5papel.png>)

#### Prototipo de alta fidelidad (Figma)

En este prototipo le dimos estilo al select que despliega las opciones de ordenado, y agregamos la opción de ordenar en número pokedex descendente. Mostramos las mismas tarjetas pokemon individuales creadas desde un inicio, únicamente cambia el orden en que se presentan según la opción elegida.

![](<./ImgREADME/Historia5.png>)

**Proceso de código**

Investigamos el método de sort() para poder ordenar según los valores de la data a considerar a partir de la opción seleccionada, creando 4 funciones de orden (una por cada tipo).


### 4.6 Historia de Usuario 6

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder visualizar estadística "STAB, DPS y EPS" en una tarjeta por cada pokemon".
* Qué sigue: "para poder elegir mi estrategia de batalla ".

**Criterios de Aceptación**
* Añadir a la tarjeta pokémon datos de estadística (Ataque especial de los pokemones)
* Mostrar en pantalla las estadísticas de STAB, DPS y EPS.

**Criterios de Terminado**
* Pasar test unitario de las funciones de estadísticas.
* En la pantalla se muestran los datos de la estadística de ataques especiales dentro de la tarjeta pokémon.
* El código está en el upstream rama main.
* Desplegar en GitHub Pages.

#### Prototipo baja fidelidad en Papel

Para esta  HU modificamos la tarjeta pokémon a mostrar cuando se ingresa una búsqueda de pokémon por nombre. Agregamos una tabla en la que se muestran los cálculos relevantes para peleas pokémon (STAB, DPS, EPS) por pokémon seleccionado. Igualmente, agregamos información sobre su peso y tamaño.

Empleamos un reacomodo de información en la tarjeta a partir de feedback de usuarias (nuestras compañeras) para que se visualice de forma llamativa y cohesiva la información.

![](<./ImgREADME/HU6papel.png>)

#### Prototipo de alta fidelidad (Figma)

El prototipo de alta fidelidad sigue fielmente al prototipo en papel, únicamente se le agregó el número pokémon e íconos de peso y altura, así como estilo general y la paleta de colores a seguir a partir del acomodo decidido.

![](<./ImgREADME/Historia6.png>)

**Proceso de código**

Buscamos cómo convertir datos tipo string a números para poder realizar las operaciones, así como pasar los resultados a números redondeados para que fueran más agradables a la vista.

También hicimos uso de condicionales para que se aplicaran las operaciones correspondientes en los casos debidos (p.e. STAB se incluye únicamente si el tipo de ataque es igual al tipo de pokémon).

Por otra parte, buscamos cómo generar tablas dinámicas para que estas se vincularan y actualizarán a partir de las funciones de cálculo, mostrando en ellas los resultados obtenidos para cada dato de ataque especial.

### 4.7 Historia de Usuario 7

**CARD**
* Quién está haciendo qué: "Yo como usuaria entrenadora virtual de pokémon",
* Qué se hizo: "quiero poder regresar al estado inicial de la página cuando concluya mi búsqueda o quiera limpiar filtros aplicados".
* Qué sigue: "para poder realizar una nueva forma de búsqueda o aplicar nuevos filtros".

**Criterios de Aceptación**
* Que al dar click al logotipo de pokemon go, regrese a página principal.
* Que al dar click en botón de clean (limpiar) se limpien todos los filtros y tipos de orden sobre la data.

**Criterios de Terminado**
* Dar funcionalidad de onclick de regresar a estado default de la página al logotipo (pokemon go) en header.
* Crear botón de limpiado que igualmente funciona al darle click y así regrese a estado default de la página web.
* Actualizar estas funcionalidades en rama main.
* Desplegar en GitHub  Pages.

#### Prototipo de alta fidelidad (Figma)

Para esta HU realizamos de forma directa el prototipo de alta fidelidad ya que únicamente agregamos un botón de limpiado (que se diferenciara a partir de sus colores de los botones de filtrado y de orden).

![](<./ImgREADME/Historia7.png>)

**Proceso de código**

Para esta última HU buscamos cómo, al dar click sobre el botón de limpiar o sobre el logotipo en el header, se volviera al estado inicial de la página.

## 5. Pruebas Unitarias

Para este proyecto como parte de los objetivos de aprendizaje, diseñamos e implementamos nuestros propios test con la librería de Jest.

Investigamos sobre data mocks y los creamos; los data mocks son secciones específicas de la data o bien data artificial creada específicamente para testear el funcionamiento de nuestro código.

Igualmente, investigamos sobre lo que son los statements, branches, functions y lines de los cuales se evalúa su cobertura en los test unitarios.

Dependiendo de qué funciones estábamos testeando se desarrollaron los test para la función en cuestión con su data mock específico, logrando abarcar así la cobertura del 100% de branches, statements, functions y lines. Con ello verificamos que nuestro código es realmente funcional para diferentes casos, haciendo pruebas para cada instrucción, condición, y función escrita.

![](<./ImgREADME/PruebasUnitarias.png>)

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### user-centricity

- [ ] **Diseñar un producto o servicio poniendo a la usuaria en el centro**

### product-design

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### research

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>



## 5. Criterios de aceptación del proyecto

Llamamos "Criterios de aceptación" a todas aquellas características que debe tener
un proyecto para ser "aceptado" como válido. En este caso se consideran las Historias
de Usuario 1, 2 y 3.

Así mismo, cada Historia de Usuario tiene
sus los suyos propios. Los CA deben ser caracerísticas obersvables, concretas, jamás generalidades del tipo "amigable con el usuario" (¿qué significa eso exactamente?).

### Historias de usuario

Generalmente, las [Historias de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) son el resultado de un proceso de
investigación o _research_ de las usuarias y de algunas necesidades específicas del
producto/negocio.

Una vez que entiendas las necesidades de tus usuarias, _completa_ las Historias
de Usuario que te proveemos predefinidas para que representen exactamente todo lo
que decidas implementar.

Asegúrate de completar los _Criterios de Aceptación_ y la _Definición de Terminado_ (_definition of done_) y para cada una.

Termina una historia de usuario antes de pasar a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

#### [Historia de usuario 1]

Yo como usuario [visitante del sitio] quiero poder VER todos los personajes/películas/deportistas para familiarizarme.

**Criterios de Aceptación. Edita/agrega de acuerdo a tu implementación exactamente:**

>* La UI es responsive (teléfonos y PC).
>* Todos los personajes/películas/deportistas aparecen en una misma vista, en forma
>de grilla (cuadrícula) sin ningún orden en particular.
>* La vista no tiene paginación, se hace scroll desde el primer elemento hasta el último.
>* Cada cuadrícula contiene:
>
>>* Nombre de personaje/película/deportista.
>>* [XXX]
>>
>* Al hacer _click/tap_ en cada cuadrícula sucede [XXX].
>
>* La UI es exactamente igual al prototipo de alta fidelidad (colores, tamaños de bloques,tipo de letra, tamaño de letra, imágenes, etc. )

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente**

>* Todo el código está en la rama principal/main del repositorio.
>
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 2]

Yo como usuario [visitante del sitio] quiero poder FILTRAR los personajes/películas/deportistas según lo que me interesa ver en particular.

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente**

>* La UI es responsive (teléfonos y PC).
>* La UI contiene elementos para filtrar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para filtrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente**

>* Hay un test unitario para la función de filtrado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 3]

Yo como usuario [visitante del sitio] quiero poder ORDENAR los personajes/películas/deportistas por sus nombres de manera alfabéticamente ascendente (A-Z) y descendente (Z-A).

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente:**

>* La UI es responsive (teléfonos y PC)
>* La UI contiene elementos para ordenar los datos (flechas, radios, desplegables u otros).
>* Al seleccionar valores de los elementos para ordenar, en la parte inferior de la página aparece solamente el contenido ordenado según el criterio seleccionado.

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente:**

>* Hay un test unitario para la función de ordenado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 4]

Yo como usuario [visitante del sitio] quiero poder BUSCAR los personajes/películas/deportistas según lo que me interesa ver en particular.

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente:**

>* La UI es responsive (teléfonos y PC)
>* La UI contiene elementos para filtrar los datos (desplegables u otros).
>* Al seleccionar valores de los elementos para filtrar, en la parte inferior de la página aparece solamente el tipo de contenido filtrado.

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente:**

>* Hay un test unitario para la función de búsqueda. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

#### [Historia de usuario 5]

Yo como usuario [visitante del sitio] quiero poder ver estadísticas de [XXX].

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente:**

>* Escribe los criterios de aceptación

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente:**

>* Escribe la definición de terminado

#### [Historia de usuario 6]

A veces queremos agregar alguna característica que no necesariamente se puede
expresar como una Historia de Usuario. En esos casos se les suele llamar PBI
(product Backlog Item o elemento del backlog).

**Ejemplo:**

`js
Crea un PBI que implique consumir la data de forma dinámica, cargando un archivo
JSON por medio de`fetch`.
La carpeta`src/data` contiene una versión `.js` y una `.json` de de cada set datos.
`

#### [Historia de usuario 7]

Escribe una historia de usuario que implique agregarle visualizaciones gráficas a
tu interfaz de usuario. Para ello te recomendamos explorar librerías de gráficas
como [Chart.js](https://www.chartjs.org/) o [Google Charts](https://developers.google.com/chart/).

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente:**

>* Escribe los criterios de aceptación

**Definición de Terminado. Edita/agrega de acuerdo a tu implementación exactamente:**

>* Escribe la definición de terminado

#### [Historia de usuario 8]

Crea un PBI que implique 100% de Coverage.

---

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#6-hacker-edition) más arriba.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── EXTRA.md
├── README.md
├── package.json
├── src
|  ├── data (según con qué data trabajes)
|  |  ├── lol
|  |  |  ├── lol.js
|  |  |  ├── lol.json
|  |  |  └── README.md
|  |  ├── pokemon
|  |  |  ├── pokemon.js
|  |  |  ├── pokemon.json
|  |  |  └── README.md
|  |  └── rickandmorty
|  |  |  ├── rickandmorty.js
|  |  |  ├── rickandmorty.json
|  |  |  └── README.md
|  |  └── athletes
|  |  |  ├── athletes.js
|  |  |  ├── athletes.json
|  |  |  └── README.md
|  |  └── ghibli
|  |  |  ├── ghibli.js
|  |  |  ├── ghibli.json
|  |  |  └── README.md
|  ├── data.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.spec.js

directory: 7 file: 20
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

En este archivo encontrarás una serie de _imports_ _comentados_. Para _cargar_
las diferentes fuentes de datos tendrás que _descomentar_ la línea
correspondiente.

Por ejemplo, si "descomentamos" la siguiente línea:

```js
// import data from './data/lol/lol.js';
```

La línea quedaría así:

```js
import data from './data/lol/lol.js';
```

Y ahora tendríamos la variable `data` disponible en el script `src/main.js`.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda
a obtener, procesar y manipular datos (tus funciones). Por ejemplo:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que
decidas depende de tu propia implementación.

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#6-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## 7. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Data Lovers](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)
