import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Colors from './styles/colors';

import DrawerContents from './common/DrawerContents';
import Login from './screens/login/Login';
import HomeScreen from './screens/home/HomeScreen';
import { useAppSelector } from './hooks';

const Drawer = createDrawerNavigator();
const Base = () => {
  const context = useAppSelector(state => state.app);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {!context.loggedIn ? (
          <Login />
        ) : (
          <Drawer.Navigator
            initialRouteName="Home"
            backBehavior="history"
            drawerContent={drawerProps => <DrawerContents {...drawerProps} />}
            screenOptions={{
              drawerStyle: {
                backgroundColor: 'white',
                width: 240,
              },
            }}
          >
            <Drawer.Screen name="Home" component={HomeScreen} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.theme.bkg,
  },
});

export default Base;
