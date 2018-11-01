import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore() {
  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(
    reducer,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = reducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}