## Setup
I've added a `.nvmrc` file - where if you use nvm, you can run `nvm use` and you might also need to run `nvm install` to get the correct verison this project want us to use for node

## To Run
To run the application you can run:
```
npm install // install local packages
```
The below will list all the available commands / params needed
```
npm run start -- calculator --help
```
The below will run the CLI - where we are using commander
```
npm run start -- calculator --deposit=10000 --interest=1.1 --terms=45 --frequency=monthly
```

## Tests
You can simply run `npm test`

## Design Decisions
- I decided to use nodejs and typescript. I am very familiar with both, and the flexibility that typescript provides to be able to get up and running is very favourable.

- I decided to use a more functional style of programming. I find it makes testing a lot easier, and I can break up my functions where needed (modularity), while still having clean code.

- It makes error handling more predictable

## Assumptions
- Originally I was thinking terms were years - until I played around further with the bendigo bank calculator I found that can also include months. Therefore, I made some quick changes to get it to work for years + months.

- I am using commander for my CLI input and decided to use YUP as a validator

- I also made the assumption that the frequency, e.g. monthly, quarterly, annually and maturity are the only available inputs