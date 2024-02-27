import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react'
import { Pages } from '../App'

interface Props extends NativeStackScreenProps<Pages, 'signin'> {
}

const Login = ({navigation }: Props) => {
  return (
    <View>
        <Button title='Login'/>
        <Button title='Go to signup' onPress={() => navigation.replace('signup')}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})