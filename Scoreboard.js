import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState(null);

  // Fungsi untuk menambah skor tim A
  const increaseScoreA = () => {
    if (winner) return; // jika sudah ada pemenang, tidak bisa menambah skor lagi
    setScoreA(prev => prev + 1);
  };

  // Fungsi untuk mengurangi skor tim A
  const decreaseScoreA = () => {
    if (scoreA > 0) setScoreA(prev => prev - 1);
  };

  // Fungsi untuk menambah skor tim B
  const increaseScoreB = () => {
    if (winner) return; // jika sudah ada pemenang, tidak bisa menambah skor lagi
    setScoreB(prev => prev + 1);
  };

  // Fungsi untuk mengurangi skor tim B
  const decreaseScoreB = () => {
    if (scoreB > 0) setScoreB(prev => prev - 1);
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner(null);
  };

  // Cek pemenang
  if (scoreA === 10 && !winner) {
    setWinner(teamA);
  } else if (scoreB === 10 && !winner) {
    setWinner(teamB);
  }

  return (
    <View style={styles.scoreboard}>
      <Text style={styles.teamName}>{teamA}: {scoreA}</Text>
      <Text style={styles.teamName}>{teamB}: {scoreB}</Text>

      {/* Pesan pemenang */}
      {winner && <Text style={styles.winnerText}>{winner} MENANG!</Text>}

      {/* Kontrol skor tim A */}
      <View style={styles.buttonRow}>
        <Button title="+" onPress={increaseScoreA} />
        <Button title="-" onPress={decreaseScoreA} />
      </View>

      {/* Kontrol skor tim B */}
      <View style={styles.buttonRow}>
        <Button title="+" onPress={increaseScoreB} />
        <Button title="-" onPress={decreaseScoreB} />
      </View>

      {/* Tombol Reset */}
      <Button title="Reset" onPress={resetScores} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreboard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  teamName: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default Scoreboard;
