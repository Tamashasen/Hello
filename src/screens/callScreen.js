import React, {Component} from 'react';
import {ListItem,Left,Thumbnail,Body,Right,Content,Text,Badge,Container,Fab,Icon,} from 'native-base';
import {View} from 'react-native';
import appStyles from '../styles/appStyles';

export default class CallScreen extends Component {
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
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialIcons"
                  name="call-made"
                  style={[appStyles.callIcon, {color: '#25D366'}]}
                />
                <Text note>Yesterday, 08:23 pm</Text>
              </View>
            </Body>
            <Right>
              <Icon
                style={{color: '#075E54'}}
                type="MaterialIcons"
                name="call"
              />
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
              <Text>Nathasha Balasuriya</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  type="MaterialIcons"
                  name="call-received"
                  style={[appStyles.callIcon, {color: '#FF0000'}]}
                />
                <Text note>Yesterday, 08:23 pm</Text>
              </View>
            </Body>
            <Right>
              <Icon
                style={{color: '#075E54'}}
                type="MaterialIcons"
                name="videocam"
              />
            </Right>
          </ListItem>
        </Content>
        <Fab style={appStyles.fabColor} position="bottomRight">
          <Icon type="MaterialIcons" name="phone-in-talk" />
        </Fab>
      </Container>
    );
  }
}
