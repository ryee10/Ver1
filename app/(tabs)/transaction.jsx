import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const inboxData = [
  { id: '1', title: 'Your Bills Payment Status', description: 'Your transaction to Meralco amount...', date: '1 minute ago' },
  { id: '2', title: 'Your Bills Payment Status', description: 'Your transaction to...', date: 'Oct 30, 2022' },
  { id: '3', title: 'Your Bills Payment Status', description: 'Your transaction to...', date: 'Oct 30, 2022' },
  { id: '4', title: 'Your Bank Transfer Status', description: 'You have sent...', date: 'Oct 30, 2022' },
  { id: '5', title: 'Your Bank Transfer Status', description: 'You have sent...', date: 'Oct 30, 2022' },
  { id: '6', title: 'Your Bills Payment Status', description: 'Your transaction to...', date: 'Oct 30, 2022' },
  { id: '7', title: 'Your Bills Payment Status', description: 'Your transaction to...', date: 'Oct 30, 2022' },
  { id: '8', title: 'Your Bills Payment Status', description: 'Your transaction to...', date: 'Oct 30, 2022' },
];

const InboxScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inboxData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingTop: 10,
  },
  header: {
    padding: 16,
    backgroundColor: '#161622',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFA001',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
 
  item: {
    backgroundColor: '#1e1e2d',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {
    fontSize: 14,
    color: '#696969',
  },
  date: {
    fontSize: 12,
    color: '#a9a9a9',
    marginTop: 4,
  },
});

export default InboxScreen;
