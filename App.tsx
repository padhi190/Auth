import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';
import store from './reducer/store';
import { selectAuth } from './reducer/AuthSlice';

export type Pages = {
  signin: undefined;
  signup: undefined;
};

const Stack = createNativeStackNavigator<Pages>();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
}

export type ProtectedPages = {
  dashboard: undefined;
};

const ProStack = createNativeStackNavigator<ProtectedPages>();

function ProtectedStack() {
  return (
    <ProStack.Navigator>
      <ProStack.Screen name="dashboard" component={Dashboard} />
    </ProStack.Navigator>
  );
}

function Root({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

function NavigationStack() {
  const { loggedIn } = useSelector(selectAuth);
  return (
    <NavigationContainer>
      {loggedIn ? <ProtectedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Root>
      <NavigationStack />
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
