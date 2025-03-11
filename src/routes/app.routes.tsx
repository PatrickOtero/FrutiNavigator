import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/home";
import ProductDetails from "../screens/productDetails";
import { Config } from "../screens/config";
import { ArticleFeed } from "../screens/articleFeed";
import { LoginScreen } from "../screens/loginPage";
import CreateUserScreen from "../screens/CreateUserPage";
import EditProfile from "../screens/EditUserPage";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen
                name="login"
                component={LoginScreen}
             />
            <Screen
                name="home"
                component={Home}
             />
            <Screen
                name="productDetails"
                component={ProductDetails}
             />
            <Screen
                name="config"
                component={Config}
             />
            <Screen
                name="articleFeed"
                component={ArticleFeed}
             />
            <Screen
                name="register"
                component={CreateUserScreen}
             />
            <Screen
                name="profileEdit"
                component={EditProfile}
             />
        </Navigator>
    );
}