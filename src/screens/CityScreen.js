import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import Places from "../components/city/Places";
import Activities from "../components/city/Activities";
import Feed from "../components/city/Feed";

import ReactNativeParallaxHeader from "react-native-parallax-header";

import { colors, metrics } from "../themes";
import Navbar from "../components/city/Navbar";
import TabBarIcon from "../components/city/TabBarIcon";

import places from "../../places.json";
import activities from "../../activities.json";
import feed from "../../feed.json";
import cities from "../../cities.json";

const [CITY] = cities;

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    title: "My City",
    tabBarIcon: <TabBarIcon />
  };

  renderContent = () => (
    <View style={style.container}>
      <Places places={places} />
      <Activities activities={activities} />
      <Feed feed={feed} />
    </View>
  );

  render() {
    return (
      <ReactNativeParallaxHeader
        headerMinHeight={metrics.headerHeight}
        headerMaxHeight={170}
        extraScrollHeight={20}
        title={CITY.name}
        titleStyle={style.title}
        backgroundImage={{ uri: CITY.image }}
        backgroundImageScale={1.2}
        navbarColor={colors.primary}
        renderNavBar={() => <Navbar />}
        renderContent={this.renderContent}
      />
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  container: {
    backgroundColor: colors.lightGray
  }
});
