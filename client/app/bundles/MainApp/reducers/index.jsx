import mainAppReducer, { initialState as mainAppState } from './mainAppReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $mainAppStore: mainAppReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  mainAppState,
  railsContextState,
};
