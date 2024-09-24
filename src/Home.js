import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const sections = [
    { title: 'Labo', distance: '5 km' },
    { title: 'Clinic', distance: '3 km' },
    { title: 'Pharmacy', distance: '7 km' },
    { title: 'Labo', distance: '10 km' },
    { title: 'Hospital', distance: '2 km' },
    { title: 'Doctor Office', distance: '8 km' },
    { title: 'Labo', distance: '12 km' },
    { title: 'Unknown Location', distance: '' },
  ];

  const orders = new Array(8).fill('Order');

  return (
    <View style={styles.container}>
      <ScrollView>
        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.title}>{section.title}</Text>
            {section.distance && (
              <Text style={styles.distance}>{section.distance}</Text>
            )}
          </View>
        ))}
        {orders.map((order, index) => (
          <Text key={index} style={styles.order}>
            {order} #{index + 1}
          </Text>
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
  section: {
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  distance: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
  order: {
    fontSize: 16,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    textAlign: 'center',
  },
});
