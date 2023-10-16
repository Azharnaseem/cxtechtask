import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, ScreenWrapper} from '~components';
import {logout} from '~redux/slices/authSlice';
import styles from './styles';
import {Logo} from '~assets/Images';
export default function QuestionFour({navigation, route}) {
  const array = [3, 4, 9, 1, 7, 3, 2, 6];
  function findMissNumbers(arr) {
    const maximum = Math.max(...arr);

    const presentArray = Array(maximum + 1).fill(false);

    for (const number of arr) {
      if (number >= 0 && number <= maximum) {
        presentArray[number] = true;
      }
    }

    const missNumbers = [];
    for (let i = 0; i <= maximum; i++) {
      if (!presentArray[i]) {
        missNumbers.push(i);
      }
    }

    return missNumbers;
  }
  return (
    <ScreenWrapper>
      <View style={styles.mainViewContainer}>
        <Image src={Logo} style={styles.logoStyle} resizeMode="contain" />
        <Text style={styles.title}>Question No: 4</Text>
        <Text
          style={
            styles.quesTextStyle
          }>{`Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8]`}</Text>

        <Button title={'Answer Below'} />
        {<Text>{`Result is: [ ${findMissNumbers(array)}]`}</Text>}
      </View>
    </ScreenWrapper>
  );
}
