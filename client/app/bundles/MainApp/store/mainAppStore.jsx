import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';


export default (props, railsContext) => {
  const { mainAppState } = initialStates;
  const initialState = {
    $mainAppStore: mainAppState.merge({
      ...props,
    }),
    railsContext,
  };
  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
