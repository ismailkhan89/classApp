import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../../screens/styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
  } from "@expo/vector-icons";


export default function Header(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

   function Back(){
    return(
        <TouchableOpacity 
            onPress={()=>props.navigation.goBack()} 
            style={[styles().wh40px, styles().alignCenter, styles().justifyCenter, styles().br20, {backgroundColor:currentTheme.white30}]}>
                <FontAwesome5 name="arrow-left" size={20} color={currentTheme.white} />
        </TouchableOpacity>
    )
   }

   function Notifi(){
    return(
        <TouchableOpacity 
        // onPress={()=>{props.navigation.navigate('Notifications');}}
        onPress={() => {
            props.navigation.navigate("Notifications");
          }}
        >
            <FontAwesome5 name="bell" size={20} color={currentTheme.white} />
        </TouchableOpacity>
    )
   }

  return (
            <View style={styles().ph30}>
                <View style={[styles().flexRow, styles().alignCenter, styles().justifyBetween]}>
                    <View style={styles().wh40px}>
                        {props.LeftIcon ? <Back /> : null }
                    </View>
                    <View>
                        {props.BellIcon ? <Notifi /> : null }
                    </View>
                </View>
                {props.PageTitle ? <View style={[styles().alignCenter, styles().mt10]}>
                     <Text style={[styles().fs24, styles().fontSemiBold, {color:currentTheme.white}]}>{props.PageTitle}</Text>
                </View> : null }
            </View> 

            
        
    
           
  );
}