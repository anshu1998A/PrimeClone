import React from 'react';
import Login from '../Screens/Login';

export default function (Stack) {
  return (
    <>
       <Stack.Screen name="LogIn" component={Login}/>
    </>
  );
}