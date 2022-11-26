import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TextIconButton = ({ text, onPress, color = "white", textColor = "black", image }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{text}</Text>
                <View style={styles.circularBtn}>
                    <Image source={image} style={styles.icon} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TextIconButton

const styles = StyleSheet.create({
    container: (color) => ({
        flexDirection: 'row',
        backgroundColor: color,
        borderRadius: 16,
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: "#F2F4F4",
        justifyContent: "space-between"
    }),
    text: (color) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: color,
        textAlign: 'center',
    }),
    circularBtn: {
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F2F4F4'
    },
    icon: {
        width: 12,
        height: 12,
    }
})