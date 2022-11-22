import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesing from "./components/AntDesing";
import Entypo from "./components/Entypo";
import Feather from "./components/Feather";


const Menu = createBottomTabNavigator().Navigator;
const Items = createBottomTabNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      <Menu>
        <Items name="AntDesing" component={ AntDesing }/>
        <Items name="Entypo" component={ Entypo }/>
        <Items name="Feather" component={ Feather }/>
      </Menu>
    </NavigationContainer>
  );
}
