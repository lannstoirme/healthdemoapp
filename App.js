import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Container, Header, Content, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { render } from 'react-dom';
import NavMain from './nav/navmain';

const iconbutton = <Image source={require('./img/icons8-unchecked-radio-button-96.png')} />;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


render() {
  if (!this.state.isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <NavMain />
    </Container>
  );
}
}