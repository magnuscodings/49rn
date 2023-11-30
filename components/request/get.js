// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

export const getRequest = ({ apiUrl, keyname }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        
        // console.log(result); // Log the parsed JSON data
        // console.log(keyname); // Log the provided keyname

       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  // Assuming formatToMonthDate returns a string, render it within a Text component
  return <Text>{data}</Text>;

};


export default getRequest;