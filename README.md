# Tic Tac Toe

## Development instructions

### Local development
To run the dev server locally:

- Clone this repository
- `yarn install`
- `yarn start`
- Point your browser to `localhost:3000`

### Tests
To run the tests run `yarn test`.  This will open up the jest test watcher, which will automatically run the appropriate tests when files are changed.

# TODO

## Tests
- Fill out reducer tests
- Write more component tests

## Modularity and Reusability
- Reorganize file structure (to make it easier to add the component to other projects)
- Scope actions to component instance (so there can be more than one per page)
- Add default store prop (in case importing application doesn't use Redux)

## Code quality/readability/maintainability
- Add `Immutable.js` to keep from mutating game board

## Features
- Maintain game state in localstorage with `redux-storage` (to persist through refresh)
- Add notification for invalid move
- Add traditional line through winning symbols

## Base project info
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).  It contains instructions for most common tasks.

