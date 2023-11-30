import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet } from 'react-native';

export const OpenLink = ({ url, linkStyle, buttonStyle, text }) => {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, linkStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 0,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default OpenLink;
