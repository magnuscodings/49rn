import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

export const HomeImages = ({ apiUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.data.listPicture.list);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <View style={styles.container}>
      <MasonryList
        images={data.map(item => ({
          uri: item.bigPictureUrl,
          dimensions: { width: item.width, height: item.height },
          text: item.text // Assuming 'pictureName' holds the text data
        }))}
        sorted
        spacing={4}
        columns={2}
        
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.uri }}
              style={{ width: '100%', height: item.dimensions.height }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardText}>123123123</Text> {/* Display item text */}
            </View>
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
