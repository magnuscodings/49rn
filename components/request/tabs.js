// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

export const Tabs = ({ apiUrl, keyname }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        
        // console.log(result); // Log the parsed JSON data
        // console.log(keyname); // Log the provided keyname

        // Check if the requsired keys exist bsefore accessing them
        if (result && result.data && result.data.list && result.data.list[keyname]) {
          const formattedData = formatToMonthDate(result.data.list[keyname].lotteryTime,keyname);
          setData(formattedData);
        } else {
          console.error('Invalid data structure or keyname not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  // Assuming formatToMonthDate returns a string, render it within a Text component
  return <Text>{data}</Text>;

};



function formatToMonthDate(dateString,keyname) {
  const regex = /(\d{4})年(\d{1,2})月(\d{1,2})日 (\d{1,2})点(\d{1,2})分/;
  const match = dateString.match(regex);

  if (match !== null) {
    let lotteryName = '';
    if(keyname == 0){
      lotteryName = '澳彩';
    }else if(keyname == 1){
      lotteryName = '港彩';
    }else if(keyname == 2){
      lotteryName = '台彩';
    }else if(keyname == 3){
      lotteryName = '新彩';
    }




      const month = parseInt(match[2], 10);
      const day = parseInt(match[3], 10);

      const formattedDate = `${lotteryName}\n${month}月${day}日开奖`;
      return formattedDate; // Returns the formatted date string
  } else {
      return 'Date string does not match the expected format.';
  }
}


export default Tabs;