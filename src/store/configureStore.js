import { createStore } from 'redux';
import devtools from 'remote-redux-devtools';
import reducer from '../reducers';


export default function configureStore(initialState) {
  const store = createStore(
    reducer,
    devtools({
      hostname: 'localhost',
      port: 8000
    })
  );
  return store;
}
