import { View, Text, SafeAreaView, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton.jsx';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import tailwindConfig from '../../tailwind.config.js';
const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  //const [isSubmiting, setIsSubmiting] = useState(false)
  //const submit =() =>{}
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className= "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logos}
            className="w-[80px] h-[80px]"
            resizeMode='contain'
            />
          <Text className="text-2xl text-white text-semibold mt-10 
          font-psemibold">Log in to Aura</Text>

          <FormField 
            title="Email or mobile number"
            value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-adress"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign in" 
            handlePress={() => router.push('/home')}
            containerStyles="mt-7"
            //isLoading={isSubmiting}

          />

          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an Account?
            </Text>
            <Link href ="/sign-up" className="text-lg text-secondary-100 font-psemibold">
              Sign Up
            </Link>
          </View>

          <View className="justify-center pt-2 flex-row gap-2">
          <Text className="text-lg text-secondary-100 font-psemibold">
              Forgot your Password?
            </Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn