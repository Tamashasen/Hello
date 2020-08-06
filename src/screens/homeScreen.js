import React, { Component } from 'react';
import { Container, Header, Title, Button, Right, Body, Text, Tabs, Tab, ScrollableTab, TabHeading, Badge } from 'native-base';
import {StatusBar} from 'react-native';
import ChatScreen from './chatScreen';
import StatusScreen from './statusScreen';
import CallScreen from './callScreen'
import appStyles from '../styles/appStyles';
import firebase from '../components/database/firebase';
import SettingsScreen from './settingsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
//import CameraScreen from './cameraScreen';
//import { RNCamera } from 'react-native-camera';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*function RouterComponet() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="./src/screens" component={SettingsScreen} />

      </Switch>
    </Router>
  );
}*/

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      name: ''
    }
  }
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#04213E');
    }, 100);
  }
  render() {
    //this.state = { name: firebase.auth().currentUser.name }
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>Hello</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon style={{ color: 'snow'}} type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon style={{ color: 'snow'}} type="MaterialIcons" name="sign-out" />

            </Button>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{
            elevation: 0,
          }}
          renderTabBar={() => <ScrollableTab />}
          tabBarUnderlineStyle={appStyles.tabBarUnderLine}
          tabBarActiveTextColor="red"
          initialPage={3}
          tabBarBackgroundColor="#04213E">


          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#04213E' }}>
                <Text style={appStyles.tabsText}>CHATS</Text>
                <Badge style={appStyles.badge}>
                  <Text style={appStyles.badgeText}>2</Text>
                </Badge>
              </TabHeading>
            }>
            <ChatScreen />
          </Tab>

          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#04213E' }}>
                <Text style={appStyles.tabsText}>CALLS</Text>
              </TabHeading>
            }>
            <CallScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: '#04213E' }}>
                <Text style={appStyles.tabsText}>SETTINGS</Text>
              </TabHeading>
            }>
            <SettingsScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}