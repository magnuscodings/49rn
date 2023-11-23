import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

export const HomeImages = ({ apiUrl }) => {
  const items = [
    { 
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      text: 'Description for Image 1',
      height: 200 
    },
    { 
      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      text: 'Description for Image 2',
      height: 250 
    },
    // Add more items with different images, text, and heights
  ];

  return (
    <View style={{ flex: 1 }}>
      <MasonryList
        images={items.map((item) => ({ uri: item.uri, height: item.height }))}
        spacing={1}
        renderIndividualHeader={(item, index) => (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: item.uri }}
              style={{ height: item.height, borderRadius: 8 }}
            />
            <Text>{items[index].text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // Add other styles relevant to the container if needed
  },
  imageContainer: {
    marginBottom: 8,
    backgroundColor: '#fff',
    position: 'relative', // Ensure proper positioning of the text container
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardText: {
    fontSize: 16, // Adjust the font size as needed
    color: '#ffffff', // Adjust the text color if needed
    textAlign: 'center',
  },
});
export default HomeImages;
