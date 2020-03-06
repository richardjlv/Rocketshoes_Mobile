import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Routes from './routes';
import { navigationRef } from './services/RootNavigation';
import './config/ReactotronConfig';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="light-content" backgroundColor="#191920" />
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
