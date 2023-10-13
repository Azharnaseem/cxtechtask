import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionThree({ navigation, route }) {
    
    const array = [3, 7, 1, 5, 11, 19];
    function sumOfTwoLargestNumbers(arr) {
        if (arr.length < 2) {
             
          return "Array should have at least two numbers";
        
        }
      
        // Sort the array in descending order
        arr.sort(function(a, b) {
          return b - a;
        });
      
        // Sum the two largest numbers
        const sum = arr[0] + arr[1];
        return sum;
      }
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 3</Text>
                <Text style={styles.quesTextStyle}>{`Write a function that will take an array as input and return the sum of the two largest numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers.`}</Text>
                
                
                <Button
                    title={'Answer Below'} 
                />
               {<Text>{`Result is: [ ${sumOfTwoLargestNumbers(array)} ]`}</Text>}
            </View>
        </ScreenWrapper>
    );
}
