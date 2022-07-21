/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';



import AppContainer from './src/navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/state/Store';
import { Provider } from 'react-redux';




const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (

    <Provider store={store}>

      <NavigationContainer>
        {/* <SafeAreaView style={backgroundStyle}> */}
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContainer />

      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;