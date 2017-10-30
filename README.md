# angular 4 mean starter
This is a very neat and simple starter kit for an angular 4 MEAN SPA applications. Obviously this won't be perfect for every situation, but I found this really necessary to overcome the fear of the scary blank project and to discover some best practices on how to structure a project.
Anyway it shouldn't be too hard to expand it to fit your needs.

## Installation
1. Clone this repo: `git clone https://github.com/giacomocerquone/angular2-mean-starter.git`
2. `cd` into the folder of the repo you just cloned
3. Install npm dependencies `npm install`
4. Start a MongoDB instance
5. You're ready to go, give `npm run start` to test the application

## Built-in scripts
+ `npm start` - Launch development server of Angular Cli and server.js node app through nodemon for live restart
+ `npm run build` - Build the ng project into the dist folder. In production you will just start the server.js file
+ You can define other scripts in package.json based on the available commands provided by [angular-cli](https://github.com/angular/angular-cli/wiki)

## What's in here (the stack)
### Back-end
+ Node.js (you don't say)
+ Express 4
+ Mongoose to handle MongoDB connections

### Front-end
+ Angular 4 + Angular Material
+ Angular Cli
+ TypeScript

#### Development modules
+ Nodemon for live server restart
+ Concurrently for running and handling multiple npm packages
+ Morgan as logging library
+ Angular-cli to handle all the angular stuff

## Contributions
I would be really happy to have some contributions, advices or anything else you can bring in to improve this starter.

## Showcase
If you want to submit your own project developed with this starter kit, just open a Pull Request and edit this Readme with the link to your repo.
