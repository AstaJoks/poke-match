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
  - [Ezgif](#ezgif)
- [Testing](testing)
  - [Functional Testing](#functional-testing)
  - [Manual Testing](#manual-testing)
  - [Lighthouse Testing](#lighthouse-testing)
  - [Validator Testing](#validator-testing)
  - [Accessibility test](#accessibility-test)
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
   - I want to have the option to folow my game progress in the highscore leaderboard.
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
   - On click, resets the game(flips all cards back face down and move counter to 0).

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555135/reset-button_uiuljv.webp" width="200px" height="auto"  alt="Reset-button"></p>

  ### Rules Section

   - Located in the home page with no external links or modals.
   - Informs the user in terms of how to play the game.

  <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555445/rules_aaeedm.webp" width="700px" height="auto"  alt="Rules Section"></p>

  ### Footer

   - Located at the bottom of the site.
   - Contains social media icons which link to site developer's LinkedIn profile and Github.
   - Links will open to a new tab to allow easy navigation for the user.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678555925/footer_xg02ro.webp" width="700px" height="auto"  alt="Footer"></p>

  ### Win Message

   - Final win message popup modal shows results of the game. It opens when game is finished.
   - New Game button acts identically as Reset Button(flips all cards back face down and move counter to 0) and close the win modal.

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

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561217/home-page_k065xx.webp" width="700px" height="auto"  alt="Wireframe Home Page"></p>

   - Win Modal

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561366/Win_-modal_omxxgn.webp" width="700px" height="auto"  alt="Wireframe Win Modal"></p>

   - 404 Page

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678561370/404-page_qkyc0w.webp" width="400px" height="auto"  alt="Wireframe 404 Page"></p>


  ### Colour Pallete

   - The main colour scheme follows the design of the Pokemon Logo, maintaining a dark blue and yellow (I used some shades of these two colours for shadows and borders):
     - Dark Blue: #020b58,
     - Light Yellow: #FCFA7B.

     <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678565603/colour_kcx9ow.webp" width="200px" height="auto"  alt="Colour Pallete"></p>

  ### Typography

   - Changa and Unbounded are the two fonts used throughout the whole website with Sans Serif/Cursive as the fallback fonts in case for any reason fonts aren't being imported into the site correctly.

[🔼 Back to top](#pokemon-memory-card-game)


## Technologies

  ### HTML

   - The structure of the website was developed using HTML as the main language.

  ### CSS

   - The Website was styled using custom CSS in an external file.

  ### JavaScript

   - For the logic of the game. To manipulate the HTML and CSS on the screen.

  ### Font Awesome

   - Icons obtained from https://fontawesome.com/ were used as sound button and the Social media links in the footer section.

  ### Favicon

   - Favicon files were created at https://favicon.io/favicon-converter/.

  ### Balsamiq

   - Wireframes were created using balsamiq from https://balsamiq.com/.

  ### Ezgif

   - https://ezgif.com was used to reduce the size of the images used throughout the website.

[🔼 Back to top](#pokemon-memory-card-game)


## Testing

  ### Functional Testing

<table>
  <tr>
    <th>Element</th>
    <th>Test</th>
    <th>Completed Succsessfully</th>
  </tr>
  <tr>
    <td>Sound Button</td>
    <td>1. Sound On/Off works as required. 2. Sound is Off by default</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Sound</td>
    <td>1. Flip sound plays when the card is clicked. 2. Win sound plays when the game is finished</td>
    <td>Yes (NOTE. Flip Sound does not work on Iphones. See Unfixed Bugs section)</td>
  </tr>
  <tr>
    <td>Game Board</td>
    <td>1. Cards appear face down at the start of the game. 2. On click, cards are turned face up/Matching pairs remain face up/Non-matching cards get flipped back face down.
    3. Selecting the card pairs successfully/unsuccessfully. 4. Clicking only 2 cards at once allowed</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Reset Button</td>
    <td>On click, resets the game(flips all cards back face down and move counter to 0)</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Social media Links</td>
    <td>Social media icons in the footer link to the correct external link and open in new tab</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Win Message</td>
    <td>Opens successfully when the game is finished</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>New Game Button</td>
    <td>Reset game and close the win modal</td>
    <td>Yes</td>
    </tr>
    <tr>
    <td>404 Page</td>
    <td>Is loading if the wrong or faulty URL is entered and redirecting to the Home Page</td>
    <td>Yes</td>
    </tr>
     <tr>
    <td>Find Them Here(Home Page) Button</td>
    <td>Link to Home page successfully</td>
    <td>Yes</td>
    </tr>
</table>

  ### Manual Testing

   - The website was tested on Google Chrome, Firefox, Microsoft Edge and Safari browsers.

   - The website was viewed on a variety of devices such as Desktop, Laptop, iPhone13, iPhone12 Pro, iPhone11, Samsung Galaxy NotePro...

   - All buttons were checked to ensure that they are working with no issues.

   - A large amount of testing was done to ensure that the game working with no bugs.

   - Friends and family members were asked to review the game and documentation to point out any bugs and/or user experience issues. 

  ### Lighthouse Testing

   The performance test was done with Lighthouse through Google Chrome Developer Tools, both for desktop and mobile devices on the Incognito browser.

   - Lighthouse test results for Desktop:

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678707141/lighthouse-desktop_r8nelo.jpg" width="500px" height="auto"  alt="Lighthouse-desktop"></p>

   - Lighthouse test results for Mobile:

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678707141/lighthouse-mobile_x0px0c.jpg" width="500px" height="auto"  alt="Lighthouse-mobile"></p>

  ### Validator Testing

   - HTML was validated using the official [W3C validator](https://validator.w3.org/)

     - On the first validation there were two warnings regarding sections that lack headings so these section were changed to div(no headings were needed).

     <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678577897/html-validator_j5vsgn.webp" width="500px" height="auto"  alt="HTML-validator"></p>

     - The most recent validation shows no errors.

     <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678578442/html-validator1_ohgiw9.webp" width="500px" height="auto"  alt="HTML-validator"></p>

   - CSS was validated using the official [Jigsaw CSS validator](https://jigsaw.w3.org/css-validator/)

     - No errors were found.

     <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678578543/css-validator_l19ges.webp" width="500px" height="auto"  alt="CSS-validator"></p>

   - JavaScript was validated using the official [JS Hint](https://jshint.com/)

     - Configure settings were changed to accept ES6 Javascript features.

     - No errors were returned.

     <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678576782/js-hint_z8elfx.webp" width="500px" height="auto"  alt="JS Hint"></p>

  ### Accessibility test

   - Accessibility of the site was tested with [WAVE](https://wave.webaim.org/).

   -  No errors were returned and no contrast issues were detected.

   <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678579307/WAVE_srwka9.webp" width="300px" height="auto"  alt="JS Hint"></p>
      

  ### Unfixed Bugs

  - During the Manual Testing it was discovered that flip sound does not working on iPhones(tested on iPhone7, iPhone11, iPhone12 Pro, iPhone13).

  - All sounds work perfectly on any other devices(It was tested on desktop, laptop, MackBook, Samsung Galaxy NotePro, Samsung Galaxy A22, A33, A80, Huawei P20, P30Pro, P40)

  - Warning on all pages apears due to the fact that GitHub pages disable FLoC, which is Google's 3rd party cookie alternative. 

    - Source: [GithubBlog](https://github.blog/changelog/2021-04-27-github-pages-permissions-policy-interest-cohort-header-added-to-all-pages-sites//).

    <p><img src="https://res.cloudinary.com/dcydt01ed/image/upload/v1678579794/warning_zta8gr.webp" width="500px" height="auto"  alt="Warning"></p>
   
[🔼 Back to top](#pokemon-memory-card-game)


## Deployment

  This project was developed using GitPod, which was then committed and pushed to GitHub using the GitPod terminal.

  ### Deploying on Github Pages

   To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

   - Log into GitHub or create an account.
   - Locate the GitHub Repository.
   - At the top of the repository, select Settings from the menu items.
   - Scroll down the Settings page to the "Pages" section.
   - Under "Source" click the drop-down menu labelled "None" and select "Main".
   - Upon selection, the page will automatically refresh meaning that the website is now deployed.
   - Scroll back down to the "Pages" section to retrieve the deployed link.

   The live link can be found [here](https://astajoks.github.io/pokemon-memory-card-game/)

  ### Forking the Repository

   You can fork the repository by following these steps:

   - Go to the GitHub repository.
   - Locate the Fork button on the top-right corner of the page and click on it.
   - Select an owner for the forked repository and give it a name.
   - Add a description of the repository if you want to.
   - Choose whether to copy only the default branch or all of the branches to the new fork (Only the default branch is copied by default).
   - Click Create fork.

  ### Cloning the Repository

   You can clone the repository by following these steps:

   - Log into GitHub.
   - Find the repository you want to clone.
   - To the left of the big green 'Gitpod' button, click the 'Code' dropdown menu.
   - Copy the HTTPS or SSH address as required.
   - Open Git Bash.
   - Set up your new directory.
   - Type "git clone the_SSH_or_https_address".
   - Hit enter and the code will be cloned.

[🔼 Back to top](#pokemon-memory-card-game)


## Credits

   ### Content

   - [Linear Gradient Background | Pure Css | HTML and Css Tutorial](https://www.youtube.com/watch?v=qxRQ233JgCA) - instructions of how to create gradient background for buttons was taken from here.
   - [Alien Memory Game](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game) - this repository was followed and some JavaScript code was taken and adapted to my game.
   - [Smiley Memories](https://github.com/tomdu3/smiley-memories) - this repository was followed and some JavaScript code was taken and adapted to my game.
   - [W3Schools](https://www.w3schools.com/) - was used as a general source of knowledge.
   - [Responsive Memory Game Using HTML & CSS & JavaScript](https://www.youtube.com/watch?v=7JbBr9q4UF8) - inspiration for memory card game was taken from this tutorial.

   ### Resources

   - [Code Institute](https://codeinstitute.net/ie/)
   - [Readme](https://readme.so/)
   - [Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/)

   - Images and Sounds:
      - [Pokemon Logo](https://pngimg.com/image/27645)
      - [Pokemon Logo for Fanicon](https://www.pngall.com/pokemon-logo-png/download/106687)
      - [Pokemon Logo for Win Message](https://www.pngmart.com/image/9493)
      - [Card Front Face](https://pnghunter.com/search/pokemon)
      - [Card Back Face](https://pnghunter.com/search/pokemon/page/4/)
      - [404 Page Image](https://www.pngmart.com/image/9961)
      - [Flip Sound](https://freesound.org/people/florian_reinke/sounds/63533/)
      - [Win Game Sound](https://freesound.org/people/Tuudurt/sounds/258142/)

[🔼 Back to top](#pokemon-memory-card-game)


## Acknowledgments

   - I would like to thank Tutors support at Code Institute for their support.
   - I would like to thank my Children for testing the game and my Husband for his support and patience.
   - Finally, I would like to thank my Mentor Gareth McGirr for his guidance and feedback throughout this portfolio project.

[🔼 Back to top](#pokemon-memory-card-game)


