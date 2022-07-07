import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redusers/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());
