import Immutable from 'immutable';
import * as ActionType from 'redux/actions/actionTypes';

const initialState = {
  //initial state is empty
};

export default function (state = initialState, action) {
  state = Immutable.fromJS(state);
  switch (action.type) {
    case ActionType.CREATE_USER:

      return state
        .set('status', 'success')
        .set('error', null)
        .set('peoples', action.payload)
        .toJS();

    default:
      return state;
  }
}
