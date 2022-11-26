import React from 'react';
import { StyleSheet, Text, View, TextInput as TextInputRN, Image, TouchableOpacity } from 'react-native';
import Gap from './Gap';

const TextInput = ({ label, placeholder, image, helperText, onPress, isError, ...restProps }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Gap height={6} />
            <View style={styles.inputContainer}>
                <TextInputRN
                    style={styles.input(isError)}
                    placeholder={placeholder}
                    {...restProps}
                />
                {image && (
                    <TouchableOpacity style={styles.image} onPress={onPress}>
                        <Image source={image} />
                    </TouchableOpacity>
                )}
            </View>
            <Gap height={6} />
            {helperText && (
                <Text style={styles.helperText(isError)}>
                    {helperText}
                </Text>)
            }

        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    label: (isError) => ({
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    }),
    input: (isError) => ({
        borderWidth: 1,
        borderColor:  isError ? 'red' :'#8D92A3',
        borderRadius: 8,
        padding: 10,
        height: 48,
        backgroundColor: isError ? '#FCF4D0simpl': 'white',
    }),
    helperText: (isError) => ({
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: isError? "#B9524F" :'#8D92A3'
    }),
    inputContainer: {
        justifyContent: 'center',
    },
    image: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 10,
        color: 'red'
    }
});