import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import { StackNavigator } from "react-navigation";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View>
        <TextInput //style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="next"
          placeholder="Username"
          placeholderTextColor="rgba(225,225,225,0.7)"
        />

        <TextInput //style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="rgba(225,225,225,0.7)"
          secureTextEntry
        />
        <Button
          title="Enter"
          onPress={() =>
            this.props.navigation.navigate("Home", { details: this.state.text })
          }
        />
      </View>

      // <View style={{ padding: 10 }}>
      //   <Text>Login</Text>
      //   <TextInput
      //     style={{ height: 40 }}
      //     placeholder="Type here to translate!"
      //     onChangeText={text => this.setState({ text })}
      //   />
      //   <Text style={{ padding: 10, fontSize: 42 }}>
      //     {this.state.text
      //       .split(" ")
      //       .map(word => word && "🍕")
      //       .join(" ")}
      //   </Text>
      //   <Button
      //     title="Enter"
      //     onPress={() =>
      //       this.props.navigation.navigate("Home", { details: this.state.text })
      //     }
      //   />
      // </View>
    );
  }
}
