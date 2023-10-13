import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionTwo({ navigation, route }) {
    const dispatch = useDispatch();
   
    function isPalindrome(str) {
        // Remove spaces and convert the string to lowercase for a case-insensitive check
        const cleanedStr = str.toLowerCase().replace(/\s/g, '');
      
        // Reverse the cleaned string
        const reversedStr = cleanedStr.split('').reverse().join('');
      
        // Check if the original string and the reversed string are the same
        return cleanedStr === reversedStr;
      };
      const string1 = "madam";
      const string2 = "doctor";
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 2</Text>
                <Text style={styles.quesTextStyle}>{`Write a function that will take a string as input, check and return if it is palindrome or not. For example, if the string is “madam” the function should return true and if the string
is “doctor” it should return false.`}</Text>
                
                
                <Button
                    title={'Answer below'}
                    
                />
                <Text>{`Result is when ${string1}: ${isPalindrome(string1)}`}</Text>
                <Text>{`Result is:when ${string2} ${isPalindrome(string2)}`}</Text>

        </View>
        </ScreenWrapper>
    );
}
