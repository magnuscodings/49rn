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
          height: item.height,
          text: item.pictureName,
          dimensions: { width: item.width, height: item.height },
        }))}
        sorted
        spacing={4}
        columns={2}
      
        renderIndividualFooter={data => {
          console.log(data)
          return (
              <View style={styles.textContainer}>
                <Text style={styles.cardText}>{data.text}</Text>
              </View>
          );
        }}
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
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardText: {
    fontSize: 16, // Adjust the font size as needed
    color: 'black', // Adjust the text color if needed
    textAlign: 'center',
  },
});
export default HomeImages;
