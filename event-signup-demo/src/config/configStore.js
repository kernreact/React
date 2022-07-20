import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/reducers';
import initialState from '../data/initialState';

const configureStore = () => {
    const middlewareEnhancer = applyMiddleware(thunkMiddleware);
    const composedEnhancers = compose(middlewareEnhancer);

    const store = createStore(rootReducer, initialState, composedEnhancers);
    return store;
};

export default configureStore;