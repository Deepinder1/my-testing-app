import 'react-native-gesture-handler';
import REGEX from '../consts/regularExp';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  View
} from 'react-native';

import COLORS from '../consts/color';
import STYLES from '../styles/registerScreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import App from '../../App';



const RegisterScreen = ({ navigation }) => {

  let userType;
  let email;
  let password;
  let name;
  const [txtNameMsg, checkNm] = useState('');
  const [txtEmailMsg, checkEm] = useState('');
  const [passErrorMsg, checkPa] = useState('');
  function checkName(name) {
    let result = REGEX.name.test(name);
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  function checkEmail(email) {
    let result = REGEX.email.test(email);
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  function checkPassword(password) {
    let result = !(password === null || password === '');
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  function register(name, email, password, userType) {
    //Firebase register
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
            Sign Up
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
              placeholder="User Name"
              placeholderTextColor={COLORS.appPrimary}
              style={STYLES.input}
              onChangeText={text => {
                name = text;
                checkNm(checkName(name) ? '' : 'User Name can only have alphanumerics and \'.\' or \'_\' !');
              }
              } />
          </View>
          <View>
            <Text style={{ color: 'red' }}>
              {txtNameMsg}
            </Text>
          </View>
          <View
            style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.appPrimary}
              size={20}
              style={STYLES.inputIcon} />
            <TextInput
              placeholder="Email"
              placeholderTextColor={COLORS.appPrimary}
              style={STYLES.input}
              onChangeText={text => {
                email = text;
                checkEm(checkEmail(email) ? '' : 'Email is not valid !');
              }
              } />
          </View>
          <View>
            <Text style={{ color: 'red' }}>
              {txtEmailMsg}
            </Text>
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
              onChangeText={text => {
                password = text;
                checkPa(checkPassword(password) ? '' : 'Password is null !');
              }
              }
              secureTextEntry
            />
          </View>
          <View>
            <Text
              style={{ color: 'red' }}>
              {passErrorMsg}
            </Text>
          </View>
          <DropDownPicker
            style={STYLES.dropDown}
            dropDownStyle={{ backgroundColor: 'black' }}
            labelStyle={STYLES.dropDownLabel}
            items={[
              { label: 'Normal User', value: 'nuser' },
              { label: 'Trainer', value: 'trainer' },
            ]}
            placeholder="Register as"
            multiple={false}
            defaultValue={null}
            containerStyle={{ height: 60 }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            onChangeItem={item => {
              userType = item.value;
            }}
          />
          <TouchableOpacity
            style={STYLES.btnPrimary}
            onPress={() => {
              if (checkName(name) && checkEmail(email) && checkPassword(password)) {
                register(name, email, password, userType);
              }
            }}>
            <Text
              style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
              Register
              </Text>
          </TouchableOpacity>
        </View>

        <View
          style={STYLES.signInNote}>
          <Text
            style={{ color: COLORS.appPrimary, fontWeight: 'bold' }}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Login');
          }}>
            <Text
              style={{ color: COLORS.white, fontWeight: 'bold' }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;