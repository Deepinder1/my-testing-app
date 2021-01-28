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
