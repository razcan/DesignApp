import 'expo-router/entry';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from "react-native";

export default function Page() {
  return (
    <Link href="/home" asChild>
      <Pressable>
        <Text>Home text link pt ruta</Text>
      </Pressable>
    </Link>  
  );
}


// import React, { useState } from 'react';
// import { Appbar } from 'react-native-paper';
// import { Platform, View, Text,ScrollView } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useCallback } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
// import { Avatar, Card } from 'react-native-paper';
// // "main": "node_modules/expo/AppEntry.js",

// import Svg, { Circle, Rect } from 'react-native-svg';

// import DateTimePicker from '@react-native-community/datetimepicker';

// import * as WebBrowser from 'expo-web-browser';


// import { StyleSheet } from 'react-native';
// import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';
// import { useFonts } from 'expo-font';

// //used for bar status phone 
// import { StatusBar } from 'expo-status-bar';

// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// const ContentTitle = ({title,style}) =>(
//   <Appbar.Content
//           title={<Text style={style} > {title} </Text>}
//           style={{ alignItems: 'center' }}
//         />
// )


// const MyComponent = () => {

//   const [result10, setResult10] = useState(null);

//   const _handlePressButtonAsync = async () => {
//     let result10 = await WebBrowser.openBrowserAsync('https://expo.dev');
//     setResult10(result10);
//   };


//   const [fontsLoaded, fontError] = useFonts({
//     'Inter-Black': require('./assets/fonts/Inter_Black_900.otf'),
//   });


//   const [visible, setVisible] = React.useState(false);

//   const openMenu = () => setVisible(true);

//   const closeMenu = () => setVisible(false);

//   const [show, setShow] = useState(false);
//   const showDateTimePicker = () => setShow(!show);

//   const onChangedate = () => setShow(!show);



//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded || fontError) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }


//   return (
//     <SafeAreaProvider>
//     <StatusBar hidden={true} />

 


//     {/* graphical object design
//     <Svg height="50%" width="50%" viewBox="0 0 100 100">
//       <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
//       <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
//     </Svg> */}

//     <Appbar.Header style={[styles.bottom]} onLayout={onLayoutRootView}>
//      <Appbar.Action icon="menu" onPress={() => setVisible(true)} />
//         <ContentTitle style={[styles.font_app]} title={'SoftHub'} />
//          <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
//          <Appbar.Action icon="account-circle" onPress={() => {}} /> 
//      </Appbar.Header>

//     <PaperProvider>
//       <ScrollView
//         style={{
//           paddingTop: 0,
//           minHeight: '100%' ,
//           backgroundColor: '#ffffff',
//           // flexDirection: 'row',
//           // justifyContent: 'center',
//         }}
//         >
//         <Menu
//           style={[styles.menu]}
          
//           visible={visible}
//           onDismiss={closeMenu}
//           anchor={<Button onPress={openMenu}></Button>}>
          
//           <Menu.Item  onPress={closeMenu} title="Item 1" />
          
//           <Menu.Item  onPress={closeMenu} title="Item 2" />
//           {/* <Divider /> */}
//           <Menu.Item  onPress={() => {}} title="Item 3" />
//         </Menu>
        
//         {show && (
//         <DateTimePicker
//                 testID="dateTimePicker"
//                 value={new Date()}
//                 onChange={onChangedate}
//                 negativeButton={{label: 'Cancel', textColor: 'red'}}
//           />
//         )}

        
//       <View style={styles.container}>
//       <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      
//     </View>

//           <Card>
//             <Card.Title title="Card Title" subtitle="Card Subtitle"/>
//             <Card.Content>
//               <Text variant="titleLarge">Card title</Text>
//               <Text variant="bodyMedium">Card content</Text>
//             </Card.Content>
//             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//             <Card.Actions>
//               <Button onPress={showDateTimePicker}>PickDate</Button>
//               <Button onPress={_handlePressButtonAsync}>WEB</Button>
//               {/* <Button title="OK" onPress={_handlePressButtonAsync} /> */}
//             </Card.Actions>
//           </Card>
//           <Card>
//             <Card.Title title="Card Title" subtitle="Card Subtitle"/>
//             <Card.Content>
//               <Text variant="titleLarge">Card title</Text>
//               <Text variant="bodyMedium">Card content</Text>
//             </Card.Content>
//             <Card.Cover source={{ uri: 'https://picsum.photos/710' }} />
//             <Card.Actions>
//               <Button>Cancel</Button>
//               <Button>Ok</Button>
//             </Card.Actions>
//           </Card>
//           <Card>
//             <Card.Title title="Card Title" subtitle="Card Subtitle"/>
//             <Card.Content>
//               <Text variant="titleLarge">Card title</Text>
//               <Text variant="bodyMedium">Card content</Text>
//             </Card.Content>
//             <Card.Cover source={{ uri: 'https://picsum.photos/701' }} />
//             <Card.Actions>
//               <Button>Cancel</Button>
//               <Button>Ok</Button>
//             </Card.Actions>
//           </Card>
//           <Card>
//             <Card.Title title="Card Title" subtitle="Card Subtitle"/>
//             <Card.Content>
//               <Text variant="titleLarge">Card title</Text>
//               <Text variant="bodyMedium">Card content</Text>
//             </Card.Content>
//             <Card.Cover source={{ uri: 'https://picsum.photos/703' }} />
//             <Card.Actions>
//               <Button>Cancel</Button>
//               <Button>Ok</Button>
//             </Card.Actions>
//           </Card>
  
//       </ScrollView>
//     </PaperProvider>
//     </SafeAreaProvider>
//   );

// };
  
//   const styles = StyleSheet.create({
//     bottom: {
//       backgroundColor: 'yellow',
//       left: 0,
//       right: 0,
//       bottom: 0,
//     },
//     menu: {
//        minHeight: '100%',
//        maxHeight: '100%',
//        top: 0,
//        left: 0,
//        backgroundColor: '#ffffff',
//     },
//     culoare_menu: {
//       backgroundColor: '#ffffff',
//     },
//     font_app : {
//       fontFamily: 'Inter-Black', 
//       fontSize: 30,
//       color:'black'
//     }
//   }
// );


// export default MyComponent;