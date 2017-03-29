import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../rootReducer'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      thunkMiddleware,
      createLogger()
    ),
      (window.devToolsExtension ? window.devToolsExtension() : f => f)
    )

    // applyMiddleware(thunkMiddleware)
  )
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers').default
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return store
}

