// screens/ResultScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PointsContext } from '../context/PointsContext';

const ResultScreen = ({ route, navigation }) => {
  const { points } = useContext(PointsContext);
  const { change } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        You {change === 'win' ? 'Won' : 'Lost'}!
      </Text>
      <Text style={styles.pointsText}>Total Points: {points}</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
  },
  resultText: {
    fontSize: 28,
    marginBottom: 20,
  },
  pointsText: {
    fontSize: 22,
    marginBottom: 40,
  },
});

export default ResultScreen;
