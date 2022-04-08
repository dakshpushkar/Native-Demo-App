import React from 'react';
import {View, Text,Dimensions,StyleSheet,TouchableOpacity} from 'react-native';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';
const {height,width} =  Dimensions.get("window")
function Verification() {
  return (
    <View style={styles.upperText}>
      <Text>
        Enter the <Text style={{color:"#000000",fontWeight:'bold'}}>4 digit</Text> OTP which 
      </Text>
      <Text>
        you have received on your mobile no. 
      </Text>
      <TouchableOpacity><Text style={{color:"blue"}}>Edit</Text></TouchableOpacity>
    </View>
  );
}
const styles =  StyleSheet.create({
    upperText:{
        display:'flex',
        flexDirection:'column',
        marginTop:(58/844)*height,
        marginLeft:(24/390)*width,
        width:302,
        height:64,
        textAlign:'center',
        alignItems:'center',
        fontFamily:"Rubik",
        color:"#000000",
        fontStyle:'normal',
        fontSize:18,
        fontWeight:400,
        
    }
})
export default Verification;
