import React from 'react';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import navigationString from './navigationString';

export default function (Stack) {
  return (
    <>
       <Stack.Screen name={navigationString.LOGIN} component={Login}/>
       <Stack.Screen name={navigationString.SIGNUP} component={SignUp}/>
    </>
  );
}