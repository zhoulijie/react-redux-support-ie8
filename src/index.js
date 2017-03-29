import 'fetch-ie8';

// for fuck ie8 surport ,it should be moved outside
import 'es5-shim';
import 'es5-shim/es5-sham';
import 'console-polyfill';

import { createHashHistory } from 'history';
import { Router,Route,IndexRoute,IndexRedirect,useRouterHistory} from 'react-router';

import App from "./containers/App";

const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;
// const App = require('./containers/App');
const configureStore = require('./store/configureStore');



const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

// TODO
// 集成 redux-router

render(
  <Provider store={store}>
     <Router history={appHistory}>
        <Route path="/" component={App}>
          {/*<Route path="homepage" component={App} />*/}
       </Route>
     </Router>
  </Provider>,
  document.getElementById('app')
)
