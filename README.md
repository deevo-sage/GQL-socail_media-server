# SOCIAL MEDIA SERVER

## Aim 

to make a fully functional, scalable and secure graphQL social media server.

> All of the below are subject to change due to many reasons such as getting more analysis on the system design or fuctional and non functional requirements i would have in my front end which i would make next.

## To-Do

- writing and finalizing types for
  - user
  - post
  - profile
  - message
  - requests
  - notification
- writing resolvers for 
  - user
  - post
  - profile
  - message
  - requests
  - notification
- writing custom directives to implement authorization and authentication
- writing subscriptions for notifications and messages (or make a seprate socket server) 
- implementing a notification service 
- implementing caching with redis
- rate and depth limiting
- implementing other features such as filters
- 

> notification can be implemented on subsciption but due to lack of scalable pub-sub other than redis, it would be a better way to go and the GQL subscriptions could be listening to a redis cache.

## Technologies

- JavaScript
- GraphQL
- MongoDB
- Mongoose
- NodeJS
- Redis 

## Services being or to-be used

- AWS
- mongoDB
- Appolo server
