import { StyleSheet } from 'react-native';
import * as Colors from '../../styles/colors';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.theme.bkg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: Colors.theme.content,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: -40,
  },
  input: {
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 11,
  },
  inputLabelText: {
    fontWeight: '500',
    color: Colors.theme.content,
    fontSize: 17,
    marginBottom: 2,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: Colors.theme.blue500,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.theme.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
