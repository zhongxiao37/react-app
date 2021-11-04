import { AnyAction } from 'redux';

const counter = (state: any, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, cnt: state.cnt + 1 };
    case 'DECREMENT':
      return { ...state, cnt: state.cnt - 1 };
    default:
      return state;
  }
};

export default counter;
