import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import { HomePage } from "./screens/Home";
import { DetailPage } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUserName";
import { RouteProp } from "@react-navigation/native";

type TScreenDefinitions = {
    home: undefined;
    setUserName: undefined;   
    detail: { rate: number };
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomePage} />
            <Stack.Screen name="detail" component={DetailPage} />
            <Stack.Screen name="setUserName" component={SetUserNamePage} />
        </Stack.Navigator>
    )
}

export type TNavigationScreenProps  = NativeStackNavigationProp<TScreenDefinitions>;

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;