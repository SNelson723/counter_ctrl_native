import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginStyles } from '.';
import { login, readPrefs } from '../../api/login';
import { setToken, setLoggedIn } from '../../features/appSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.user);
  const context = useAppSelector(state => state.app);

  const handleLogin = () => {};

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Sign in to your acount</Text>
      <TextInput style={loginStyles.input} placeholder="Username" />
      <TextInput style={loginStyles.input} placeholder="Password" secureTextEntry />
      <Pressable style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
