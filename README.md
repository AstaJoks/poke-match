# Pokemon Memory Card Game

This website was designed and developed as a simple pokemon themed flip card memory game that can be enjoyed by people of all ages.
It is a particularly good game for young children, though adults may find it challenging and stimulating too.
Website is responsive in all major screen devices as desktop, laptop, tablet and smartphone.

Developed by Asta Jokstiene for Code Institute Project Portfolio 2 using HTML, CSS and JavaScript.

![Responsive Mockup](https://res.cloudinary.com/dcydt01ed/image/upload/v1678498712/responsive-mockup_wos1qy.webp)
 [Pokemon Memory Card game - Live Webpage](https://astajoks.github.io/pokemon-memory-card-game/) (Right-click to open in a new tab) 


## Contents
  - [Project Goal](#project-goal)
  - [Site Owner's Goals](#site-owners-goals)
  - [Users Goals](#users-goals)
- [User Stories](#user-stories)
  - [First Time User](#first-time-user)
  - [Returning User](#returning-user)
- [Features](#features)
  - [Header](#header)
  - [Sound Button](#sound-button)
  - [Game Area](#game-area)
  - [Move Counter](#move-counter)
  - [Reset Button](#reset-button)
  - [Rules Section](#rules-section)
  - [Footer ](#footer)
  - [Win Message](#win-message)
  - [404 Page](#404-page)
  - [Favicon](#favicon)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Design](#design)
  - [Wireframes](#wireframes)
  - [Colour Pallete](#colour-pallete)
  - [Typography](#typography)
- [Technologies](#technologies)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
  - [Font Awesome](#font-awesome)
  - [Favicon](#favicon)
  - [Balsamiq](#balsamiq)
- [Testing](testing)
  - [Functional Testing](#functional-testing)
  - [Manual Testing](#manual-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
  - [Deploying on GitHub Pages](#deploying-on-github-pages)
  - [Forking the Repository](#forking-the-repository)
  - [Cloning the Repository](#cloning-the-repository)
- [Credits](#credits)
  - [Content](#content)
  - [Resources](#resources)
- [Acknowledgments](#acknowledgments)

## Project Goal

   - To create interactive game with clear content, that is user friendly, fun and challenging.

  ### Site Owner's Goals

   - To provide fun and interactive content.
   - To provide a fully responsive game which can be played on a range of devices.
   - To make design simple and user-friendly.
  
  ### Users Goals
   - To play a fun and interactive online memory card game.
   - To have clear instructions about the rules of the game.
   - To be able to restart the game at any point while I am playing the game.
   - To get the notice/congratulation message when the game is finished.

[🔼 Back to top](#pokemon-memory-card-game)


## User Stories

  ### First time User

   - I want to understand what the game is about.
   - I want the game rules to be easy to understand.
   - I want the game to be fun and interactive.
   - I want to be able to see the progress I'm making throughout the game.
   - I want to be able to get in touch with developer.
   - I want the game to be responsive no matter what device is played on.

  ### Returning User

   - I want the game to be fun and interesting so I can recommend it to my friends.
   - I want to to have the option to folow my game progress in the highscore leaderboard.
   - I want to have more options to get in touch with developer.

[🔼 Back to top](#pokemon-memory-card-game)
  
  
## Features


  ### Header

   - Header displays Pokemon Logo and the heading to introduce the game theme.
   - Located at the top of the site.
  
   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678551291/header_mghxqa.webp" width="500px" height="auto"  alt="Header"></p>
  
  ### Sound Button

   - Located at the header.
   - Enables user to play flipping sound when the card is clicked and have game win sound when the game is finished.
   - Sound is off by default when the website is loaded.
   - User can turn it on/off during the game.
  
   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678551754/sound-button_bl247l.webp" width="200px" height="auto"  alt="Sound Button"></p>

  ### Game Area

   - The main feature of the site.
   - A grid of 16 cards (8 matching pairs), depicting different Pokemons.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678553099/cards-front-pokemons_o7i2ki.webp" width="300px" height="auto"  alt="Cards Front Pokemons"></p>

   - The back face of all cards is the same, depicting a Pokeball(There is a pokemon inside it).

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678553662/pokeball_dekdyn.webp" width="300px" height="auto"  alt="Cards Back Pokeball"></p>

   - Cards appear face down at the start of the game.
   - On click, cards are turned face up. Matching pairs remain face up. Non-matching cards get flipped back face down.
  
   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678552661/game-grid_c6ormy.webp" width="300px" height="auto"  alt="Game Grid"></p>
  
  ### Move Counter

   - Moves counter increments by 1 every time the user clicks non-maching cards.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555038/move-counter_s44bkl.webp" width="200px" height="auto"  alt="Move Counter"></p>

  ### Reset Button

   - Located below the game grid and move counter.
   - On click, resets the game(flips all cards back face down) and move counter to 0.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555135/reset-button_uiuljv.webp" width="200px" height="auto"  alt="Reset-button"></p>

  ### Rules Section

   - Located in the home page with no external links or modals.
   - Informs the user in terms of how to play the game.

  <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555445/rules_aaeedm.webp" width="700px" height="auto"  alt="Rules Section"></p>

  ### Footer

   - Located at the bottom of the site.
   - Contains social media icons which link to site developer's LinkedIn profile and Github.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555925/footer_xg02ro.webp" width="700px" height="auto"  alt="Footer"></p>

  ### Win Message

   - Final win message popup modal shows results of the game. It opens when game is finished.
   - New Game button acts identically as Reset Button(On click, resets the game flips all cards back face down and move counter to 0) and close the win modal.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678556808/winn-message_axb95c.webp" width="500px" height="auto"  alt="Win Message and New Game Button"></p>

  ### 404 Page

   - The 404 Page lets the user know that there is an error with their request and guides them to the home page.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678558071/404_page_nu9znm.webp" width="500px" height="auto"  alt="404 Page"></p>

  ### Favicon

   - A site wide favicon is implemented with the Pokemon Logo.
   - This will provide an image in the tabs header to allow the user to easily identify the website if they have multiple tabs open.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678556058/favicon_sylybr.webp" width="300px" height="auto"  alt="Favicon"></p>


  ### Existing Features

   - Responsive design.
   - Interactive elements.

  ### Features Left to Implement

   - Add the varying levels of difficulty:
     - Enable the user to choose between different levels of difficulty.
     - The higher the skill level, the more cards in the grid.
   - Add the timer to clock the player's score, encouraging the player to beat their time in each round.
   - Incorporating a "high scores" page would increase interest in the game. The page might include the player's username, number of moves and time it took to win the game.

[🔼 Back to top](#pokemon-memory-card-game)

## Design

  ### Wireframes

   - Home Page

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561217/home-page_k065xx.webp" width="700px" height="auto"  alt="Wireframe-homme-page"></p>

   - Win Modal

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561366/Win_-modal_omxxgn.webp" width="700px" height="auto"  alt="Wireframe-homme-page"></p>

   - 404 Page

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561370/404-page_qkyc0w.webp" width="400px" height="auto"  alt="Wireframe-homme-page"></p>


  ### Colour Pallete

   - The main colour scheme follows the design of the Pokemon Logo, maintaining a dark blue and yellow (used some shades of these two colours for shadows and borders):
     - Dark Blue: #020b58,
     - Light Yellow: #FCFA7B.

    <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678565603/colour_kcx9ow.webp" width="200px" height="auto"  alt="Wireframe-homme-page"></p>

  ### Typography

   - Changa and Unbounded are the two fonts used throughout the whole website with Sans Serif/Cursive as the fallback fonts in case for any reason fonts aren't being imported into the site correctly.

[🔼 Back to top](#pokemon-memory-card-game)


## Technologies

  ### HTML

   - The structure of the website was developed using HTML as the main language.

  ### CSS

   - The Website was styled using custom CSS in an external file.

  ### JavaScrip

   - For the logic of the game. To manipulate the HTML and CSS on the screen.

  ### Font Awesome

   - Icons obtained from https://fontawesome.com/ were used as sound button and the Social media links in the footer section.

  ### Favicon

   - Favicon files were created at https://favicon.io/favicon-converter/.

  ### Balsamiq

   - Wireframes were created using balsamiq from https://balsamiq.com/.

  ### Ezgif

   - https://ezgif.com was used to convert(from png to webp) images and reduce their size.

[🔼 Back to top](#pokemon-memory-card-game)



