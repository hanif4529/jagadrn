import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Back } from '../assets/Icon'

const Header = ({ navigation, title, onBack, children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    {onBack && (
                        <TouchableOpacity onPress={onBack}>
                            <View style={styles.circularBtn}>
                                <Image source={Back} style={styles.icon} />
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.headerCenter}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.headerRight} />
            </View>
            {children}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#F2F4F4'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLeft: {
        flex: 1,
        alignItems: 'flex-start'
    },
    headerCenter: {
        flex: 3,
        alignItems: 'center'
    },
    headerRight: {
        flex: 1,
        alignItems: 'flex-end'
    },
    icon: {
        width: 10,
        height: 10,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    circularBtn: {
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F2F4F4'
    }
})