// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PointsContext } from '../context/PointsContext';

const HomeScreen = ({ navigation }) => {
  const { points, addPoints, deductPoints } = useContext(PointsContext);

  const handleWin = () => {
    addPoints(100);
    navigation.navigate('Result', { change: 'win' });
  };

  const handleLose = () => {
    deductPoints(50);
    navigation.navigate('Result', { change: 'lose' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Current Points: {points}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Win" onPress={handleWin} />
        <Button title="Lose" onPress={handleLose} color="red" />
      </View>
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
  pointsText: {
    fontSize: 24,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
