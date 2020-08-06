import React, {Component} from 'react';
import {ListItem,Left,Thumbnail,Body,Right,Content,Text,Badge,Container,Fab,Icon,} from 'native-base';
import appStyles from '../styles/appStyles';
//import { GiftedChat } from 'react-native-gifted-chat';

export default class ChatScreen extends React.Component{
  render() {
    
    return (
      <Container>
        <Content>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Dinusha Seneviratne</Text>
              <Text note>How are you?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>1</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/buddhasource/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Madujith Perera</Text>
              <Text note>When are you coming today?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                5:24 am
              </Text>
              <Badge style={appStyles.badgeChats}>
                <Text style={appStyles.badgeTextChats}>4</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/vicivadeline/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Vasanthi Balasuriya</Text>
              <Text note>Can you send me the details?</Text>
            </Body>
            <Right>
              <Text note>7:56 pm</Text>
            </Right>
          </ListItem>
          <ListItem avatar>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg',
                }}
              />
            </Left>
            <Body>
              <Text>Nathasha Balasuiya</Text>
              <Text note>Hi! Where are you guys?</Text>
            </Body>
            <Right>
              <Text note>8:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat"/>
        </Fab>
      </Container>
    );
  }
}