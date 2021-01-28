import 'react-native-gesture-handler';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';
import COLORS from '../consts/color';
import STYLES from '../styles/registerScreenStyles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import App from '../../App';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';



const LoginScreen = ({ navigation }) => {

  let emlOrUn;
  let password;
  function login(name, email, password) {
    //Firebase login
  }

  return (

    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground
        style={STYLES.imgBackground}
        resizeMode='cover'
        source={require('../../assets/Images/BackGround.jpg')}>
      </ImageBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={STYLES.scrollView}>
        <View
          style={STYLES.scrollInnerView}>
          <Image
            style={STYLES.logo}
            source={require('../../assets/Icons/Logo.png')}>
          </Image>
        </View>
        <View
          style={STYLES.signupView}>
          <Text
            style={STYLES.signupText}>
            Sign In
          </Text>
        </View>
        <View
          style={STYLES.formContainer}>
          <View
            style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.appPrimary}
              size={20}
              style={STYLES.inputIcon} />
            <TextInput
              placeholder="User Name Or Email"
              placeholderTextColor={COLORS.appPrimary}
              onChange={(text) => {
                emlOrUn = text;
              }
              }
              style={STYLES.input} />
          </View>
          <View
            style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.appPrimary}
              size={20}
              style={STYLES.inputIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.appPrimary}
              style={STYLES.input}
              onChange={(text) => {
                password = text;
              }
              }
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={STYLES.btnPrimary}
            onPress={() => {
              login(emlOrUn, password);
            }}>
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              SignIn
              </Text>
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: 'bold', color: COLORS.white }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <TouchableOpacity style={STYLES.btnSecondary}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: COLORS.appPrimary }}>
                  Register with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../assets/Icons/facebook.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: 10 }}></View>
            <View>
              <TouchableOpacity style={STYLES.btnSecondary}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, color: COLORS.appPrimary }}>
                  Register with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../assets/Icons/google.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={STYLES.signInNote}>
          <Text
            style={{ color: COLORS.appPrimary, fontWeight: 'bold' }}>
            Donot have an account ?
          </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Register');
          }
          }>
            <Text
              style={{ color: COLORS.white, fontWeight: 'bold' }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;