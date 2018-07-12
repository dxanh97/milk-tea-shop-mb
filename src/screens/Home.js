import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import commonStyles from './../styles/common';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={commonStyles.screen}>
        <Text>Home</Text>
      </View>
    );
  }
  
}