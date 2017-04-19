import * as actionTypes from '../constants/mainAppConstants';
import Immutable from 'immutable';

export const initialState =  Immutable.fromJS({
  counter: 0,
});

export default function commentsReducer(state = initialState, action = null) {
  const { type } = action;
  switch (type) {

    case actionTypes.EXAMPLE: { 
      return state.merge({
        counter: state.get('counter') + 1
      });
    }

    default: {
      return state;
    }
  }
}
