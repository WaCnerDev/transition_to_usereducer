import React, { useReducer } from 'react';

// Definimos el reducer
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // Inicializamos el estado utilizando useReducer
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button className='btn-count' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button className='btn-count' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  );
}

export default Counter;
