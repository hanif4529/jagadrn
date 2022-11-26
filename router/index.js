import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {OnBoarding, ChangePassword, CreateNewPassword, ChangePasswordSucces, SecurityAccess} from '../pages'

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{ headerShown: false }} />
            <Stack.Screen name="SecurityAccess" component={SecurityAccess} options={{headerShown: false}} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}}/>
            <Stack.Screen name="ChangePasswordSucces" component={ChangePasswordSucces} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router