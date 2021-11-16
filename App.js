import 'react-native-gesture-handler';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Router from './src/navigation/Router';
Amplify.configure(config);

import { withAuthenticator } from 'aws-amplify-react-native';

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

export default withAuthenticator(App);