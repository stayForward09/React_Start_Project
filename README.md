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
- `copy-webpack-plugin` - to copy static boilerplate to build.

### Linting
- `eslint` - for linting
    - `eslint-plugin-react` - to handle linting amidst jsx


## License
The MIT License (MIT)<br/>
Copyright (c) 2015 Arjun Mehta