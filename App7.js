import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { defineAnimation } from 'react-native-reanimated';

export default function App() {
  const [Count,setDefaultCount] = useState(5)
  // const increase1 = (Count) =>{
  //   console.log({Count});
  //   setDefaultCount(Count+1)
    
  // }
  // const increase2 = () =>{
  //   setDefaultCount(Count+1)
    
  // }
// fnRef = ref
//fnRef(a) = calling function
// onClick={() => increase1(Count)}  
return (
    <View>
      <Text>{Count}</Text>
      <button title="sign up" 
      onClick={() =>{
        setDefaultCount(Count+1)
        
      }}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
