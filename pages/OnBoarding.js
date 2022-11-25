import { SafeAreaView, StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { Logo } from '../assets/Icon'

const OnBoarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.hearderTitle}>Garuda</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button title='CREATE NEW WALLET' onPress={() => navigation.navigate('CreateNewPassword')} />
                <Button title="ALREADY HAVE A WALLET" onPress={() => navigation.navigate('SecurityAccess')} />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FBFDFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 52,
        backgroundColor: '#FBFDFF',
        borderBottomWidth: 2,
        borderColor: '#F2F4F4'
    },
    logo: {
        width: 48,
        height: 48,
    },
    hearderTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
    }
})