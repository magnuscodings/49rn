import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput,ScrollView,FlatList } from 'react-native';
import { Feather,AntDesign } from '@expo/vector-icons';
import CardWithText from '../../components/CardWithText'
export const FoundIt = () => {
  const [activeButton, setActiveButton] = useState('All'); // Initially set to 'Button 1'
  const [searchText, setSearchText] = useState('');

  const LiveImage = [
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171700-020230813171700-water.jpg',
      description: 'Beautiful landscape view',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:20,
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171631-020230813171630-water.jpg',
      description: 'Serene lake reflection',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:10,
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171631-020230813171630-water.jpg',
      description: 'Majestic mountains',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:40
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/2511619/20230813171605-020230813171604-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:21
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/1798625/20230813105504-68-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2021/12/06/1798625/1638789996702-20211206192636-74.jpg',
      like:32
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/2511619/20230812191015-020230812191014-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:50
    },
  ];

  const LiveImage2 = [
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/13/1798625/20230813105504-68-water.jpg',
      description: 'Beautiful landscape view',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2021/12/06/1798625/1638789996702-20211206192636-74.jpg',
      like:999
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/2511619/20230812191031-020230812191030-water.jpg',
      description: 'Serene lake reflection',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:240
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/2511619/20230812191015-020230812191014-water.jpg',
      description: 'Majestic mountains',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/04/18/2511619/20230418141448-001.png',
      like:205
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/1798340/20230812101845-100-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2021/12/06/1798340/1638787294642-20211206184134-DM_20211206140347_192.jpg',
      like:244
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/1798331/20230812101746-97-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2021/12/06/1798331/1638787235737-20211206184035-DM_20211206140347_188.jpg',
      like:105
    },
    {
      image: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2023/08/12/1798338/20230812101824-99-water.jpg',
      description: 'Calm river',
      avatar: 'https://jmz.jixingkaisuo.com:4949/unite49files/user/2021/12/06/1798338/1638787277038-20211206184117-DM_20211206140347_190.jpg',
      like:303
    },
  ];


  const handleButtonPress = (buttonText) => {
    setActiveButton(buttonText);
  };

  const handleSearch = () => {
    // Perform search logic using the searchText
    console.log('Search for:', searchText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, activeButton === 'All' && styles.activeButton]}
          onPress={() => handleButtonPress('All')}
        >
          <Text style={[styles.buttonText, activeButton === 'All' && styles.activeButtonText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton === 'Recommend' && styles.activeButton]}
          onPress={() => handleButtonPress('Recommend')}
        >
          <Text style={[styles.buttonText, activeButton === 'Recommend' && styles.activeButtonText]}>Recommend</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
        >
          <Feather name="search" size={24} color="green" />
        </TouchableOpacity>
      </View>
      {activeButton === 'All' ? (
      <FlatList
        data={LiveImage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardWithText
            imageSource={item.image}
            description={item.description}
            avatarSource={item.avatar}
            numColumns={2}
            likeCount={item.like}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ ...styles.cardList, paddingBottom: 150 }}
      />
      ) : (

        <FlatList
        data={LiveImage2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardWithText
            imageSource={item.image}
            description={item.description}
            avatarSource={item.avatar}
            numColumns={2}
            likeCount={item.like}
          />
        )}
        numColumns={2}
        contentContainerStyle={{ ...styles.cardList, paddingBottom: 150 }}
      />

      )}
      
        {/* FloatingActionButton */}
        <TouchableOpacity style={styles.fab}>
        <AntDesign name="plus" size={24} color="green" />
        <Text style={styles.fabText}>MENU</Text>
      </TouchableOpacity>



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: '50%', // Position vertically centered
    right: 16,
    transform: [{ translateY: -12 }], // Adjust based on the FAB's height
    backgroundColor: 'white',
    borderRadius: 0, // Make it a circle
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 2,
    },
  },
  fabText: {
    color: 'black',
    marginLeft: 8,
  },
  cardList:{
    marginTop:10,
    padding:20,
    backgroundColor:'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    alignItems: 'center', // Center items horizontally
  },
  container: {

    backgroundColor: '#F6F6F6',

  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom:-10,
    marginTop:10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderColor: 'gray',
  },
  activeButton: {
    borderColor: 'green',
  },
  buttonText: {
    color: 'gray',
    fontWeight:'bold'
  },
  activeButtonText: {
    color: 'green',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchButton: {
    padding: 10,
  },
});

export default FoundIt;
