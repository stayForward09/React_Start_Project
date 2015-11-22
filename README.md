# react-frontend-template

A simple React and Webpack based frontend template solution. Uses webpack-dev-server if needed.

## Basic Usage

### Initialization

```bash
npm install
```

### Editing
This template uses the best bits of HTML5 Boilerplate for the html statics, which pre-exist in the `static` directory. Everything in `static` will get copied over to the `build` directory before the `index.js` entry is packed.



### Development
```bash
npm run dev
```

Browse to [http://localhost:8080](http://localhost:8080)



## Dependencies

- eslint - for linting
- eslint-plugin-react - to handle linting amidst jsx

- react - this is a React based template
- react-dom - to add the React app to the DOM
- react-router - to create routes for views
- history - dependency of react-router

- webpack - for building
- webpack-dev-server - for development

- babel-loader - react/jsx loader for webpack
- babel-core - dependency for babel-loader
- babel-preset-react - for loading babel-loader

- file-loader - for including images etc.
- style-loader - for including styles
- css-loader - for loading css
- less-loader - for loading less