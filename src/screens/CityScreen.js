import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Badge, Header } from "react-native-elements";

import Places from "../components/city/Places";
import Activities from "../components/city/Activities";
import Feed from "../components/city/Feed";

import ReactNativeParallaxHeader from "react-native-parallax-header";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const HEADER_URL = {
  uri:
    "https://happytovisit.com/glib/3/Burj-Khalifa-At-The-Top-Ticket-from-Dubai-8-13683.png"
};

import places from "../../places.json";
import activities from "../../activities.json";
import feed from "../../feed.json";
import { colors } from "../themes";

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    title: "My City",
    tabBarIcon: (
      <Image
        source={require("@resources/icons/cityIcnActive.png")}
        style={{ height: 20, width: 20 }}
      />
    )
  };

  renderContent = () => (
    <View style={{ backgroundColor: colors.lightGray }}>
      <Places places={places} />
      <Activities activities={activities} />
      <Feed feed={feed} />
    </View>
  );

  renderNavbar = () => (
    <Header
      title="Dubai"
      backgroundColor="transparent"
      outerContainerStyles={{ borderBottomWidth: 0, height: 90 }}
      leftComponent={
        <View>
          <Badge
            value="Change City"
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "white",
              borderWidth: 1
            }}
            wrapperStyle={{
              marginTop: 20
            }}
            textStyle={{ color: "white" }}
          />
        </View>
      }
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="map"
            size={20}
            color="white"
            style={{ padding: 5, marginTop: 20 }}
          />
          <View style={{ width: 10 }} />
          <Icon
            name="magnifier"
            size={20}
            color="white"
            style={{ padding: 5, marginTop: 20 }}
          />
        </View>
      }
    />
  );

  render() {
    return (
      <ReactNativeParallaxHeader
        headerMinHeight={90}
        headerMaxHeight={170}
        extraScrollHeight={20}
        title={"Dubai"}
        titleStyle={style.title}
        backgroundImage={HEADER_URL}
        backgroundImageScale={1.2}
        navbarColor={colors.primary}
        renderNavBar={this.renderNavbar}
        renderContent={this.renderContent}
      />
    );
  }
}

const style = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
