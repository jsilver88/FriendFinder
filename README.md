# FriendFinder

## Assignment

User is asked to rate a series of questions and based on their answers is matched with another user in the database. The app then displays the name and picture of the user they matched with.

1. Survey should have 10 questions that should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
2. `server.js` file should require `express` and `path`.
3. `htmlRoutes.js` should include a GET route to `/survey` and a default that leads to `home.html`, which displays the homepage.
4. `apiRoutes.js` file should contain a GET route with the url `/api/friends`, which will display a JSON of all friends and a POST route, which is used to handle incoming survey results.
5. Save the app's data inside of app/data/friends.js as an array of objects.
6. Determine the user's most compatible friend by comparing the difference between the current user's scores against those from other scores, question by question. Add up the differences and use the absolute value of the differences so there are no negative solutions. The closest match will be the user with least amount of difference.
7. Once the user has a match, display the result as a modal pop-up with the name and image of the user's match.

## NPM packages used

* body-parser (https://www.npmjs.com/package/body-parser)
* Express (https://www.npmjs.com/package/express)
* path (https://www.npmjs.com/package/path)
* Nodemon (https://www.npmjs.com/package/nodemon)
  
## Project Displayed on Heroku

Link: https://young-castle-52869.herokuapp.com/