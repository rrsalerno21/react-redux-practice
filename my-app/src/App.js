import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signIn} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>

      {isLogged ? <button onClick={() => dispatch(signIn())}>Sign Out</button> : <button onClick={() => dispatch(signIn())}>Sign in</button>}
      {isLogged ? <h3>Valuable info I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
