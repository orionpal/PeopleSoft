# PeopleSoft
prototype for employee sentiment analysis front-end
- table of employees + rating
- basic sorting function
- back-end api for getting employees from a database
- database with employee table and reviews table

# Future Work
- add backend capabilities to analyze reviews
    - potentially using different backend framework, like django instead of express or something
- have an actual database we're hitting instead of a local one
- have more data in the database
- host somewhere


# How to Run
1. Start backend: in one terminal, ```cd back-end``` then ```node app.js```
2. Start frontend: in another terminal, ```cd front-end``` then ```npm start```
3. Should have a little app running at localhost:3000, and it should be hitting an api at localhost:8080