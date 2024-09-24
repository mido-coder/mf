import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const labs = [
    { name: 'Labo 1', distance: '5 km', description: 'Comprehensive blood test lab' },
    { name: 'Clinic 2', distance: '3 km', description: 'Specialized in rapid diagnostics' },
    { name: 'Pharmacy 3', distance: '7 km', description: 'Basic health tests available' },
    { name: 'Labo 4', distance: '10 km', description: 'Advanced genetic analysis' },
    { name: 'Hospital 5', distance: '2 km', description: 'Full hospital-based diagnostics' },
    { name: 'Doctor Office 6', distance: '8 km', description: 'Private consultations and tests' },
    { name: 'Labo 7', distance: '12 km', description: 'State-of-the-art medical technology' },
    { name: 'Unknown Location', distance: '', description: 'Unavailable at the moment' },
  ];

  const handleApply = (labName) => {
    Alert.alert('Application Submitted', `You have applied for a test at ${labName}.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {labs.map((lab, index) => (
          <View key={index} style={styles.labContainer}>
            <Text style={styles.labName}>{lab.name}</Text>
            <Text style={styles.distance}>{lab.distance ? lab.distance : 'Distance not available'}</Text>
            <Text style={styles.description}>{lab.description}</Text>
            <TouchableOpacity style={styles.applyButton} onPress={() => handleApply(lab.name)}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  labContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  labName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  distance: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  applyButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
