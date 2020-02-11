import * as React from 'react';
import { Button, StyleSheet, View, Text, AsyncStorage } from 'react-native';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
                <Text>sadasdasda</Text>
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});