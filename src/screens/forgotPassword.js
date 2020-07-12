import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
//import { Colors, Styles } from '../Shared'
import appStyles from './src/styles/appStyles';

import TextField from '../Components/TextField';
import Button from '../Components/Button';
import Separator from '../Components/Separator';

export default class ForgetPassword extends Component {

    static route = {
        navigationBar: {
            title: 'Forget Password',
            ... Styles.NavBarStyles
        }
    }

    render() {
        return (
            <View style={appStyles.container}>
                <TextField placeholder="Mobile Number" />
                <Button primary>Forget Password</Button>
            </View>
        );
    }
}
