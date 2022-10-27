import React, { useState } from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (
  state: { [index: string]: number },
  action: { [index: string]: 'reset' | 'increment' | 'decrement' }
) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
};

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log('state', state);

  React.useEffect(() => {
    console.log('in useEffect');
    setText('Hello' + new Date().getTime());
  }, []);
  return (
    <>
      <h1>{text}</h1>
      <h1>{state.count}</h1>
      <p className="text-center">
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </p>
    </>
  );
};

export default App;
