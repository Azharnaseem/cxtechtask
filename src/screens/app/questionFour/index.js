import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionFour({ navigation, route }) {
    
    const array = [3, 4, 9, 1, 7, 3, 2, 6];
    function findMissingNumbers(arr) {
        // Find the highest entry in the array
        const max = Math.max(...arr);
      
        // Create a new array to represent the presence of each number
        const presenceArray = Array(max + 1).fill(false);
      
        // Set the presence to true for each number in the input array
        for (const num of arr) {
          if (num >= 0 && num <= max) {
            presenceArray[num] = true;
          }
        }
      
        // Find missing numbers by checking for false values in the presence array
        const missingNumbers = [];
        for (let i = 0; i <= max; i++) {
          if (!presenceArray[i]) {
            missingNumbers.push(i);
          }
        }
      
        return missingNumbers;
      }
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 4</Text>
                <Text style={styles.quesTextStyle}>{`Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8]`}</Text>
                
                
                <Button
                    title={'Answer Below'} 
                />
               {<Text>{`Result is: [ ${findMissingNumbers(array) }]`}</Text>}
            </View>
        </ScreenWrapper>
    );
}
