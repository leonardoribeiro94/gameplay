import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRout } from "./auth.routes";

export function Routes() {
    return (
        <NavigationContainer>
            <AuthRout />
        </NavigationContainer>
    )
}