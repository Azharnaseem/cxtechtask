import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, QuestionFive, QuestionFour, QuestionOne, QuestionSix, QuestionThree, QuestionTwo } from '~screens/app';

import ScreenNames from './routes';

import AppColors from '~utills/AppColors';
import { View } from 'react-native';
const Stack = createNativeStackNavigator();

export default function Routes() {
 
  return (
    <NavigationContainer fallback={<View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.white,
      }}
    >
     
    </View>}>
       
      {/* {!isLogin ? (
        <Stack.Navigator initialRouteName={ScreenNames.LOGIN} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      ) : ( */}
        <Stack.Navigator initialRouteName={ScreenNames.HOME} screenOptions={{ header: () => false }}>
          <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
          <Stack.Screen name={ScreenNames.QUESTIONONE} component={QuestionOne} />
          <Stack.Screen name={ScreenNames.QUESTIONTWO} component={QuestionTwo} />
          <Stack.Screen name={ScreenNames.QUESTIONTHREE} component={QuestionThree} />
          <Stack.Screen name={ScreenNames.QUESTIONFOUR} component={QuestionFour} />
          <Stack.Screen name={ScreenNames.QUESTIONFIVE} component={QuestionFive} />
          <Stack.Screen name={ScreenNames.QUESTIONSIX} component={QuestionSix} />
        </Stack.Navigator>
      {/* )} */}
    </NavigationContainer>
  );
}