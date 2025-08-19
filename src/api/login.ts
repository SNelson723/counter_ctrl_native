import axios from 'axios';
import qs from 'qs';
import { encrypt } from '../utils';

const login = async (
  url: string,
  key: string,
  username: string,
  password: string,
  impersonate: number,
) => {
  const encryptedUsername = encrypt(username, key).toString();
  const encryptedPassword = encrypt(password, key).toString();
  const json = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    url: `${url}${'auth/reacttoken'}`,
    data: qs.stringify({
      username: encryptedUsername,
      password: encryptedPassword,
      OV: impersonate,
    }),
  });
  return json;
};

const savePrefs = async (
  url: string,
  token: string,
  storeid: string,
  groupid: string,
  searchtype: string,
  groupname: string,
) => {
  const json = await axios({
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    url: url + 'prefs/saveprefs',
    params: {
      storeid,
      groupid,
      searchtype,
      groupname,
    },
  });
  return json;
};

const readPrefs = async (url: string, token: string) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    url: url + 'prefs',
  });
  return json;
};

export { login, readPrefs, savePrefs };
