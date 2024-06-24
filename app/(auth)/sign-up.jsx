import { View, Text, SafeAreaView, ScrollView, Image} from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton.jsx';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  })

 // const [isSubmiting, setIsSubmiting] = useState(false)
//const submit =() =>{}
  
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className= "w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode='contain'
            />
          <Text className="text-2xl text-white text-semibold mt-10 
          font-psemibold">Sign up to Aora</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({...form, username: e})}
            otherStyles="mt-10"
           
          />

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
            title="Continue" 
            handlePress={() => router.push('/home')}
            containerStyles="mt-7"
            //isLoading={isSubmiting}

          />

          <View className="justify-center pt-5 flex-row gap-2 ">
            <Link href ="/sign-in" className="text-lg text-secondary font-psemibold">
              Log in your existing account
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp