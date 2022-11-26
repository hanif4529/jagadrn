import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap, Button } from '../components'
import { EyeHide } from '../assets/Icon'

const ChangePassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={"CHANGE PASSWORD"} onBack={() => {
        navigation.goBack()
      }} />
      <View style={styles.container}>
        <View style={styles.informationContainer}>
          <Text style={styles.title}>
            Enter Password
          </Text>
          <Gap height={6} />
          <Text style={styles.subtitle}>
            Fill your new password on the field below
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput label={"Enter Old Password"} secureTextEntry placeholder="Enter Old Password" image={EyeHide} />
          <Gap height={12} />
          <TextInput label={"Create Password"} secureTextEntry placeholder="Your Password" image={EyeHide} helperText="Must be 6 or more characters and contain at least one number and 1 symbols" />
          <Gap height={12} />
          <TextInput label={"Verify Password"} secureTextEntry placeholder="Verify Your Password" image={EyeHide} />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default ChangePassword

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    backgroundColor: '#FBFDFF',
    alignContent: 'center',
  },
  form: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#E8EAEE',
    borderRadius: 8,
    marginTop: 24,
    marginHorizontal: 16,
  },
  btnContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  informationContainer: {
    paddingHorizontal: 52,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#010624',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#383939',
    textAlign: 'center'
  }
})