import { createStore , applyMiddleware } from 'redux';
import { rootReducer } from './RootReducer/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const enhance = composeWithDevTools(applyMiddleware(thunk))
const store = createStore( rootReducer , enhance );

export default store;