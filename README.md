[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

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
