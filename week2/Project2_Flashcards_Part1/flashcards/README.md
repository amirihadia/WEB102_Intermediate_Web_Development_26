# Web Development Project 2 - *Flashcards!*

Submitted by: **Hadia Amiri**

**This project is a React-based flashcard web app designed to help users study simple question-and-answer pairs. The app stores flashcards in an array of objects and displays one card at a time. Users can click the card to flip between the question and answer, and use a button to load a random new card. The project demonstrates core React concepts including state management with useState, event handling, conditional rendering, and basic component structure.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

Part 1: 
- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

Part 2: 
- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation



## Video Walkthrough

Here's a walkthrough of implemented required features:
<div>
    <a href="https://www.loom.com/share/3dce8e1763a44502a90c578d5c5d0110">
      <p>flashcards - 22 March 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/3dce8e1763a44502a90c578d5c5d0110">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/3dce8e1763a44502a90c578d5c5d0110-f871fa1ebe20fcce-full-play.gif#t=0.1">
    </a>
  </div>


<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
