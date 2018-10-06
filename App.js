import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createDrawerNavigator,
  StackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import ListScreen from "screens/ListScreen";
import LoginScreen from "./screens/LoginScreen";
import EntryScreen from "./screens/EntryScreen";

export default class App extends React.Component {
  render() {
    return <AppNav navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const StackNav = StackNavigator(
  {
    Home: {
      screen: ListScreen
    },
    Entry: {
      screen: EntryScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

StackNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const TabNav = createBottomTabNavigator(
  {
    App: {
      screen: StackNav
    },
    Login: {
      screen: LoginScreen
    },
    Entry: {
      screen: EntryScreen
    }
  },
  {
    initialRouteName: "App"
  }
);

const HomeStack = StackNavigator({
  Tabs: {
    screen: TabNav
  },
  Entry: {
    screen: EntryScreen
  }
});

export const AppNav = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: TabNav
  }
});
