//App screen
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Router from './App/Navigator/router';

const App: React.FC=() => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App;