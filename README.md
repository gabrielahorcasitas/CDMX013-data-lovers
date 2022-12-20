# Data Lovers

## Index

* [1. Project Summary](#1-project-summary)
* [2. UX Research](#2-ux-research)
* [3. Teamwork](#3-teamwork)
* [4. User Stories](#4-user-stories)
  * [4.1 User Story 1](#41-user-story-1)
  * [4.2 User Story 2](#42-user-story-2)
  * [4.3 User Story 3](#43-user-story-3)
  * [4.4 User Story 4](#44-user-story-4)
  * [4.5 User Story 5](#45-user-story-5)
  * [4.6 User Story 6](#46-user-story-6)
  * [4.7 User Story 7](#47-user-story-7)
* [5. Unit Tests](#5-unit-tests)
* [6. Final Version](#6-final-version)
* [7. Credits](#7-credits)


***

## 1.  Project Summary

The objective of this project was to learn how to manipulate a data set to make it accessible through a useful web page for specific users.

The heart of the project consisted of showing, filtering, and ordering the elements that make up the database, as well as making calculations from the same data.

As a duo we chose the theme of Pokémon Go, so the manipulated data set revolves around data on aspects of fighting, size, region, type, etc., of 251 pokemons.

## 2. UX Research

The target users of the website are those interested in obtaining information about the pokemons found in the Pókemon Go videogame.

The data displayed on this web page allows the user to familiarize themselves with relevant information for their experience as a virtual trainer of Pokémon Go, specifically about the 251 pokemon of the first two Pokémon generations.

Among the data of interest that can be displayed are the statistics of special attacks of each Pokémon.

The statistics shown are about the STAB (Same Type Attack Bonus), the DPS (Damage Per Second) or damage per second, and about the EPS (Energy Per Second) which is the energy spent by a pokemon attack in a fight.

This information will help the user to know which fighting strategy to implement in their Pokémon Go games, according to the opposing Pokémon and the Pokémon champion  chosen for the battle.

## 3. Teamwork

For the elaboration of this project, we first agreed on collaborative and individual work schedules. For this we use the tool [Trello Pokémon](https://trello.com/b/Q65GSUH7/proyecto-2-data-lovers-pok%C3%A9mon), in which we organize the tasks to be carried out day by day, throughout each sprint, based on User Stories designed to achieve the goals of this project.

Likewise, we categorize the tasks to be carried out by tags based on what the project encompasses (Figma, CSS, HTML, JavaScript, Jest).

On the Trello board we made columns of OA's, project backlog, sprint backlog, doing, done, blocks and links.


## 4. User Stories

* [Prototypes in Figma](https://www.figma.com/file/4ObJY2nEcJBYkfOtJ36xZB/Data-Lovers-Pokemon?node-id=0%3A1)

### 4.1 User Story 1

**CARD**
* Who is doing what: "Me as a Pókemon virtual trainer",
* What was done: "want to display the name and image of all pokemon on the page",
* What's next: "to be able to view in detail the information of each pokémon once I select it".

**Criteria of Acceptance**
* Display all characters (name, image, number and type in the UI).
* Scroll from the first element to the last.
* Show the characters as a grid.

**Completion Criteria**
* Characters are displayed in a grid on the page (image, name, number and type).
* Pass unit tests.

#### Low Fidelity Prototype

We made a prototype for each user story.

For this user story we designed a prototype in which we only show part of the data (pokemon image, name, pokedex number, and type). These data are displayed as a grid and can be scrolled up and down.

   ![](<./ImgREADME/HU1papel.png>)

#### High Fidelity Prototype (Figma)

This prototype shows the layout of the header, main content (individual cards per pokemon) and footer.

We selected a style based on Nintendo's Pokémon game, considering a text font used in the videogame, as well as a similar color palette.

We use the official logo of Pokémon Go and its main or best known Pokémon trainer "Ash" so that it can be identified from the header of what the page is about.

On the individual cards we show the image of the pokemon and its types as icons, just as it is done in the original Pokémon Go app.

As part of the style, hovering over one of the individual cards increases their saturation and gives them a shadow effect on the edge.

The footer shows the copyright of the Pokémon Go brand, and what would be links to their social networks, as they are traditionally displayed on these types of sites.

![](<./ImgREADME/Historia1.png>)

**Coding Process**

For this user story, we investigate what objects and arrays are in order to extract the elements of interest from the data, as well as display them in the main section of the HTML. To style these elements we also investigated the CSS box model, particularly flex-box.

### 4.2 User Story 2

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to filter the characters according to categories on the page",
* What's next: "to be able to visualize in detail the information of each pokémon that enters the category that I selected".

**Criteria of Acceptance**
* That the filter button works, displaying categories that can be chosen.
* Show all the characters that contain elements that are part of the chosen category to filter.

**Completion Criteria**
* Pass unit test of the filtering function.
* That the values of the objects that have the property (the category) selected with the filter button be shown on the screen.
* Deploy to GitHub Pages.

#### Low Fidelity Prototype

For this user story, the filter buttons (region and type) were designed. Once an option is clicked, the selected filtering is displayed.

![](<./ImgREADME/HU2papel.png>)

#### High Fidelity Prototype (Figma)

As part of the hi-fi prototype, we put our idea into a more concise form.

In the options of each select are the filters for each region (2 regions) and for pokemon type (18 different types). Hovering the cursor over any option changes the color of the element showing that the cursor is on it and clicking shows only the pokemons that are within the selected filter.

The pokemons are shown on the same card designed and coded from User Story 1.

![](<./ImgREADME/Historia2.png>)

**Coding Process**

We looked for what methods we could use to be able to filter the data according to the option that the user selected. We found the filter() method and it was the one we used in both filter functions.

### 4.3 User Story 3

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to filter the characters on the page by typing their name in the search engine",
* What's next: "to be able to visualize in detail the info of the pokémon that I wrote".

**Criteria of Acceptance**
* That the search button for the entered input text functions.
* Show on the screen the pokémon entered in input and its details.

**Completion Criteria**
* Pass unit test of the function filtered by name entered.
* That the values of the pokémon entered by name in the text input be shown on the screen.
* Deploy to GitHub Pages.

#### Low Fidelity Prototype

For this user story, we designed a card with more detailed information (we added a description of the pokémon, its generation and its region) of each pokemon, thinking that this would be displayed when the user searched for a specific pokémon by name in the search engine .

![](<./ImgREADME/HU3papel.png>)

#### High Fidelity Prototype (Figma)

We capture our idea in the high-fidelity prototype, respecting the design of the card to be shown from our prototype on paper. We specify that the search engine will only work from the input of the name of a pokemon.

We gave the region and generation a different color to make this new information stand out, and likewise, we gave the small description of the pokemon a background color according to our color palette.

![](<./ImgREADME/Historia3.png>)

**Coding Process**

For this story we investigate how to use the filter method having as an argument an input text (the name of the pokémon) from the user, to show only the card of the searched pokémon.

### 4.4 User Story 4

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to see if my search input did not get any results on the page ",
* What's next: "so I can correct my search or know that there is no information regarding what I searched for."

**Criteria of Acceptance**
* Functionality of the search button for the text input entered.
* Show error message on the screen that includes the text input entered by the user and an error gif to style the message.

**Completion Criteria**
* That the error message is shown on the screen: We found no matches for "input entered " try typing only the full name of a pokémon.
* Deploy to GitHub Pages.

#### Low Fidelity Prototype

For this user story we only show how the error message would be displayed if there was no "match" between what the user entered as search input and the names of the pokémon present in the data.

Next to the text we put an image referring to an error.

![](<./ImgREADME/HU4papel.png>)

#### High Fidelity Prototype (Figma)

We styled the message inside a box with bold borders and a font color that stands out from the color palette we used (we couldn't exactly capture in figma how the border style would look on the webpage). Likewise, we added a gif at the end that shows that there is an error in the search that the user entered.

Inside the message, the input that was written is shown so that the user notices if they had a finger error or if they did not enter a pókemon name correctly.

![](<./ImgREADME/Historia4.png>)

**Coding Process**

We had to create a section to show the entered input when the error is detected. In this section we find the way to return the same input entered within the error message.

### 4.5 User Story 5

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to sort the characters on the page according to a sort option",
* What follows: "to be able to visualize the data organized in the selected way".

**Criteria of Acceptance**
*Give functionality to the sort button by A-Z, Z-A, and by ascending and descending order of number of pokedex.
* Show on the screen the data ordered according to the selected option.

**Completion Criteria**
* Pass unit tests.
* That the pokemons are shown on the screen in the selected order.
* Deploy to GitHub Pages.

#### Low Fidelity Prototype

For this user story we added the sort button with a display of A-Z, Z-A, and # Pokedex sort options. The pókemon cards shown in the main section are ordered according to the option chosen (in the example drawn from A-Z).

![](<./ImgREADME/HU5papel.png>)

#### High Fidelity Prototype (Figma)

In this prototype we styled the select button that displays the sort options, and added the option to sort by descending pokedex number. We show the same individual pókemon cards created from the beginning, only the order in which they are presented changes according to the option chosen.

![](<./ImgREADME/Historia5.png>)

**Coding Process**

We investigate the sort() method to be able to order according to the data values to be considered from the selected option, creating four order functions (one for each type).

### 4.6 User Story 6

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to display "STAB, DPS and EPS" statistics on a card for each pókemon",
* What's next: "so I can choose my battle strategy".

**Criteria of Acceptance**
* Add to pokemon card stat data.
* Display STAB, DPS and EPS stats on screen.

**Completion Criteria**
* Pass unit test of the statistics functions.
* The statistics of special attacks is inside the pókemon card be shown on the screen.
* The code is in the upstream main branch.
* Deploy to GitHub Pages.

#### Low Fidelity Prototype

For this user story we modified the pokemon card to display when entering a search for pókemon by name. We added a table showing the relevant calculations for pokemon fights (STAB, DPS, EPS) per selected pókemon. Also, we add information about weight and size of the pókemon.

We use a rearrangement of information on the card based on feedback from users (our colleagues) so that the information is displayed in a striking and cohesive way.

![](<./ImgREADME/HU6papel.png>)

#### High Fidelity Prototype (Figma)

The high-fidelity prototype faithfully follows the prototype on paper, only the pókemon number, weight and height icons, as well as the general style and the color palette to follow from the decided arrangement were added.

![](<./ImgREADME/Historia6.png>)

**Coding Process**

We investigate how to convert string type data to numbers to be able to perform the statistical operations, as well as pass the results to rounded numbers to make them more pleasing to the eye.

We also made use of conditionals so that the corresponding operations were applied in the appropriate cases (eg STAB is only included if the attack type is equal to the pokemon type).

On the other hand, we looked for how to generate dynamic tables so that they could be linked and updated from the calculation functions, showing in them the results obtained for each special attack data.

### 4.7 User Story 7

**CARD**
* Who is doing what: "Me as a pokemon virtual trainer user",
* What was done: "want to be able to return to the initial state of the page when I finish my search or want to clear applied filters",
* What's next: "to be able to perform a new search form or apply new filters".

**Criteria of Acceptance**
* Return to the main page by clicking on the pókemon go logo at the header.
* That when clicking on the clean button, all the filters and types of sort on the data are cleaned.

**Completion Criteria**
* Provide the functionality for return to the default state of the page by clicking on the logo in the header.
* Create a clean button that also works when clicked and thus returns to the default state of the web page.
* Update these features in main branch.
* Deploy to GitHub Pages.

#### High Fidelity Prototype (Figma)

For this user story we made the high-fidelity prototype directly, since we only added a clean button (which differs from the filter and order buttons by its colors).

![](<./ImgREADME/Historia7.png>)

**Coding Process**

For this last user story, we looked for how, when clicking on the clean button or on the logo in the header, the page returned to the initial state.

## 5. Unit Tests

For this project, as part of the learning objectives, we designed and implemented our own tests with Jest.

We research data mocks and create them; data mocks are specific sections of the data or artificial data created specifically to test the operation of our code.

Likewise, we investigate what the statements, branches, functions and lines are, of which their coverage is evaluated in the unit tests.

Depending on which functions we were testing, the tests were developed for the function in question with its specific data mock, thus managing to cover 100% coverage of branches, statements, functions and lines. With this we verify that our code is really functional for different cases, doing tests for each instruction, condition, and written function.

![](<./ImgREADME/PruebasUnitarias.png>)

## 6. Final Version

[Deploy at GitHub Pages](https://karlacruz11.github.io/CDMX013-data-lovers/)

https://www.loom.com/share/c5c2cc6d9b0548ecb0f0c64078c94f88

## 7. Credits

This project was developed by Gabriela Cristina Horcasitas Moreno and Karla Paola Cruz Pérez.

