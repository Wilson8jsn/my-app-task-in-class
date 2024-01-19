import React from 'react';
import { View, StyleSheet } from 'react-native';
import EcuadorFlagApp from './componets/EcuadorFlagApp';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <EcuadorFlagApp />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;