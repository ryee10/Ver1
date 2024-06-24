import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ScanQrScreen = () => {
  const simulateQrScan = () => {
    alert('Simulating QR code scan...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Scan QR Code</Text>
      <TouchableOpacity style={styles.scanButton} onPress={simulateQrScan}>
        <Text style={styles.scanButtonText}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161622',
  },
  headerTitle: {
    fontSize: 24,
    color:'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scanButton: {
    padding: 20,
    backgroundColor: '#FFA001',
    borderRadius: 8,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ScanQrScreen;
