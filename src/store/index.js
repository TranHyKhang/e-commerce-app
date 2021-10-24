import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//Import reducers
import {
    productReducer,
    tabNavigatorReducer,
    authReducer,
    bodyTabReducer,
    cartReducer
} from '../reducers'

const rootReducer = combineReducers({
    productReducer: productReducer,
    tabNavigatorReducer,
    authReducer,
    bodyTabReducer,
    cartReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));