import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';


type AuthRoutParams = {
    SignIn: undefined;
    Home: undefined;
}

export type routeNavigationProps = NativeStackNavigationProp<AuthRoutParams>;

const rootStack = createNativeStackNavigator<AuthRoutParams>()
const { Navigator, Screen } = rootStack;

export function AuthRout() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}