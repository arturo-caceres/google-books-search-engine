# Google Books API Search Engine

https://google-search-books.netlify.app/

## Purpose 

The purpose of this application is to provide a selection of books depending on what the user is searching for.


## Tech stack
- **React**
- **HTML** 
- **SCSS** 

## Challenges

The main issue I had was understanding the functionality of hooks; useState and useEffect. After creating multiple react apps and going throught the exercises, I was able to comprehend the importance of these hooks. 

Immediately, my attention went to fetching the API and utlizing async/await.

Overall, this application was a great way to learn how to use React, Hooks, Async/Await and Fetching API.


## MVP

Create a page that allows users to
Page should include the following:

-   Header section introducing the page
-   Form containing a text input and a submit / search button

-   A grid of books
    Instructions:

-   When the submit button is clicked you need the request books from the Google books API using the input value as your query string
-   The books that you receive should be rendered in the books grid.
-   Each book in the grid should have an image, author, title and description
-   The grid should be responsive on different screen sizes
-   You should use async / await for your request code, NOT .then

Styling (required):

This application should look good, take some time to pick a palette and plan out your design. You can use tools like Figma or wireframe pro to plan what your application is going to look like.
Styling must use BEM, and each block should have its own SCSS file Your palette should use variables

Application Design (required):

-   You should separate DOM functions and non-DOM functions in different modules.
-   Write as many non-DOM functions as you can Functions should do 1 thing, and should be as pure and reusable as possible
-   Always use iterators over loops
-   Always parametrize and abstract large pieces of duplicate code.
