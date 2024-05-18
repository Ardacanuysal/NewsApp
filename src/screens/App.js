import React from 'react';
import {View, StyleSheet} from 'react-native';

const CenteredContainer = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '50%',
    height: '100%',
  },
});

export default CenteredContainer;
