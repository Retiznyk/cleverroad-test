import React, { PureComponent } from "react";
import { View, Image } from "react-native";

import Places from "../components/city/Places";
import Activities from "../components/city/Activities";
import Feed from "../components/city/Feed";

import ReactNativeParallaxHeader from "react-native-parallax-header";

const HEADER_URL = {
  uri:
    "https://happytovisit.com/glib/3/Burj-Khalifa-At-The-Top-Ticket-from-Dubai-8-13683.png"
};

import places from "../../places.json";
import activities from "../../activities.json";
import feed from "../../feed.json";

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
    <View>
      <Places places={places} />
      <Activities activities={activities} />
      <Feed feed={feed} />
    </View>
  );

  render() {
    return (
      <ReactNativeParallaxHeader
        headerMinHeight={80}
        headerMaxHeight={170}
        extraScrollHeight={20}
        title={"Dubai"}
        titleStyle={{ fontSize: 16 }}
        backgroundImage={HEADER_URL}
        backgroundImageScale={1.2}
        renderContent={this.renderContent}
      />
    );
  }
}
