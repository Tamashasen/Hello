import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Content, Text, Container, Fab, Icon, Button, Separator, } from 'native-base';
import { View } from 'react-native';
import profile from '../utils/profile.jpg';
import appStyles from '../styles/appStyles';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem avatar noBorder>
            <Left>
              <Thumbnail
                source={profile} style={appStyles.profile}
              />
            </Left>
            <Body>
            
              <Text>Tamasha Seneviratne</Text>
              <Text note>Urgent Calls Only</Text>
            </Body>
          </ListItem>
          <Separator style={{ marginTop: 15, height: 1 }}></Separator>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent >
                <Icon
                  type="MaterialIcons"
                  name="vpn-key"
                  style={{ color: '#128C7E', opacity: 0.6 }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Account</Text>
              <Text note>Manage Your Account</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="chat"
                  style={{ color: '#128C7E', opacity: 0.6 }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Chats</Text>
              <Text note>Theme, wallpapers, chat history</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={{ marginTop: 20 }}>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="notifications"
                  style={{ color: '#128C7E', opacity: 0.6 }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Notifications</Text>
              <Text note>Message, group & call tones</Text>
            </Body>
          </ListItem>

          <ListItem icon style={{ marginTop: 20 }} noBorder>
            <Left>
              <Button transparent>
                <Icon
                  type="MaterialIcons"
                  name="help-outline"
                  style={{ color: '#128C7E', opacity: 0.6 }}
                />
              </Button>
            </Left>
            <Body>
              <Text>Help</Text>
              <Text note>FAQ, contact us, privacy policy</Text>
            </Body>
          </ListItem>

        </Content>
      </Container>
    );
  }
}