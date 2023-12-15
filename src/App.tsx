import React from 'react';
import MainBottomTabNavigator from './navigation/MainBottomTabNavigator';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {

    return (
        <Provider store={store}>
            <MainBottomTabNavigator/>
        </Provider>
    )
    
}

export default App