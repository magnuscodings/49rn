import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';

export const HomeImages = ({ apiUrl }) => {
  // const items = [
  //   { 
  //     uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  //     text: 'Description for Image 1',
  //     height: 200 
  //   },
  //   { 
  //     uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  //     text: 'Description for Image 2',
  //     height: 250 
  //   },
  //   // Add more items with different images, text, and heights
  // ];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result.data.listPicture.list);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);


  return (

    <View style={styles.container}>
    <MasonryList
      images={data.map((item) => ({ 
        uri: item.bigPictureUrl, height: item.height })
        )}
      sorted
      spacing={4}
      columns={2}
      
      renderIndividualHeader={({ item, index }) => {
        // console.log('Current Index:', index); // Log the current index
            
        return (
           
            <View style={styles.textContainer}>
            <Image
              source={data[index].bigPictureUrl}
              style={{ width: '100%', height: item && item.dimensions ? item.dimensions.height : 200}}
            />
              <Text style={styles.cardText}>{data[index].pictureName}</Text>
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
    backgroundColor: '#fff',
    position: 'relative', // Ensure proper positioning of the text container
  },
  textContainer: {
    color: 'black',
    position: 'absolute',
    bottom: -20,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  cardText: {
    fontWeight:'bold',
    fontSize: 16, // Adjust the font size as needed
    color: 'red', // Adjust the text color if needed
    textAlign: 'center',
  },
});
export default HomeImages;
