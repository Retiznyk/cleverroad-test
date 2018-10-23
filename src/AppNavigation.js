import { createBottomTabNavigator } from "react-navigation";

import MyCityScreen from "./screens/MyCityScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default createBottomTabNavigator(
  {
    MyCity: MyCityScreen,
    Favorite: FavoriteScreen,
    Notifications: NotificationsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "MyCity"
  }
);
