import { createStackNavigator } from '@react-navigation/stack';
import { darken } from 'polished';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';

const Stack = createStackNavigator();

function HeaderScreen(navigation) {
  return (
    <SafeAreaView style={{ height: 60, background: darken(0.03, '#191920') }}>
      <Header {...navigation} />
    </SafeAreaView>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        cardStyle: {
          backgroundColor: '#191920',
        },
        header: navigation => <HeaderScreen {...navigation} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
