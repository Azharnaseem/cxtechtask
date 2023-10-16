import React from 'react';
import { View, Text, Image } from 'react-native';

import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionSix({ navigation, route }) {
   
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 6</Text>
                
               
            </View>
        </ScreenWrapper>
    );
}
