import React from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginStyles } from '.';
import { login, readPrefs } from '../../api/login';
import { setToken, setLoggedIn } from '../../features/appSlice';
import Logo from '../../assets/logo_black.svg';

const Login = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.user);
  const context = useAppSelector(state => state.app);

  const handleLogin = () => {};

  return (
    <View style={loginStyles.container}>
      <Logo style={loginStyles.image} />
      <Text style={loginStyles.title}>Sign in to your acount</Text>
      <Text style={loginStyles.inputLabelText}>User Id</Text>
      <TextInput style={loginStyles.input} />
      <Text style={loginStyles.inputLabelText}>Password</Text>
      <TextInput
        style={loginStyles.input}
        secureTextEntry
      />
      <Pressable style={loginStyles.button} onPress={handleLogin}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
