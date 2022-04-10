import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../avatar';

import { styles } from './style';

export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage='https://avatars.githubusercontent.com/u/30549830?v=4' />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        olá,
                    </Text>

                    <Text style={styles.userName}>
                        Rodrigo
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>

            </View>

        </View >
    );
}