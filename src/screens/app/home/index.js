import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';

import ScreenNames from '~routes/routes';
import { Azhar, Logo } from '~assets/Images';
export default function Home({ navigation, route }) {
    const dispatch = useDispatch()
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image source={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Code Experts Ltd.</Text>
                <Text style={styles.title}>React native Task</Text>
                <Button
                    title={'Question No 1'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONONE)}
                />
                <Button
                    title={'Question No 2'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONTWO)}
                />
                <Button
                    title={'Question No 3'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONTHREE)}
                />
                <Button
                    title={'Question No 4'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONFOUR)}
                />
                <Button
                    title={'Question No 5'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONFIVE)}
                />
                <Button
                    title={'Question No 6'}
                    onPress={() => navigation.navigate(ScreenNames.QUESTIONSIX)}
                />
            </View>
        </ScreenWrapper>
    );
}
