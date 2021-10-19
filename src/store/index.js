import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//Import reducers
import {
    productReducer,
    tabNavigatorReducer,
    authReducer
} from '../reducers'

const rootReducer = combineReducers({
    productReducer: productReducer,
    tabNavigatorReducer,
    authReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));