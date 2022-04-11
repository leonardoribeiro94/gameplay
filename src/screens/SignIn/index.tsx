import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/button-icon/buttonIcon';
import { routeNavigationProps } from '../../routes/auth.routes';

export function SignIn() {
    const navigation = useNavigation<routeNavigationProps>();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>a
                    Conecte-se {'\n'}
                    Organize {'\n'}
                    suas jogatinas
                </Text>
                <Text
                    style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    onPress={handleSignIn}
                    activeOpacity={0.7}
                    title="Entrar com Discord"
                />
            </View>
        </View>
    );
}