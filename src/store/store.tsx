import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

const reducers = combineReducers({

})

const store = () => {
    return createStore(reducers, applyMiddleware(thunk));
}

export default store