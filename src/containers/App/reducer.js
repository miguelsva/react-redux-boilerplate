import {
  INCREASE,
  DECREASE
} from './constants';

const initialState = {
  counter: 0,
};

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE:
      return { counter: state.counter + 1 };
    case DECREASE:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export default appReducer;