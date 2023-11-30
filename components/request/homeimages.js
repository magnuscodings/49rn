import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import MasonryList from 'react-native-masonry-list';

export const HomeImages = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getData(pageCurrent);
  }, [pageCurrent]);

  const getData = async (page) => {
    try {
      const apiURL = `https://h5.49217009.com:8443/unite49/h5/index/listPicture?lotteryType=2&pageNum=${page}`;
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const resJson = await response.json();
      setData(prevData => (page === 1 ? resJson.data.list : [...prevData, ...resJson.data.list]));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  const renderFooter = () => {
    return isLoading ? (data => {
      return (
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>{data.text}</Text>
          </View>
      );
    }
      
    ) : null;
  };


  const handleLoadMore = () => {
    setPageCurrent(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  const renderItem = React.memo(({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.bigPictureUrl }} />
        <Text style={styles.cardText}>{item.pictureName}</Text>
        {/* Additional text or components */}
      </View>
    );
  });
  

  

  return (
    <MasonryList
      images={data.map(item => ({
        uri: item.bigPictureUrl,
        height: item.height, // Set a default height if not available
        text: item.pictureName,
        dimensions: { width: item.width, height: item.height },

      }))}
      spacing={4}
      columns={2}
      renderIndividualFooter={data => {
        return (
            <View style={styles.textContainer}>
              <Text style={styles.cardText}>{data.text}</Text>
            </View>
        );
      }}
      // renderIndividualFooter={renderFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      renderCustomItem={renderItem}
    />
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  },loader: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },image: {
    width: '100%',
    height: '100%', // Use 100% for dynamic height
  },
});
export default HomeImages;
