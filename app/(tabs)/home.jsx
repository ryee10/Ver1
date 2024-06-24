import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { images } from '../../constants'; 

const cardDetails = [
  {
    id: 1,
    cardNumber: '5355 0348 1256 1234',
    expiry: '12/24',
    balance: '$2345.67',
    cardImage: require('../../assets/images/visa.png'),
    
  },
  {
    id: 2,
    cardNumber: ' **** 5678',
    expiry: '12/28',
    balance: '$6969.96',
    cardImage: require('../../assets/images/mastercard.png'), 
    
  },
  {
    id: 3,
    cardNumber: '**** 9123',
    expiry:'03/10',
    balance:'$00.55',
    cardImage: require('../../assets/images/paypal.png'),
   
  }
];

const recentTransactions = [
  { id: '1', description: 'Amazon Store', amount: '-$45.00', date: '2024-06-15', image: require('../../assets/images/amazon.png') },
  { id: '2', description: 'Apple Inc.', amount: '-$120.50', date: '2024-06-14', image: require('../../assets/images/apple.png') },
  { id: '3', description: 'Netflix', amount: '-$36.00', date: '2024-06-13', image: require('../../assets/images/netflix.png') },
  { id: '4', description: 'Spotify', amount: '-$5.75', date: '2024-06-12', image: require('../../assets/images/spotify.png') },
  { id: '5', description: 'Youtube', amount: '-$10.75', date: '2024-06-12', image: require('../../assets/images/youtube.png') },
  { id: '6', description: 'Youtube Music', amount: '-$4.75', date: '2024-06-12', image: require('../../assets/images/youtubemusic.png') }
];

const CardItem = ({ cardNumber, expiry, balance, cardImage }) => (
  <View style={styles.cardContainer}>
    <Text style={styles.debitText}>Debit.</Text>
    <View style={styles.cardInfo}>
      <Image source={require('../../assets/images/chip.png')} style={styles.chipImage} />
      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.validThruText}>VALID THRU: {expiry}</Text>
        <Image source={cardImage} style={styles.cardImage} />
      </View>
    </View>
  </View>
);

const TransactionItem = ({ description, amount, date, image }) => (
  <View style={styles.transactionItem}>
    <Image source={image} style={styles.transactionImage} />
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionDescription}>{description}</Text>
      <Text style={styles.transactionDate}>{date}</Text>
    </View>
    <Text style={styles.transactionAmount}>{amount}</Text>
  </View>
);

const Home = () => {
  const renderHeader = () => (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={images.avatar}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.username}>
            @maria
          </Text>
        </View>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cardDetails}
        renderItem={({ item }) => (
          <CardItem
            key={item.id}
            cardNumber={item.cardNumber}
            expiry={item.expiry}
            balance={item.balance}
            cardImage={item.cardImage} 
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.cardList}
      />
      <Text style={styles.recentTransactionsTitle}>Recent Transactions</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={recentTransactions}
        renderItem={({ item }) => (
          <TransactionItem
            description={item.description}
            amount={item.amount}
            date={item.date}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.transactionList}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#161622', 
  },
  headerContainer: {
    marginTop: 28, 
    padding: 8, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    borderWidth: 2,
    borderColor: '#CDCDE0',
    borderRadius: 22.5, 
    overflow: 'hidden',
  },
  avatar: {
    width: 45,
    height: 45,
  },
  username: {
    marginLeft: 10,
    fontSize: 24, 
    fontWeight: '600', 
    color: 'white',
  },
  cardContainer: {
    width: 350,
    height: 200, 
    backgroundColor: '#8E6F2E',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    margin: 10
  },
  debitText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
  },
  chipImage: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  cardImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 24,
    color: 'white',
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
    validThruText: {
    color: 'white',
    fontSize: 10,
    marginRight: 5,
  },
  expiry: {
    color: 'white',
    fontSize: 16,
  },
  balance: {
    fontSize: 18,
    color: 'white',
    marginLeft: 45,
  },
  recentTransactionsTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  transactionList: {
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e2d',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionDetails: {
    flex: 1,
    marginRight: 10,
  },
  transactionDescription: {
    fontSize: 16,
    color: 'white',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    color: 'white',
  },
});

export default Home;
