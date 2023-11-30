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
        setData(arr); // Update the state with the fetched data
        console.log(data); // Losssg the fetched data instead of data state (as it might be stale here)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  const linksPerRow = 2; // Define the number of links per row


  return (
    <>
      {data.map((item, index) => (
        <View key={index} style={styles3.row}>
          {item.links &&
            item.links.map((link, linkIndex) => (
              <TouchableOpacity key={linkIndex} style={styles3.button}>
                {/* Assuming OpenLink is a valid component */}
                <OpenLink
                  url={link.url}
                  buttonStyle={{ backgroundColor: '#f5f5f5' }}
                  linkStyle={{ color: 'black' }}
                  text={link.text}
                />
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </>
  );
};

export default LinkRequest;

const styles3 = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
  },
});
