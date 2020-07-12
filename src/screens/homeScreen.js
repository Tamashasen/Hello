import React, {Component} from 'react';
import {Container,Header,Title,Button,Right,Body,Icon,Text,Tabs,Tab,ScrollableTab,TabHeading,Badge,} from 'native-base';
import ChatScreen from './src/screens/chatScreen';
import StatusScreen from './src/screens/statusScreen';
import CallScreen from './src/screens/callScreen';
import {StatusBar} from 'react-native';
import appStyles from './src/styles/appStyles';
import SettingsScreen from './src/screens/settingsScreen';
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
  }
  componentDidMount() {
    setTimeout(() => {
      StatusBar.setBackgroundColor('#04213E');
    }, 100);
  }
  render() {
    return (
      <Container>
        <Header noLeft style={appStyles.headerBackgroundColor}>
          <Body>
            <Title style={appStyles.appTitle}>Hello</Title>
          </Body>
          <Right>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="search" />
            </Button>
            <Button icon transparent>
              <Icon type="MaterialIcons" name="more-vert" />
              
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
              <TabHeading style={{backgroundColor: '#04213E'}}>
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
              <TabHeading style={{backgroundColor: '#04213E'}}>
                <Text style={appStyles.tabsText}>STATUS</Text>
              </TabHeading>
            }>
            <StatusScreen />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: '#04213E'}}>
                <Text style={appStyles.tabsText}>CALLS</Text>
              </TabHeading>
            }>
            <CallScreen />
          </Tab>
          {/*<Tab
            heading={
              <TabHeading style={{backgroundColor: '#04213E'}}>
                <Text style={appStyles.tabsText}>SETTINGS</Text>
              </TabHeading>
            }>
            <SettingsScreen />
          </Tab>*/}
        </Tabs>
      </Container>
    );
  }
}