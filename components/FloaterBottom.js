import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react';
import Gallery,{setTab1} from '../screens/Tabs/Gallery';
const FloaterBottom = () => {
 
  const [buttonText, setButtonText] = useState('Press me');

  const handlePress = () => {
    // Change the text when ChildComponent is pressed
    setTab1('New Text');
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={handlePress}
         style={{flexDirection:'row',backgroundColor:'#23C475',borderRadius:10,width:70,height:40,justifyContent:'center',alignItems:'center'}}
         >
          
           <Image source={require('../assets/icons/set1.png')} style={styles.icon} />
           <Text style={{textAlign:'center'}}>澳彩</Text>
         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => alert('Pressed!')}
         style={{flexDirection:'row',backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#c10707',width:70,height:40,justifyContent:'center',alignItems:'center',marginLeft:5}}>
           <Image source={require('../assets/icons/set2.png')} style={styles.icon} />
           <Text style={{textAlign:'center'}}>港彩</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#0755c1',width:70,height:40,justifyContent:'center',alignItems:'center',marginLeft:5}}>
           <Image source={require('../assets/icons/set3.png')} style={styles.icon} />
           <Text style={{textAlign:'center'}}>台彩</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#b907c1',width:70,height:40,justifyContent:'center',alignItems:'center',marginLeft:5}}>
           <Image source={require('../assets/icons/set4.png')} style={styles.icon} />
           <Text style={{textAlign:'center'}}>澳彩</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',borderRadius:10,borderWidth:1,borderColor:'#f52c3e',width:70,height:40,justifyContent:'center',alignItems:'center',marginLeft:5}}>
           <Image source={require('../assets/icons/set5.png')} style={styles.icon5} />
           <Text style={{textAlign:'center'}}>3D</Text>
         </TouchableOpacity>

    </View>
  )
}

export default FloaterBottom

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
    },
    icon:{
        height:29,
        width:29,
    },
    icon5:{
        height:18,
        width:25,
    }
})