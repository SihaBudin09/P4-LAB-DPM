import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Scoreboard from './Scoreboard'; // Mengimpor komponen Scoreboard

const App = () => {
  const [teamA, setTeamA] = useState("Tim A");
  const [teamB, setTeamB] = useState("Tim B");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Aplikasi Pengaturan Skor Futsal</Text>
      {/* Menampilkan komponen Scoreboard dengan mengirimkan nama tim */}
      <Scoreboard teamA={teamA} teamB={teamB} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
