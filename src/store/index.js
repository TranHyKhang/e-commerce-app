import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//Import reducers
import {productReducer} from '../reducers'

const rootReducer = combineReducers({
    productReducer: productReducer
});

export default store = createStore(rootReducer, applyMiddleware(thunk));