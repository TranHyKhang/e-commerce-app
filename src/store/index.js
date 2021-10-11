import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//Import reducers
import {
    productReducer,
    tabNavigatorReducer
} from '../reducers'

const rootReducer = combineReducers({
    productReducer: productReducer,
    tabNavigatorReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));