import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import home from '../../assets/figma/home.png';

export default function Home() {
  return (
     <Image source= {home} style={styles.logo} />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 700,
  }
});
