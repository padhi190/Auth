import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { logout, selectAuth } from '../reducer/AuthSlice';
import { AppDispatch } from '../reducer/store';

const Dashboard = () => {
  const { username } = useSelector(selectAuth);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View>
      <Text>Dashboard {username}</Text>
      <Button title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
