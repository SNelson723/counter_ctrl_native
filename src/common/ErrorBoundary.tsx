import React, { ReactNode } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import RNRestart from 'react-native-restart';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: false,
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Here you can send the error to monitoring/logging service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetApp = async () => {
    console.log('do something to reset');
  };

  handleBackToSignIn = async () => {
    RNRestart.Restart();
  };

  render() {
    if (this.state.error) {
      return (
        <View style={styles.safeAreaView}>
          <View style={styles.container}>
            <View style={styles.horizontal}>
              <FontAwesomeIcon icon={faCheckCircle} size={50} />
              <Text style={styles.oops}>Oops, Something went wrong</Text>
            </View>
            <Text
              style={{
                marginVertical: 10,
                lineHeight: 23,
                fontWeight: '500',
                width: '90%',
                textAlign: 'center',
              }}
            >
              The app ran into a problem and could not continue. Press the
              button below to restart.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleBackToSignIn}
            >
              <Text style={styles.buttonText}>Back to Login Screen</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
  },
  button: {
    paddingTop: 12,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    backgroundColor: 'purple',
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
  },
  oops: {
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 10, // Adding spacing from icon
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default ErrorBoundary;
