import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default function Landing(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
        <Text>Landing Screen</Text>
      </TouchableOpacity>
      
    </View>
  );
}