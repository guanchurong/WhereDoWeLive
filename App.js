import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './redux/configure-store';
import { Provider, connect } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Container } from 'native-base';

const store = configureStore();

const RouterWithRedux = connect()(Router);

const Scenes = Actions.create(
  <Scene key="root">
  </Scene>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically asdasdasdasdassds.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
