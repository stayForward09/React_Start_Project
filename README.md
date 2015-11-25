# React Frontend Template

[![Build Status](https://travis-ci.org/arjunmehta/react-frontend-template.svg)](https://travis-ci.org/arjunmehta/react-frontend-template)

A simple React and Webpack based frontend template solution. Assumes use of `react-router`. Develop with `webpack-dev-server` if needed.

## Initialize
```bash
npm install
```

## Develop
```bash
npm run dev
```

Browse to [http://localhost:8080](http://localhost:8080)

Just edit `src/index.js` and follow the import trail.

This template uses the best bits of HTML5 Boilerplate for the html statics, which pre-exist in the `static` directory. Everything in `static` will get copied over to the `build` directory before the `src/index.js` entry is packed.

## Test
```bash
npm test
```

Tests are kept in the `tests` directory.

## Build
```bash
npm run build
```

The project will be built to the `build` directory.


## Deploy
After build, you can just serve the contents of the `build` directory. When serving the contents, you will need to do one of two things:

1. Configure your server to redirect all routes to the main `index.html` where your app is placed. Examples are provided via [react-router docs](https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md#createbrowserhistory).
2. Use `hashHistory` instead of `browserHistory` with `react-router`. Change [this line in `app.jsx`](https://github.com/arjunmehta/react-frontend-template/blob/master/src/components/app.jsx#L3):

```javascript
// var history = require('history').createHistory();
var history = require('history').createHashHistory();
```

## Dependencies

### React
- `react` - because this is a React-based template
    - `react-dom` - for adding React app to the DOM
    - `react-router` - for creating routes to views
        - `history` - peer dependency of `react-router`

### Webpack
- `webpack` - for packaging
    - `webpack-dev-server` - for development

#### Loaders
- `babel-loader` - for loading React/jsx components
    - `babel-core` - peer dependency for `babel-loader`
    - `babel-preset-react` - to properly load React components
- `file-loader` - for loading images etc.
- `style-loader` - for loading styles
    - `css-loader` - for loading css
    - `less-loader` - for loading less

#### Plugins
- `copy-webpack-plugin` - to copy static boilerplate to build

### Testing
- `jest-cli` - for running tests

### Linting
- `eslint` - for linting
    - `eslint-plugin-react` - to handle linting amidst jsx


## License
The MIT License (MIT)<br/>
Copyright (c) 2015 Arjun Mehta