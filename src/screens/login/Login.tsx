import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginStyles } from '.';
import { login, readPrefs } from '../../api/login';
import {
  setToken,
  setLoggedIn,
  setScope,
  setPasswordChangeNeeded,
} from '../../features/appSlice';
import {
  setUsername,
  setPassword,
  setCompany,
  setUserLevel,
  setUserId,
  setFirstName,
  setSecurity,
  setLastSearch,
  setLastSearchType,
  setResetPassword,
  setRole,
  setLastName,
  setEmail,
  setSecurityQuestionId,
} from '../../features/userSlice';
import Logo from '../../assets/logo_black.svg';
import { JsonError } from '../../interfaces';
import {
  SEARCH_TYPE,
  setLastGroup,
  setLastStore,
  setType,
} from '../../features/searchSlice';
import {
  setScopes,
  setSearchType,
  setSelectedScope,
  setSingleSearchString,
  setStoreid,
} from '../../features/storeSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.user);
  const context = useAppSelector(state => state.app);
  const [useImpersonation, setUseImpersonation] = useState<boolean>(false);

  const handleSubmit = () => {
    login(
      context.url,
      context.key,
      state.username,
      state.password,
      useImpersonation ? 1 : 0,
    )
      .then(resp => {
        const j = resp.data;
        if (j.error === 0) {
          dispatch(setCompany(j.company));
          dispatch(setUserId(j.userid));
          dispatch(setFirstName(j.username));
          dispatch(setLastName(j.lastnName));
          dispatch(setLoggedIn(true));
          dispatch(setSecurity(j.security));
          dispatch(setToken(j.token));
          dispatch(setUserLevel(j.userLevel));
          dispatch(setEmail(j.email));
          dispatch(setSecurityQuestionId(j.securityQuestionId));
          dispatch(setResetPassword(j.resetPassword));

          if (j.role) {
            dispatch(setRole(j.role));
          }

          getPrefs(j.token);
        }
      })
      .catch((err: JsonError) => console.log(err.message));
  };

  const getPrefs = (token: string) => {
    console.log('howdy');
    readPrefs(context.url, token)
      .then(resp => {
        const j = resp.data;
        if (j.error === 0) {
          console.log('Prefs Response:', j);

          const prefs = j.prefs[0];
          dispatch(setLastSearch(prefs.rLastSearch));
          dispatch(setLastSearchType(prefs.lastSearchType));
          dispatch(setType(prefs.lastSearchType as SEARCH_TYPE));
          dispatch(setLastStore(prefs.rLastSearch));
          dispatch(setLastGroup(prefs.lastGroup));
          dispatch(setScope(prefs.scope));

          switch (prefs.lastSearchType) {
            case '1':
              dispatch(setSearchType('Single Store'));
              break;
            case '2':
              dispatch(setSearchType('Single Store'));
              break;
            case '3':
              dispatch(setSearchType('Group'));
              break;
            case '4':
              dispatch(setSearchType('Version'));
              break;
            case '5':
              dispatch(setSearchType('Sub Group'));
              break;
            case '6':
              dispatch(setSearchType('Store Id'));
              break;
            case '7':
              dispatch(setSearchType('Store #'));
              break;
            default:
              dispatch(setSearchType('Single Store'));
              break;
          }

          dispatch(setSingleSearchString(prefs.rLastSearch));
          dispatch(setStoreid(prefs.rLastSearch));
          dispatch(setSelectedScope(prefs.scope));
          // dispatch(setLastRoute(prefs.lastRoute));
          dispatch(setScopes(j.scopes));

          const scope = j.scopes.find((s: any) => s.id === prefs.scope);
          if (scope) {
            dispatch(setSelectedScope(scope));
          }

          if (prefs.passwordChangeNeeded === '1') {
            dispatch(setPasswordChangeNeeded(true));
          }
        }
      })
      .catch((err: JsonError) => console.log(err.message));
  };

  const handleUsername = (text: string) => {
    dispatch(setUsername(text));
  };

  const handlePassword = (text: string) => {
    dispatch(setPassword(text));
  };

  return (
    <View style={loginStyles.container}>
      <Logo style={loginStyles.image} />
      <Text style={loginStyles.title}>Sign in to your acount</Text>
      <Text style={loginStyles.inputLabelText}>User Id</Text>
      <TextInput style={loginStyles.input} onChangeText={handleUsername} />
      <Text style={loginStyles.inputLabelText}>Password</Text>
      <TextInput
        style={loginStyles.input}
        onChangeText={handlePassword}
        secureTextEntry
      />
      <Pressable style={loginStyles.button} onPress={handleSubmit}>
        <Text style={loginStyles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
