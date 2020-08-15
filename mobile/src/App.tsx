import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Form from './components/Form';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Form />
      </SafeAreaView>
    </>
  );
};

export default App;
