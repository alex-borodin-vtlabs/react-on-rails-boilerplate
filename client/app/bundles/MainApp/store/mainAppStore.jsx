import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import reducers, { initialStates } from '../reducers';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';

export default (props, railsContext) => {
  const { mainAppState } = initialStates;
  const initialState = {
    $mainAppStore: mainAppState.merge({
      counter: props.counter,
    }),
    railsContext,
  };
  console.log(mainAppState);
  console.log(props);
  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  console.log(JSON.stringify(initialState));
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
