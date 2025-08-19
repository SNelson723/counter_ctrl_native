import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
// import { setToken, setLoggedIn } from '../../features/appSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector(state => state.app);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Username and Password</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      {/* <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;
