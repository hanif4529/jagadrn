import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({text, color = '#4D0D6E', textColor = 'white', onPress, height = 38, showBorderRadius}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color, height, showBorderRadius)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color, height, showBorderRadius) => ({
    backgroundColor: color,
    justifyContent: 'center',
    borderRadius: 8,
    boderColor: showBorderRadius ?? '#F2F4F4',
    borderWidth: showBorderRadius ? 1 : 0,
    height: height,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});