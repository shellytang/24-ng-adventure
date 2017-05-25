![cf](https://i.imgur.com/7v5ASc8.png) Lab 29 - ngAdventure
======

## To Submit this Assignment
  * create a fork of this repository
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Include
  * `.eslintrc`
  * `.babelrc`
  * `.gitignore`
  * `package.json`
    * create an npm `watch` script for running `webpack-dev-server --inline --hot`
  * **ignore the build directory**
  * `webpack.config.js`
  * app/component
  * app/component/`your-component-name`
  * app/service
  * app/scss
  * app/entry.js
  * app/index.js
  * app/scss/base.scss

## Requirements
#### Features Tasks
For this assignment you'll be creating a text based adventure game.  

  * Complete the application by finishing the logic for the Player History using the same component structure that we used for the game-pad and player-info components.
  * Your game should have at least 6 rooms that the player can move between.
  * Your game should have a form that enables your player to move between rooms (ex: `console`)
  * Manage the state of your map in a service
  * Manage the state of your player in a service
   * all write operations must be made with functions!
  * Your application should include **at least** three components
    * a component that contains your view (like `adventure` from class )
    * a component for your "console" form
    * a component for the tracking the history of a game
  * Be creative, do not use the same rooms as demonstrated in lecture, and have fun with this assignment!
   * try using ng-reapet, ng-if, ng-click, ng-model, or others (seek the docs)!!!

#### DOCS
* Write a description the difference between controllers and services in your readme

#### Test
* Test the default properties on your controllers
* Test the methods on your controllers

#### Bonus
* **2pts:** If the user "wins" your game use ng-if to hide the history and show a "win screen" component
