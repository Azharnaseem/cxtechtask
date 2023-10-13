import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, ScreenWrapper } from '~components';
import { logout } from '~redux/slices/authSlice';
import styles from './styles';
import { Logo } from '~assets/Images';
export default function QuestionOne({ navigation, route }) {
    const dispatch = useDispatch();
    const [decendingarray,setdecendingArray]=useState([]);
    const dscendingOrdr=(arr)=> {
        for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
             
              const temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
            }
          }
        }
        setdecendingArray(arr);
        return arr;
      }
    return (
        <ScreenWrapper>
            <View style={styles.mainViewContainer}>
                <Image src={Logo}  style={styles.logoStyle} resizeMode='contain'/>
                <Text style={styles.title}>Question No: 1</Text>
                <Text style={styles.quesTextStyle}>{`Write a function that will take an array as input, sort, and return the array in descending order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].`}</Text>
                
                
                <Button
                    title={'Answer Click'}
                    onPress={() =>{
                        const inputArray = [1, 3, 4, 2, 5, 7,6];
                        dscendingOrdr(inputArray);
                    } }
                />
               {decendingarray !=[]&& <Text>{`Result is: [ ${decendingarray} ]`}</Text>}
            </View>
        </ScreenWrapper>
    );
}
