WEBSITE LINK: https://akradin.github.io/tic-tac-toe/


Technologies used: mainly the assistance of my peers in combination with stackoverflow
  and various other websites such as bootstrap and miscellanious online tutorials about
  how to tidy up CSS.

Planning was very much done at a very rudimentary level. See tasks below. I references these
  loosely but mainly kept a mental check list of what should be done. Meeting requirements quickly
  took precedene above all else and I worked in a methodical fashion to get a website that displayed
  something. The site originally displayed the gameboard and a nav bar with buttons for various authorizations
  Next, I worked on making the authorizations work. This meant functioning sign in/up, changing of password
  and signing out.
  Following this I focused on making the board clickable and slowly added in functionality so clicks would
  represet something in the game. First I changed background color, then text.
  Next I made it so the text input into each game cell formed an array
  This helped me create game logic which took the bulk of the time
  Once my game logic was finished, I began working on API calls to the game would work in the back end
  I then focused diligently on the requirements and ensure that all features of the site worked properly.

Unsolved problems were not achieving lofty goals and fully understanding my code. For the former, I wanted to have
  functionality where logging in or signing up would pop up immediately upon reaching the site. Along with that, I
  wanted a complete game to have an alert that informed the user of completion along with links to share to social media.
  Lastly, I wanted hover functionality so the board cell would highlite upon hovering mouse

  I was also in a time crunch to finish game API calls so for the update function I leaned heavily on my peers to resolve this
  problem. I need to go back and look at this code to fully understand what is happening

For my wireframes, see attached images folder

User Stories
As a user I want a clear and concise sign up and login
As a user I want to be able to start a game easily
As a user I want easy to use functionality
As a user I want to be able to play on multiple devices





## Tasks

TO DO:
HTML (see wdi/studies/html-css-layout-bootstrap)
  create divs with boot strap
  create buttons that CAN ONLY BE CLICKED ONCE
CSS (see wdi/studies/html-css-layout-bootstrap)
  make things look pretty, utilize boot strap
JAVASCRIPT
  need buttons to only be able to be selected once
    do more research into ```js
    button.setAttribute(disabled)
    ```
  need function that pushes each move into an array
    .push? wont work, only adds stuff to end of array
    ^^^^^ array.splice(index, 0, item)
    (http://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index)
    array of arrays?

  need function that will only run if board has five spaces occupied
    impossible to have a winner before 5 moves
  need function that checks gameboard to see if you have a winner
AJAX
  set up auth
  sign up
  log in
  change password
  log out







## Structure

Dependencies are stored in [`package.json`](package.json).

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should store styles in [`assets/styles`](assets/styles).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
 an API.

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `grunt <server|serve|s>`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them
