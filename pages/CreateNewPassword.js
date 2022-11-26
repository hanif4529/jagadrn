import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../components'
import { EyeHide, EyeHideActive } from '../assets/Icon'
import { useForm } from '../utils'

const CreateNewPassword = ({ navigation }) => {
  const { form, onChange, errors, isValid } = useForm({
    password: "",
    confirmPassword: "",
  }, {
    password: {
      required: true,
      minLength: 6,
      maxLength: 12,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: 'Password must be 8 or more characters and contain at least one number and 1 symbols and 1 uppercase',
    },
    confirmPassword: {
      required: true,
      confirm: 'password',
      message: "Password doesn't match",
    },
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  return (
    <SafeAreaView style={styles.page}>
      <Header title={"CREATE NEW PASSWORD"} onBack={() => {
        navigation.goBack()
      }} >
        <View style={styles.stepContainer}>
          <View style={[styles.step, styles.stepActive]} />
          <View style={[styles.step, styles.stepInactive]} />
          <View style={[styles.step, styles.stepInactive]} />
        </View>
      </Header>
      <View style={styles.form}>
        <TextInput label={"Create Password"}
          secureTextEntry={!showPassword}
          placeholder="Your Password"
          image={form.password ? EyeHideActive : EyeHide}
          helperText={errors.password ?? "Must be 6 or more characters and contain at least one number and 1 symbols"}
          value={form.password}
          onChangeText={(value) => onChange('password', value)}
          isError={errors.password}
          onPress={() => setShowPassword(!showPassword)}
        />
        <Gap height={24} />
        <TextInput label={"Verify Password"}
          secureTextEntry={!showConfirmPassword}
          placeholder="Verify Your Password"
          image={form.confirmPassword ? EyeHideActive : EyeHide}
          value={form.confirmPassword}
          onChangeText={(value) => onChange('confirmPassword', value)}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          isError={errors.confirmPassword}
          helperText={errors.confirmPassword}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button text="NEXT" onPress={() => {
          navigation.navigate("SecurityAccess")
        }} height={48} color={isValid ? "#4D0D6E" : "#E4E7EC"} textColor={isValid ? "white" : "#ACB1BA"} />
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
  },
  stepContainer: {
    height:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:8,
  },
  step: {
    height: 10,
    width: 100,
    borderRadius: 5,
  },
  stepActive:{
    backgroundColor: '#AD2AF0',
  },
  stepInactive:{
    backgroundColor: '#F2DEFC',
  }
})