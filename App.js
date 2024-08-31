// App.js
import React from 'react';
import { PointsProvider } from './context/PointsContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PointsProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'win_lose' }}
          />
          <Stack.Screen 
            name="Result" 
            component={ResultScreen} 
            options={{ title: 'Result' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PointsProvider>
  );
};

export default App;
