/* eslint-disable import/no-anonymous-default-export */
import { UPDATE_EMAIL } from '../actions/type.actions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
