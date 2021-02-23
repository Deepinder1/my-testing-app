import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Navigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './screens/helpers/icons-loader';

registerScreens(); // this is where you register all of your app's screens

let icons;

const styles = StyleSheet.create({
  button: {
    overflow: 'hidden',
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Our custom component we want as a button in the nav bar
const CameraButton = () => (
  <TouchableOpacity
    style={[styles.button, { marginLeft: -5 }]}
    onPress={() => console.log('pressed me!')}
  >
    <View style={styles.button}>
      <Ionicons name="ios-camera-outline" size={34} color="black" style={{ lineHeight: 34 }} />
    </View>
  </TouchableOpacity>
)

const SendButton = () => (
  <TouchableOpacity
    style={[styles.button, { marginRight: -5, marginTop: 6 }]}
    onPress={() => console.log('pressed me!')}
  >
    <View style={styles.button}>
      <Ionicons name="ios-send-outline" size={34} color="black" style={{ lineHeight: 34 }} />
    </View>
  </TouchableOpacity>
)

// Register the component
Navigation.registerComponent('CameraButton', () => CameraButton);
Navigation.registerComponent('SendButton', () => SendButton);

export default class App {
  constructor() {
    iconsLoaded.then(() => {
      // personIcon = iconsMap['ios-person']
      // homeIcon = iconsMap['ios-home']
      icons = iconsMap
      this.startApp();
    });
  }

  // start the app
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [{
        screen: 'instaClone.HomeScreen', // this is a registered name for a screen
        icon: icons['ios-home-outline'],
        selectedIcon: icons['ios-home'],
        title: 'Home',
        iconInsets: { top: 6, bottom: -6 },
        navigatorButtons: {
          leftButtons: [
            {
              id: 'camera-button',
              component: 'CameraButton' // This line loads our component as a nav bar button item
            }
          ],
          rightButtons: [
            {
              id: 'send-button',
              component: 'SendButton' // This line loads our component as a nav bar button item
            }
          ]
        }
      }, {
        screen: 'instaClone.SearchScreen', // this is a registered name for a screen
        icon: icons['ios-search-outline'],
        selectedIcon: icons['ios-search'],
        title: 'Search',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.AddScreen', // this is a registered name for a screen
        icon: icons['ios-add-circle-outline'],
        selectedIcon: icons['ios-add-circle'],
        title: 'Add',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.FavoriteScreen', // this is a registered name for a screen
        icon: icons['ios-heart-outline'],
        selectedIcon: icons['ios-heart'],
        title: 'Favorite',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.ProfileScreen', // this is a registered name for a screen
        icon: icons['ios-person-outline'],
        selectedIcon: icons['ios-person'],
        title: 'Profile',
        iconInsets: { top: 6, bottom: -6 }
      }],
      tabsStyle: {
        tabBarButtonColor: 'black',
        tabBarSelectedButtonColor: 'black'
      }
    });
  }
};



// import 'react-native-gesture-handler';
// import React from 'react';
// // import LoginScreen from './src/screens/loginScreen';
// // import RegisterScreen from './src/screens/registerScreen';
// import HomeScreen from './src/screens/homeScreen';
// import { Router, Stack, Scene } from 'react-native-router-flux';


// export default function App() {
//   return (
//     <Router>
//       <Stack key="root">
//       <Scene key="HomeScreen" component={HomeScreen} title="HomeScreen" hideTabBar={true} initial={true} hideNavBar={true} />

//       </Stack>
//     </Router>
//   )
// }  
// import { StatusBar } from 'expo-status-bar';
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import TrainerCardList from './src/screens/trainerList'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <TrainerCardList/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//TODO copy trainer list from here
// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   ScrollView,
// } from 'react-native';

// import { Card } from 'react-native-elements';
// import { TouchableHighlight } from 'react-native-gesture-handler';
// import { ListItem, Icon } from 'react-native-elements';

// const listOfTrainers = [
//   {
//     id: 1,
//     name: 'Manjot Singh',
//     title: 'Appointments',
//     icon: 'av-timer',
//     uri: "https://media.gettyimages.com/photos/wrestler-batista-during-his-world-heaveyweight-wwe-championship-match-picture-id75998170?s=2048x2048"
//   },
//   {
//     title: 'Trips',
//     icon: 'flight-takeoff'
//   },
  
// ]

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.titleStyle}>View Like Google Play Store</Text>
//       <ScrollView>
//         <View style={{ marginTop: 25 }}>
//           <SingleRow name={listOfTrainers[0].name} uri={listOfTrainers[0].uri} />
//           <SingleRow name={listOfTrainers[0].name} uri={listOfTrainers[0].uri} />
//           <SingleRow name={listOfTrainers[0].name} uri={listOfTrainers[0].uri} />
//           <SingleRow name={listOfTrainers[0].name} uri={listOfTrainers[0].uri} />
//           <SingleRow name={listOfTrainers[0].name} uri={listOfTrainers[0].uri} />

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default App;

// const SingleRow = (props) => {


//   const bottomButtons = [
//     {
//       key: '1',
//       text: 'FREE ',
//       title: 'Mobile ',
      
//     },
//     {
//       key: '2',
//       title: 'Location ',
//     },
//     {
//       key: '3',
//       text: 'FREE',
//       title: 'SYNC ',

//     },


//   ];


//   return (
//     <View>
//       <Card containerStyle={styles.cardStyle}>
//         <View style={styles.cardHeadingStyle}>
//           <Text style={styles.cardHeadingTextStyle}>{props.name}</Text>
//         </View>
//         <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
//         <View style={{flexDirection: 'column'}}>
//         <Text style={styles.cardHeadingTextStyle}>{props.name}</Text>
//         <Text style={styles.cardHeadingTextStyle}>{props.name}</Text>
//         </View>
//           <Image
//             source={{
//               uri: props.uri,
//             }}
//             style={{ width: 70, height: 70, margin: 10, borderRadius: 35, borderColor: '#85c61a', borderWidth: 2 }}
//           />
//         </View>
//         <View style={{ flexDirection: 'row', width: '100%' }}>
//           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//             {bottomButtons.map((item, key) => (
//               <View style={{ margin: 8 }}>
//                 <TouchableHighlight
//                   style={styles.touchableHighlight}
//                   onPress={() => {
//                     alert('Title ' + item.title + ' Clicked');
//                   }}
//                 >
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'space-between',
//                     }}>
//                     <Text
//                       style={{ color: '#85c61a', fontWeight: '200' }}
//                       onPress={() => {
//                         alert('Title ' + item.title + ' Clicked');
//                       }}>
//                       {item.title}
//                     </Text>
//                   </View>
//                 </TouchableHighlight>
//                 <View style={styles.childViewTextStyle}>
//                   <Text style={{ color: '#606070', fontWeight: '200' }}>
//                     {item.key}
//                   </Text>
//                   <Text style={{ color: '#228B22' }}>{item.text}</Text>
//                 </View>
//               </View>
//             ))}

//           </ScrollView>
//         </View>
//       </Card>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   titleStyle: {
//     padding: 16,
//     fontSize: 20,
//     color: 'white',
//     backgroundColor: '#307ecc',
//     justifyContent: 'center',
//     alignContent: 'center'
//   },
//   cardStyle: {
//     backgroundColor: '#FFFFFF',
//     padding: 10,
//     marginLeft: 0,
//     marginRight: 0,
//     marginTop: 0,
//   },
//   cardHeadingStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cardHeadingTextStyle: {
//     color: '#85c61a',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   childViewTextStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   touchableHighlight: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//     borderColor: '#85c61a',
//     borderRadius: 5,
//     borderWidth: 2
//   }
// });
