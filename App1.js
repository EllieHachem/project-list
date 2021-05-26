import React,{ useState,useEffect} from "react";
import { Fragment, Component,Text, View,TextInput,ScrollView,StyleSheet,Button,Switch,Platform,SafeAreaView,FlatList,StatusBar,Alert,AppRegistry,TouchableOpacity} from "react-native";
import FlatListBasics from './FlashList.js'
import ImagesExample from './ImagesExample.js'
import SectionListBasics from'./SectionList.js'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import screens
import Movies from './screens/Movies';
import Favorites from './screens/Favorites';
import RootNavigator from './navigation/RootNavigator';
import {useSelector, useDispatch,Provider} from 'react-redux';
import {getMovies} from './redux/actions';
import { createStackNavigator } from '@react-navigation/stack'
import BookScreen from './screens/BooksScreen'
import CartScreen from './screens/CartScreen'
import MainStackNavigator from './AppNavigator'






const App = () => {

  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };
  
  return (
  <ScrollView>
    <MainStackNavigator />
    
   
    <RootNavigator />
     <Ionicons name="md-checkmark-circle" size={32} color="green" />

     <AntDesign name="facebook" size={12} color="black" />
    <SectionListBasics/>
    <FlatListBasics/>
    <ImagesExample />
    <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwitch}
          value={switchValue}
        />

    <View style={styles.container}>
      <Text>This is my basic app that will contain everything  🎉</Text>
      <TextInput placeholder ="Type Here" style={styles.title}/>
      <Button
          onPress=""
          title="Simple Button"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
    </View>
    </ScrollView>
  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    borderWidth: 5,
    backgroundColor: "grey",
  }
}); 
