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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);


  return (

    <View >
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

      

      // renderIndividualHeader={({ images, index }) => {
      //   console.log(images);

      //   return (
      //     <View style={styles.imageContainer}>
      //       <Image
      //         source={data[index].bigPictureUrl }
      //       />
      //       <View style={styles.textContainer}>
      //         <Text style={styles.cardText}>{data[index].pictureName}</Text>
      //       </View>
      //     </View>
      //   );
      // }}
      
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
