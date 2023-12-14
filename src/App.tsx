import React from 'react';
import MainBottomTabNavigator from './navigation/MainBottomTabNavigator';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {

    const appStore = store()

    return (
        <Provider store={appStore}>
            <MainBottomTabNavigator/>
        </Provider>
    )
    
}

export default App