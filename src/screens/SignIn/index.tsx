import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/button-icon/buttonIcon';


export function SignIn() {

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
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title="Entrar com Discord"
                    activeOpacity={1}
                />
            </View>
        </View>
    );
}