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

# Embedding in a React App

> This process should be refactored to make it easier.  The correct instructions are included first and the proposed flow is sketched out at the end of the section

## Current embedding process

Dependencies: an existing Redux store

1. To embed the component into another React app, copy the following files to your app:
- `src/components/tic_tac_toe/TicTacToe.css`
- `src/components/tic_tac_toe/TicTacToe.js`
- `src/reducers/index.js`
- `src/actions/index.js`

1. Include the `ticTacToeReducer` in your combineReducers method

1. Instantiate a `TicTacToe` component.  If you are not using react-redux's `Provider` component, you can pass your store in as a prop.  No other props are required.

## Proposed process

Move all the required files into the `components/tic_tac_toe` directory (and rename them according to function).  Use a default prop to create a store if one is not passed in.  Then the process to embed is simplified to:

1. Copy the `/src/components/tic_tac_toe` folder
1. If you are using Redux, add the `ticTacToeReducer` to your `combineReducers` method
1. Instantiate a `TicTacToe` component.  No props are required.

# TODO

## Tests
- Fill out reducer tests
- Write more component tests

## Modularity and Reusability
- Reorganize file structure (to make it easier to add the component to other projects)
- Scope actions to component instance (so there can be more than one per page)
- Add default store prop (in case importing application doesn't use Redux)
- Build a slug that includes all of the code required to use the component, so only one file needs to be copied.

## Code quality/readability/maintainability
- Add `Immutable.js` to keep from mutating game board

## Features
- Maintain game state in localstorage with `redux-storage` (to persist through refresh)
- Add notification for invalid move
- Add traditional line through winning symbols

## Base project info
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).  It contains instructions for most common tasks.

