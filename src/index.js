require('fetch-ie8');

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
const App = require('./containers/App');
const configureStore = require('./store/configureStore');

const store = configureStore()


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
