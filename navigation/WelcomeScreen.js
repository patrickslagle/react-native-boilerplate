import React from 'react';
import {
  View,
  StyleSheet,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="First Screen"
      onPress={() => navigation.navigate('FirstScreen')}
    />
    <Button
      title="Second Screen"
      onPress={() => navigation.navigate('SecondScreen')}
    />
  </View>
)

export default WelcomeScreen;
