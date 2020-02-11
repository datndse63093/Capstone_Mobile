import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
// import styles from '../styles/CustomStyle';
import COLOR from '../styles/CustomColor';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="height" style={styles.container}>
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}>
            <View style={styles.logoContainer}>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../assets/images/logo.png')}
                />
                <Text style={styles.title}>Account Information</Text>
              </View>
              <View style={styles.infoContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter username/email"
                  placeholderTextColor={COLOR.white}
                  keyboardType="email-address"
                  returnKeyLabel="NEXT"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter password"
                  placeholderTextColor={COLOR.white}
                  returnKeyLabel="GO"
                  secureTextEntry
                  autoCorrect={false}
                  ref={'txtPassword'}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 53, 70)',
    flexDirection: 'column',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 95,
  },
  title: {
    color: '#f7c744',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.9,
    height: 50,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
    padding: 20,
    // backgroundColor: 'red',
    flex: 1,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(32,53,70)',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
