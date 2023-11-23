import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

export const Scrowl = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    // Calculate the position where your element becomes visible
    const threshold = 200; // Adjust this value based on your requirement

    // Check if the element becomes visible within the threshold
    if (y > threshold && !isVisible) {
      setIsVisible(true);
      console.log('Element is now visible');
      // Perform actions when the element is visible
    }else{
        setIsVisible(false);
        console.log('Element is no longer visible');
  
    }
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      {/* Other content */}
      <View style={{ marginTop: 400 }}>
        {isVisible && <Text>Your element is visible!</Text>}
      </View>
      {/* More content */}
    </ScrollView>
  );
};

export default Scrowl;
