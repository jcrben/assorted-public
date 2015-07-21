

### Setup and installation 
Command-line arguments:
`npm install -g bower`
`bower install`
`chrome index.html` (or right-click as usual)

### Overview
This uses John Papa's AngularJS opinionated style guide, so some of the things that might seem different probably derive from that. It uses a MessageGenerator (message.service.js) to randomly generate messages and sends them through a ChatWindow service (chat.service.js) to post them to the page. Angular's built-in event system is used for communication as a demonstration, although it is technically not necessary in this case because of the hard-coded interval. 

Due to time constraints and to keep things simple and easy to understand, it does not architect users as separate objects with "user classes". If I was going to build a real chat application, I would build out the functionality for multiple object-oriented chatrooms (each with user and message properties) and provide methods for users to enter and leave rooms. In this case, I experimented with a heavier approach briefly before focusing and following the "You Ain't Gonna Need It" principle to avoid over-engineering.

Challenges included getting angular to play well with changing the scrollbar (got digest already in progress errors, requiring a 1 second timeout) and some of the CSS got a bit tricky, which necessitated using flexbox given the time constraints (flexbox covers about 87% of the market according to caniuse.com)