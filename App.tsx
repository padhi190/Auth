import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Dashboard from './Screen/Dashboard';

export type Pages = {
  signin: undefined;
  signup: undefined;
}

const Stack = createNativeStackNavigator<Pages>();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  )
}

export type ProtectedPages = {
  dashboard: undefined;
}

const ProStack = createNativeStackNavigator<ProtectedPages>();

function ProtectedStack() {
  return (
    <ProStack.Navigator>
      <ProStack.Screen name='dashboard' component={Dashboard}/>
    </ProStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
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
