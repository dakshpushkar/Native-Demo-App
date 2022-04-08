import React, {useState} from 'react';
import {View,Text,TextInput,StyleSheet,Dimensions,TouchableOpacity,Image

} from "react-native"

const {height,width} = Dimensions.get("window");
function Login() {
 const[phoneNumber , setPhoneNumber] = useState('') ;
 console.warn(phoneNumber) 
  return (
    <View>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.image}>
        <Image
          style={{width: 303, height: 194}}
          source={require('DemoProject/Components/assets/logoImage.jpg')}></Image>
      </View>

      <View style={styles.loginDetail}>
        <Text style={styles.loginText}>Log in</Text>
        <Text style={styles.phoneText}>Phone no.</Text>
        <TextInput
          onChangeText={e => setPhoneNumber(e)}
          style={styles.phoneNumInput}
          placeholder="Enter phone no."
          keyboardType="number-pad"></TextInput>
      </View>

      <View>
        <TouchableOpacity
          style={
            phoneNumber.length === 10
              ? styles.enableLoginButton
              : styles.loginButton
          }
          disabled={phoneNumber.length === 10 ? false : true}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appleIDloginButton}>
          <Image
            style={{
              height: 35,
              width: 35,
              marginLeft: (16 / 390) * width,
              marginTop: (8 / 844) * height,
            }}
            source={require('DemoProject/Components/assets/apple-logo.png')}
          />
          <Text style={styles.appleloginButtonText}>Log in with Apple ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleloginButton}>
          <Image
            style={{
              height: 30,
              width: 30,
              marginLeft: (16 / 390) * width,
              marginTop: (9 / 844) * height,
            }}
            source={require('DemoProject/Components/assets/icons-google.png')}
          />
          <Text style={styles.googleloginButtonText}>Log in with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signIn}>
        <Text>New on Kuants?</Text>
        <TouchableOpacity>
          <Text style={{color: 'blue'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    marginTop: (61 / 844) * height,
    marginLeft: (151 / 390) * width,
    height: (44 / 844) * height,
    width: (88 / 844) * width,
  },
  image: {
    marginTop: (45 / 844) * height,
    marginLeft: (41 / 390) * width,
  },

  loginDetail: {
    marginTop: (77 / 844) * height,
    marginLeft: (26 / 390) * width,
  },
  phoneText: {
    marginTop: (35 / 844) * height,
  },
  phoneNumInput: {
    //  marginTop:(16/844)*height,
    borderBottomWidth: 1,
    paddingBottom: -20,
  },
  loginButton: {
    height: 48,
    width: 342,
    marginTop: (36 / 844) * height,
    marginLeft: (24 / 390) * width,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#D6D6D6',
  },
  enableLoginButton: {
    height: 48,
    width: 342,
    marginTop: (36 / 844) * height,
    marginLeft: (24 / 390) * width,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#ff6a00',
  },
  appleIDloginButton: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    width: 342,
    marginTop: (16 / 844) * height,
    marginLeft: (24 / 390) * width,
    borderWidth: 1,
    borderRadius: 8,
  },
  appleloginButtonText: {
    marginLeft: (52 / 390) * width,
    marginTop: (14 / 844) * height,
  },

  googleloginButton: {
    display: 'flex',
    flexDirection: 'row',
    height: 48,
    width: 342,
    marginTop: (16 / 844) * height,
    marginLeft: (24 / 390) * width,
    borderWidth: 1,
    borderRadius: 8,
  },
  googleloginButtonText: {
    marginLeft: (52 / 390) * width,
    marginTop: (14 / 844) * height,
  },
  signIn: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: (116 / 390) * width,
    marginTop: (24 / 844) * height,
  },
});

export default Login;
