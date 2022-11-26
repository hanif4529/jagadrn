import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Logo } from '../assets/Icon'
import { IlFuture, IlTriple, IlSafe } from '../assets/Ilustration'
import SwiperFlatList from 'react-native-swiper-flatlist'
import {Button, Gap} from '../components'

const SWIPER_DATA = [
    {
        title: 'Invest For Future',
        description: 'A sed ea maiores corporis est facere nemo officiis. Ut ea porro. Rerum quae animi consequatur blanditiis.',
        image: IlFuture
    },
    {
        title: 'Triple Your Funds',
        description: 'Dicta minus animi sunt neque iusto quis et eveniet iusto. Praesentium quos quia dolore qui rerum ut. Neque ipsa hic dolores.',
        image: IlTriple
    },
    {
        title: 'Save & Secure',
        description: 'Dolor culpa doloribus. Quia nihil sed commodi. Ab non in itaque sit asperiores voluptatibus aut. Fugit dolor natus.',
        image: IlSafe
    }
]

const OnBoarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.hearderTitle}>Garuda</Text>
            </View>
            <View style={styles.body}>
                <SwiperFlatList data={SWIPER_DATA} paginationStyleItem={styles.pagination} paginationActiveColor={"#020826"} showPagination renderItem={({ item }) => (
                    <View style={styles.child}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Gap height={10} />
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                )} />
            </View>
            <View style={{ flex: 1, margin: 24 }}>
                <Button text='CREATE NEW WALLET' onPress={() => navigation.navigate('CreateNewPassword')} />
                <Gap height={8} />
                <Button text="ALREADY HAVE A WALLET" color='white' textColor='black' onPress={() => navigation.navigate('SecurityAccess')} />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding
const { width, height } = Dimensions.get('window')
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
        width: 30,
        height: 30,
    },
    hearderTitle: {
        fontSize: 22,
        fontFamily: 'Poppins-Regular',
    },
    child: {
        width, height: height * 0.65,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 30
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
    },
    description: {
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 18,
        fontFamily: 'Poppins-Light'
    },
    pagination: {
        height: 8,
        width: 8,
    },
    image:{
        width: 240,
        height: 240,
        resizeMode: 'contain'
    }
})