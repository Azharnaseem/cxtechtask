import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionFive({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 5</Text>
                
                
                <Button
                    title={'Question No 5'}
                    onPress={() => dispatch(logout())}
                />
                
            </View>
        </ScreenWrapper>
    );
}
