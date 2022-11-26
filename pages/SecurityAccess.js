import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gap, Header, TextIconButton } from '../components'
import { Edit } from '../assets/Icon'

const SecurityAccess = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={"SECURITY ACCESS"} onBack={() => {navigation.goBack()}} />
      <View style={styles.container}>
        <Text style={styles.labelTitle}>Edit Your Information</Text>
        <Gap height={12} />
        <TextIconButton onPress={() => {}} text={"Change My Pin"} image={Edit} />
        <Gap height={8} />
        <TextIconButton onPress={() => {
          navigation.navigate('ChangePassword')
        }} text={"Change My Password"} image={Edit} />

        <View style={styles.information}>
          <Text style={styles.informationText}>Please be sure to keep your information to yourself only</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SecurityAccess

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  labelTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A7ACB6',
    marginBottom: 8,
  },
  information:{
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#F8E5E5',
    width: width - 32,
    borderRadius: 8,
  },
  informationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#706D6D',
    textAlign: 'center',
    lineHeight: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
})