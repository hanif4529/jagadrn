import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../components'
import { EyeHide, EyeHideActive } from '../assets/Icon'
import { useForm } from '../utils'

const CreateNewPassword = ({ navigation }) => {
  const [form, setForm] = useForm({
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  const isFormValid = () => {
    if (form.password.length > 0 && form.confirmPassword.length > 0 && form.password === form.confirmPassword) {
      return true
    } else {
      return false
    }
  }

  return (
    <SafeAreaView style={styles.page}>
      <Header title={"CREATE NEW PASSWORD"} onBack={() => {
        navigation.goBack()
      }} />
      <View style={styles.form}>
        <TextInput label={"Create Password"}
          secureTextEntry={!showPassword}
          placeholder="Your Password"
          image={form.password ? EyeHideActive :EyeHide}
          helperText="Must be 6 or more characters and contain at least one number and"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          onPress={() => setShowPassword(!showPassword)}
        />
        <Gap height={24} />
        <TextInput label={"Verify Password"}
          secureTextEntry={!showConfirmPassword}
          placeholder="Verify Your Password"
          image={form.confirmPassword ? EyeHideActive :EyeHide}
          value={form.confirmPassword}
          onChangeText={(value) => setForm('confirmPassword', value)}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          isError={!isFormValid()}
          helperText={isFormValid() ? '' : 'Password does not match'}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button text="NEXT" onPress={() => {
          console.log(form)
        }} height={48} color={isFormValid() ? "#4D0D6E": "#E4E7EC"} textColor={ isFormValid() ? "white": "#ACB1BA"} />
      </View>
    </SafeAreaView>
  )
}

export default CreateNewPassword

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF'
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
  }
})