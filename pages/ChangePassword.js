import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Header, TextInput, Gap } from '../components'
import { EyeHide, EyeHideActive, Key, KeyActive } from '../assets/Icon'
import { useForm } from '../utils'

const ChangePassword = ({ navigation }) => {
  const { errors, isValid, onChange, form } = useForm({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  }, {
    oldPassword: {
      required: true,
      same: "OldPass",
      message: "Password doesn't match to ReactChallange",
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: 'Password must be 8 or more characters and contain at least one number and 1 symbols and 1 uppercase',
    },
    confirmPassword: {
      confirm: 'password',
      message: "Password doesn't match",
    },
  })

  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [showOldPassword, setShowOldPassword] = React.useState(false)

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
          <TextInput
            label={"Enter Old Password"}
            secureTextEntry={!showOldPassword}
            placeholder="Enter Old Password"
            image={form.oldPassword ? EyeHideActive : EyeHide}
            value={form.oldPassword}
            onChangeText={(value) => onChange('oldPassword', value)}
            isError={errors.oldPassword}
            helperText={errors.oldPassword}
            onPress={() => setShowOldPassword(!showOldPassword)}
          />
          <Gap height={12} />
          <TextInput
            label={"Create Password"}
            secureTextEntry={!showPassword}
            placeholder="Your Password"
            helperText="Must be 8 or more characters and contain at least one number,1 symbols and one uppercase"
            value={form.password}
            image={form.password ? EyeHideActive : EyeHide}
            onChangeText={(value) => onChange('password', value)}
            isError={errors.password}
            onPress={() => setShowPassword(!showPassword)}
          />
          <Gap height={12} />
          <TextInput
            label={"Verify Password"}
            secureTextEntry={!showConfirmPassword}
            placeholder="Verify Your Password"
            image={form.confirmPassword ? EyeHideActive :EyeHide}
            value={form.confirmPassword}
            onChangeText={(value) => onChange('confirmPassword', value)}
            isError={errors.confirmPassword}
            helperText={errors.confirmPassword}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          <Gap height={24} />
          <View style={{ alignSelf: "flex-end" }}>
            <TouchableOpacity activeOpacity={0.7} onPress={isValid ? ()=> {
              navigation.navigate("ChangePasswordSucces")
            } : null}>
              <View style={styles.btnContainer(isValid ? "#4D0D6E" : "#E4E7EC")}>
                <Text style={styles.btnLabel(isValid ? "white" : "#E4E7EC")}>Change</Text>
                <Image source={isValid ? KeyActive : Key} style={styles.icon} />
              </View>
            </TouchableOpacity>
          </View>
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
  btnContainer: (color) => ({
    flexDirection: 'row',
    backgroundColor: color,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    height: 40,
    paddingHorizontal: 16,
  }),
  btnLabel: (color) => ({
    color: color,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  }),
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
  },
  icon:{
    width: 16,
    height: 16,
  }
})