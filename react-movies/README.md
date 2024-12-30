# Assignment 1 - ReactJS app.

Name: Elaine Coughlan

## Overview.

This reporistory contains the extended React-movies application, with extra features applied. The purpose of this repo is for SETU Web Application Development 2. Apoligise for any spelling or grammer mistakes that might follow. 

### Features.
 
+ Trending page with similar layout to main movie home page with a different Icon button to show a visual difference in the pages
+ TV show page with pagination
+ Individual tv show pages with information: plot overview, genres, and orginal name. 
+ Firebase authentication - email/password
+ Login and signup pages with links added to the siteHeader, these do not blend visibly with other links as I wanted them to stand out.


## Setup requirements.

Firebase authentication requires API key just like TMDB in a seperate .env file. Other information on the firebase can be changed to fit testing on other devices. 

## API endpoints.

+ For the trending page - discover/movie
+ For tv shows page - discover/tv and for indivaidual shows: discover/tv/:id
+ For the pagination feature has added to the tv shows fetch the page number to return

## Routing.

The new routes added to the index page are:
+ <Route path="/movies/trending" TrendingPage    
+ <Route path="/tvShows" TVShowHomePage 
+ <Route path="/tvShows/:id" TVShowPage
+ <Route path="/login" LoginPage
+ <Route path="/signup" SignupPage



## Independent learning (If relevant).

Pagination
https://www.contentful.com/blog/react-pagination/
https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

Layout for login and signup pages
https://medium.com/@thirdmarch0303/building-a-simple-login-and-signup-with-react-773ad5444fbc
https://codesandbox.io/p/sandbox/loginsignup-page-zh85l?file=%2Fsrc%2FApp.js

Using firebase (Have also used with android before so not unfamillar with it)
https://medium.com/@thirdmarch0303/building-a-simple-login-and-signup-with-react-773ad5444fbc
https://firebaseopensource.com/projects/rakannimer/react-firebase/
https://samuelbankole.medium.com/google-firebase-in-react-1acc64516788

Some help taken from stackoverflow if errors showed. Some of it didnt work anyway so was not included here.

## Youtube 
video link: https://youtu.be/tuZIPv3Py-M

## Notes
Trending page was added using the help of lab 2 and 3.
Tvshow page with the individual shows was done with the help of lab 2
The pagination feature is not availbe on the movie home page as I could not find a suitable fix. Only fix was to rework the fetch function to the way tv show page is set from lab 2.
