import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { OpenLink } from '../../components/Linking';

export const LinkRequest = ({ apiUrl, keyname }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        var arr = result.data.commendSite;
        console.log(212)
        setData(arr); // Update the state with the fetched data
        console.log('Updated data:', arr); // Log the updated datasda here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  const linksPerRow = 4; // Define the number of links per row

  // Function to chunk the data into rows based on linksPerRow
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const rows = chunkArray(data, linksPerRow);

  return (
    <View>
      {rows.map((row, rowIndex) => (
        <View style={styles3.row} key={rowIndex}>
          {row.map((item, index) => (
            <TouchableOpacity key={index} style={styles3.button}>
              <OpenLink
                url={item.url}
                buttonStyle={{ backgroundColor: '#f5f5f5' }}
                linkStyle={{ color: 'black' }}
                text={item.name}
              />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default LinkRequest;

const styles3 = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Add some space between rows
  },
  button: {
    flex: 1,
    margin: 2,
  },
});
