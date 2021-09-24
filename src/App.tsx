import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter';

export interface IApp {
  cnt: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const App: React.FC<IApp> = (store) => {
  console.log(store);
  const { cnt, onIncrement, onDecrement } = store;
  return (
    <div>
      <h1>{cnt}</h1>
      <p className="text-center">
        <button onClick={onIncrement} className="btn btn-primary">
          increase
        </button>
        <button onClick={onDecrement} className="btn btn-primary">
          decrease
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cnt: state.cnt,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrement: () => {
      dispatch(increment());
    },
    onDecrement: () => {
      dispatch(decrement());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
