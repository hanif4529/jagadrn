import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Gap, Header } from '../components'
import { PasswordChanged, Bg } from '../assets/Ilustration'

const ChangePasswordSucces = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title="CHANGE PASSWORD" onBack={() => {navigation.goBack()}} />
      <View style={styles.container}>
        <ImageBackground source={Bg} style={styles.imageContainer} imageStyle={styles.imageBg}>
          <Image source={PasswordChanged} style={styles.image} />
          <Gap height={16} />
          <Text style={styles.title}>Your Password Has Been Changed</Text>
          <Gap height={8} />
          <Text style={styles.subtitle}>
            Thank you, please make sure you are not sharing your private data with anyone</Text>
        </ImageBackground>

        <View style={styles.bottomInfo}>
          <View style={{ flexDirection: 'row', width: '100%', height: 20 }}>
            <View style={styles.line} />
            <Gap width={8} />
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.label}>Need Help ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('OnBoarding')}>
                <Text style={styles.btnLabel}> Contact Us</Text>
              </TouchableOpacity>
            </View>
            <Gap width={8} />
            <View style={styles.line} />
          </View>
          <Gap height={16} />
          <View style={{ width: '100%' }}>
            <Button height={48} text={"VISIT HOME"} color="white" textColor='black' showBorderRadius onPress={() => { navigation.navigate('OnBoarding') }} />
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default ChangePasswordSucces


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FBFDFF',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  imageContainer: {
    marginTop: 34,
    paddingHorizontal: 16,
    paddingVertical: 48,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  imageBg: {
    resizeMode: 'cover',
    borderRadius: 16,
    borderEndWidth: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#4D0D6E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757682',
    textAlign: 'center',
  },
  bottomInfo: {
    marginTop: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757682',
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#9DA3AE',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginBottom: 10
  },
  btnLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#EA715E',
  }
})