import React from "react";
import {
  TouchableHighlight,
  SectionList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#ff4081" }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]} />
);

export default class EntryScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" }
    ]
  };
  render() {
    return (
      // <TabView
      //   navigationState={this.state}
      //   renderScene={SceneMap({
      //     first: FirstRoute,
      //     second: SecondRoute
      //   })}
      //   onIndexChange={index =>
      //     this.setState({
      //       index
      //     })
      //   }
      //   initialLayout={{ width: Dimensions.get("window").width }}
      // />
      <Text>Entry Screen</Text>
    );
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
