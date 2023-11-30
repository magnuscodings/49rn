// Import the necessary modules
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet,Image} from 'react-native'
import ballRed from '../../assets/icons/ball_red.png';
import ballBlue from '../../assets/icons/ball_blue.png';
import ballGreen from '../../assets/icons/ball_green.png';

import { ballConverter } from '../../constant/AppConstants'; 

export const Request_Balls = ({ apiUrl, keyname }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
console.log(apiUrl);
        // console.log(JSON.stringify(result));
        if (keyname in result) {
          const dataArray = result[keyname].split(',');
          setData(dataArray); 

        } else {
          console.error(`Key '${keyname}' not found in API response.`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, keyname]);

  return (
    <>
    <View>
      <View style={StyleBall.countdownContainer}>
        <Text style={StyleBall.countdownTextBlack}> 第<Text style={StyleBall.countdownTextGreen}>{data[0]}</Text> 期</Text>
        <Text style={[StyleBall.countdownTextRed , StyleBall.mr25]}> 距下期开奖:12:34:01</Text>
        <Text style={StyleBall.countdownTextGreen}>查看历史记录</Text>
      </View>
    </View>
    <View style={StyleBall.ballContainer}>
      {data.map((item, index) => {
         const parsedItem = parseInt(item)-1;
         const isValidIndex = !isNaN(parsedItem) && parsedItem >= 0 && parsedItem < ballConverter.length;
         if (index > 0 && index <= 9  && isValidIndex) {

         const ballanimal=  ballConverter[parsedItem].animal;
         const ballelement=  ballConverter[parsedItem].element;
         const ballvalue=  ballConverter[parsedItem].value;
         if (ballvalue === "1") {
          imagesrc = ballRed;
        } else if (ballvalue ==="2") {
          imagesrc = ballBlue;
        } else if (ballvalue === "3") {
          imagesrc = ballGreen;
        }


         if(index == 7 ){
          return (

            <View>
              <BallText/>
            </View>
          );
         }else if(index == 9 ){
          const items = (data[7])

          const parsedItem = parseInt(items)-1;

          const ballanimal=  ballConverter[parsedItem].animal;
          const ballelement=  ballConverter[parsedItem].element;
          const ballvalue=  ballConverter[parsedItem].value;
         
          if (ballvalue === "1") {
            imagesrc = ballRed;
          } else if (ballvalue ==="2") {
            imagesrc = ballBlue;
          } else if (ballvalue === "3") {
            imagesrc = ballGreen;
          }
          return (

            <View>

              <BallWithText
              key={index-2}
              text={ballanimal+"/"+ballelement+">"}
              count={data[index-2]}
              imageSource={imagesrc}
            />
            

            </View>
          );
         }else{
          return (

           <View>
             <BallWithText
              key={index}
              text={ballanimal+"/"+ballelement}
              count={item}
              imageSource={imagesrc}
            />
           </View>

          );
         }
       
         

        } 
      })}
   
    </View>
    <View style={StyleBall.cameraContainer}>
      <Image source={require('../../assets/icons/ic_camera.webp')} style={[StyleBall.ic_camera]} />
      <Text style={[StyleBall.cameraTextRed]}> 第{data[8]}期 2023/{data[9]}/{data[10]} 星期 -  {data[12]}</Text>
      <Image source={require('../../assets/icons/ic_full.webp')} style={[StyleBall.ic_full, StyleBall.mr14 ]} />
    </View>
    </>
  );
};



export const BallWithText = ({ text, imageSource,count }) => {
  return (
      <View>
      <View style={StyleBall.ballGroup}>
        <Image source={imageSource} style={StyleBall.ballImage} />
        <Text style={StyleBall.centeredText}>{count}</Text>
      </View>
      <Text style={StyleBall.ballText}>{text}</Text>
      </View>
  );
};
export const BallText = ({ }) => {
  return (
      <View style={StyleBall.ballPlus}>
        <Image source={require('../../assets/icons/jiahao.png')} style={StyleBall.plusImage} />
      </View>
      
  );
};

const StyleBall = StyleSheet.create({
  ballGroup: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }, ballPlus: {
    position: 'relative',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },countdownContainer:{
    marginBottom:15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
  },cameraContainer:{
    marginTop:15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
  },
  cameraTextRed:{
    fontSize: 14, color: 'red',paddingTop:3,
  },
  ic_camera:{
    width:25,height:25
  },
  ic_full:{
    width:20,height:20
  },
  mr25:{
    marginRight:25,
    }, mr14:{
      marginRight:14,
      },
  countdownTextGreen:{
    fontWeight: '500',
    fontSize: 15, color: 'green'
  },
  countdownTextBlack:{
    fontWeight: '500',
    fontSize: 15, color: 'black'
  },
  countdownTextRed:{
    fontWeight: '500',
    fontSize: 15, color: 'red'
  },
  ballImage: {
    width:'100%',
    aspectRatio: 8 / 8, // Set your desired aspect ratio

    // Adjust the styles for the ball image as needed
  },plusImage: {
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
    width:20,
    height:20,
  },
  centeredText: {
    position: 'absolute',
    fontWeight: "500",
    paddingRight:3,
    paddingBottom:2,
    color: 'black', // Adjust the text color as needed
    fontSize: 24, // Adjust the font size as needed
  }, ballContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tab_ball:{
    height:120,
    backgroundColor:'white',
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
  },
  ball_group: {
    marginTop:150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ballText: {
    marginTop: 2,
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
});

export default Request_Balls;
