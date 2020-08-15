import React from 'react';
import {View, StatusBar} from 'react-native';

import Form from './components/Form';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Form />
      </View>
    </>
  );
};

export default App;
