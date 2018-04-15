import React, { Component } from "react";
import { ImageBackground, View, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { Container, Button, Text } from "native-base";
import Dimensions from 'Dimensions';

import styles from "./styles";

const launchscreenBg = require("../../../assets/background.jpg");
const launchscreenLogo = require("../../../assets/logo-main.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1, alignItems: 'center'}}>
            <View style={stylesIn.inputWrapper}>
                <TextInput 
                style={stylesIn.input}
                placeholder="Username"
                placeholderTextColor="black"/>
            </View>              
            <View style={stylesIn.inputWrapper}>
                <TextInput 
                style={stylesIn.input}
                placeholder="Password"
                placeholderTextColor="black"/>
            </View>
            <View style={{ marginBottom: 120 }}>
            <Button
              style={{ backgroundColor: "#cbce27", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Login</Text>
            </Button>
          </View>
          </KeyboardAvoidingView>
         
        </ImageBackground>
      </Container>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const stylesIn = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 20,
    borderRadius: 20,
    color: '#000000',
  },
  inputWrapper: {
    flex: 1,
  },
});

export default Home;
