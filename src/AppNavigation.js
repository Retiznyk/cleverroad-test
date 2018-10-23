import { createBottomTabNavigator } from "react-navigation";

import CityScreen from "./screens/CityScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import AddScreen from "./screens/AddScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

export default createBottomTabNavigator(
  {
    City: CityScreen,
    Favorite: FavoriteScreen,
    Add: AddScreen,
    Notifications: NotificationsScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "City"
  }
);
