import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react'
import { Pages } from '../App'
import { login, selectAuth } from '../reducer/AuthSlice';
import { AppDispatch } from '../reducer/store';

interface Props extends NativeStackScreenProps<Pages, 'signin'> {
}

const Login = ({navigation }: Props) => {
    const dispatch = useDispatch<AppDispatch>()
  return (
    <View>
        <Button title='Login' onPress={() => dispatch(login('pitra'))}/>
        <Button title='Go to signup' onPress={() => navigation.replace('signup')}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})