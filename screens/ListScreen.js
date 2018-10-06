import React from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  SectionList,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class ListScreen extends React.Component {
  gotoEntry = () => {
    this.props.navigation.push("Entry");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <SectionList
          sections={[
            { title: "September", data: ["Wed 25th", "Tues 24th", "Mon 23rd"] },
            { title: "August", data: ["Fri 31st", "Thurs 30th"] }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.gotoEntry()}>
              <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    height: 36,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "rgb(98, 197, 184)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "rgb(125, 175, 200)"
  }
});
