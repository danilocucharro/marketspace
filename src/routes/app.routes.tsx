import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Platform } from "react-native";

import { Home } from "@/screens/Home"
import { MyAds } from "@/screens/MyAds";
import { Profile } from "@/screens/Profile";

import { useTheme } from "styled-components/native";
import { House, SignOut, Tag } from "phosphor-react-native";

type AppRoutesProps = {
  home: undefined;
  myAds: undefined;
  profile: undefined;
}

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutesProps>()
  const { COLORS } = useTheme()

  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarInactiveTintColor: COLORS.GRAY_400,
      tabBarStyle: {
        backgroundColor: COLORS.GRAY_700,
        borderTopWidth: 0,
        height: 64,
        paddingTop: 12,
      }
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{tabBarIcon: () => <House color={COLORS.GRAY_100} size={24} />}}
      />

      <Screen 
        name="myAds"
        component={MyAds}
        options={{tabBarIcon: () => <Tag color={COLORS.GRAY_100} size={24} />}}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{tabBarIcon: () => <SignOut color={COLORS.RED_LIGHT} size={24} />}}
      />
    </Navigator>
  )
}