import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore() {
    const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
}