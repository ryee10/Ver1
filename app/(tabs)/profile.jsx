import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { images } from '../../constants'

const ProfileScreen = () => {
  return (
    
    <View style={styles.container}>
      <Image source={images.avatar} style={styles.avatar} />
      <Text style={styles.name}>Maria Johnson</Text>
    </View>
      /* <Text style={styles.bio}>+63 9669 174 620</Text> */
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:28,
    padding: 8,
    flex: 1,
    backgroundColor: '#161622',
    flexDirection: 'row',
  
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10
  },
  bio: {
    marginLeft: 10 ,
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
    
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default ProfileScreen;

