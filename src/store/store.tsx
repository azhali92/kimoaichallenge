import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import AppReducer from "../reducers/appReducer";
import { useDispatch } from "react-redux";

const reducers = combineReducers({
    AppReducer
})

export type RootState = ReturnType<typeof reducers>;

const store = () => {
    return createStore(reducers, {} , applyMiddleware(thunk));
}

export type AppDispatch = ReturnType<typeof store>

export default store