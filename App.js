import React from 'react';

//Import MainNavigation
import {MainNavigation} from './src/navigation'

//Import store
import store from './src/store/index';
import {Provider} from 'react-redux';

import {LoginScreen, SignUpScreen} from './src/screens'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation/>


    </Provider>
  );
};

export default App;
