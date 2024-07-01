import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, ScrollView, Text, View, StyleSheet } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { images } from '../constants';
import CustomButton from '../components/CustomButton.jsx';

export default function App() {
  return (
    <SafeAreaView>
      <LinearGradient
      style={style.container}
      colors={["#4C509F, #4E4799, #B61E61, #F7053F"]}>
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className ="w-full justify-center items-center min-h-[85vh] px4">
          <Image
            source={images.logo}
            className="w-[210px] h-[144px]"
            resizeMode="contain"
            />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Cashless and Classy with {' '}
            <Text className= "text-secondary-200">Aura</Text>
            </Text>

          </View>
            <Text className="text-sm font-pregular text-gray-100 mt-2 text-center">Where 
              Cashless meets innovation: embark on a journey of limitless
              Wallet with Aora
            </Text>
          
            <CustomButton
              title="Continue" 
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
      </LinearGradient>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center'

  }
})

