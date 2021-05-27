import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SearchPage from './screens/SearchPage';
import CardPage from './screens/CardPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SearchPage"
          component={SearchPage}
        />
        <Stack.Screen name="CardPage" component={CardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
