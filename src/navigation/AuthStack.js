import React from 'react';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

export default function (Stack) {
  return (
    <>
       <Stack.Screen name="LogIn" component={Login}/>
       <Stack.Screen name="SignUp" component={SignUp}/>
    </>
  );
}