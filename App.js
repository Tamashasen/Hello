import React, {Component} from 'react';
import {View,Image, TextInput,TouchableOpacity, Dimensions } from 'react-native'
import appStyles from './src/styles/appStyles';
//import background from './src/utils/background.jpg'
import Logo from './src/utils/logo.png'
import { Icon } from 'native-base';




const {width:WIDTH}= Dimensions.get('window')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mobnum: '',
        password: '',
        errorMessage: null
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.navigator.push('friendsList')
            this.setState({
                loading: false
            })
        }
    });
}

static route = {
    navigationBar: {
        title: 'Login',
        ... Styles.NavBarStyles
    }
}

login = () => {
    this.setState({
        errorMessage: null,
        loading: true 
    })
    const {mobnum, password} = this.state;
    firebase.auth()
        .signInWithEmailAndPassword(mobnum, password)
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.setState({
                errorMessage,
                loading: false
            })
        });
}

renderErrorMessage = () => {
    if(this.state.errorMessage)
        return <Text style={appStyles.error}>{this.state.errorMessage}</Text>
}
  render() {
    return (
      <View style= {appStyles.backgroundcontainer}>
        <View style={appStyles.logocontainer}>
          <Image source={Logo} style={appStyles.logo}/>
          {/*<Text style={appStyles.logotext}>
            Hello
    </Text>*/}
        </View>
        <View>
          {/*<Icon name ={'ios-person-outline'} size={28} color={'white'} style={appStyles.inputicon}/>*/}
          <TextInput
            style={appStyles.input}
            value={this.state.mobnum}
            placeholder={'MobileNumber'}
            keyboardType ='numeric'
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          <TextInput
            style={appStyles.input}
            value={this.state.password}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />
          <Button primary onPress={this.login}>Login</Button>
                {this.renderErrorMessage()}
                <Separator />
                <Button secondary onPress={() => {
                    this.props.navigator.push('signup');
                } }>Sign Up</Button>
                <Button secondary onPress={() => {
                    this.props.navigator.push('forgetPassword');
                } }>Forget Password</Button>
        </View>
      </View>
    );  
  }
}