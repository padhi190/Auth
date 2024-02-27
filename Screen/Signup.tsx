
import { Button, StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from 'react'
import { Pages } from '../App';

interface Props extends NativeStackScreenProps<Pages, 'signup'> {}

const Signup = ({ navigation }: Props) => {
  return (
    <View>
        <Button title='back to login' onPress={() => navigation.replace("signin")}/>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})