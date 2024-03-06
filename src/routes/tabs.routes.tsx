import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BookmarkSimple, House, MagnifyingGlass } from "phosphor-react-native";
import { Details } from "../screens/Details";
import { Favorites } from "../screens/Favorites";
import { Home } from "../screens/Home";
import { Search } from "../screens/Search";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#242A32',
                    height: 78,
                    alignItems: 'center',
                    borderTopWidth: 1,
                    borderTopColor: '#0296E5'
                },
                headerShown: false,
                tabBarActiveTintColor: '#0296E5',
                tabBarInactiveTintColor: '#67686D',
                tabBarShowLabel: false,
            }}
        >
            <Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <House color={color} size={30} />
                    )
                }}
            />
            <Screen
                name="Details"
                component={Details}
                options={{
                    tabBarButton: () => null,
                }}
            />
            <Screen name="Search" component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MagnifyingGlass color={color} size={30} />
                    )
                }}
            />
            <Screen name="Watch List" component={Favorites}
                options={{
                    tabBarIcon: ({ color }) => (
                        <BookmarkSimple color={color} size={30} />
                    )
                }}
            />
        </Navigator>
    )
}