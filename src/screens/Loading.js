import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';

import logo from '../../assets/white-red.png';

export default function Loading({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
  navigation.navigate('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginTop: 200,
  },

  logo: {
    width: 180,
    height: 180,
  }
});
