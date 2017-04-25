import Immutable from 'immutable';
import * as actionTypes from '../constants/mainAppConstants';

export const initialState = Immutable.fromJS({
  isFetching: false,
  example: {
    counter: 0,
  },
});

export default function commentsReducer(state = initialState, action = null) {
  const { type, data, keyword } = action;
  switch (type) {

    case actionTypes.REQUEST_BEGIN: {
      return state.merge({
        isFetching: true,
      });
    }

    case actionTypes.REQUEST_SUCCESS: {
      return state.set(keyword, Immutable.fromJS(data));
    }

    case actionTypes.REQUEST_ERROR: {
      return state.merge({
        isFetching: false,
      });
    }

    default: {
      return state;
    }
  }
}
