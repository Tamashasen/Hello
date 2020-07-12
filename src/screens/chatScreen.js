import React, {Component} from 'react';
import {ListItem,Left,Thumbnail,Body,Right,Content,Text,Badge,Container,Fab,Icon,} from 'native-base';
import appStyles from '../styles/appStyles';

export default class ChatScreen extends Component {
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
              <Text>Er Gulshan</Text>
              <Text note>How are you Harinder?</Text>
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
              <Text>Mohammad</Text>
              <Text note>How are you Harinder?</Text>
            </Body>
            <Right>
              <Text note style={{color: '#25D366'}}>
                3:43 pm
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
              <Text>Brian</Text>
              <Text note>How are you Harinder?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
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
              <Text>Michael</Text>
              <Text note>How are you Harinder?</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="chat" />
        </Fab>
      </Container>
    );
  }
}