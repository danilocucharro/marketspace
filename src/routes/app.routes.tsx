import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@/screens/Home";
import { MyAds } from "@/screens/MyAds";
import { Profile } from "@/screens/Profile";
import { ProductDetails } from "@/screens/ProductDetails";

import { useTheme } from "styled-components/native";
import { House, SignOut, Tag } from "phosphor-react-native";

type AppRoutesProps = {
  home: undefined;
  myAds: undefined;
  profile: undefined;
};

export type RootStackParamList = {
  app: undefined;
  productDetails: undefined;
};

const Tab = createBottomTabNavigator<AppRoutesProps>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  const { COLORS } = useTheme();

  function BottomTabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: COLORS.GRAY_400,
          tabBarStyle: {
            backgroundColor: COLORS.GRAY_700,
            borderTopWidth: 0,
            height: 64,
            paddingTop: 12,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: () => <House color={COLORS.GRAY_100} size={24} />,
          }}
        />
        <Tab.Screen
          name="myAds"
          component={MyAds}
          options={{
            tabBarIcon: () => <Tag color={COLORS.GRAY_100} size={24} />,
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: () => <SignOut color={COLORS.RED_LIGHT} size={24} />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="app" component={BottomTabNavigator} />
      <Stack.Screen name="productDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}