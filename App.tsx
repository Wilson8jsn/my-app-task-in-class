import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const EcuadorFlagApp = () => {
  const [currentColor, setCurrentColor] = useState(null);

  const handlePress = (color) => {
    setCurrentColor(color);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePress('yellow')} style={styles.yellow}>
        <TouchableOpacity onPress={() => handlePress('blue')} style={styles.blue}>
          <TouchableOpacity onPress={() => handlePress('red')} style={styles.red}>
            <Text style={styles.text}>{currentColor ? `${currentColor.toUpperCase()}-Ecuador` : 'Ecuador'}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellow: {
    width: 300,
    height: 200,
    backgroundColor: '#FFD100',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    width: 250,
    height: 150,
    backgroundColor: '#0033A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    width: 200,
    height: 100,
    backgroundColor: '#EF3340',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default EcuadorFlagApp;
