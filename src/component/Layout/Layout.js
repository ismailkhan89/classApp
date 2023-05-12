import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, useColorScheme, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../../screens/styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import Header from '../Header/Header';
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
  } from "@expo/vector-icons";


export default function Layout({StyleContainer, withoutScroll, ContentContainer, children, navigation, LeftIcon, PageTitle, BellIcon }) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
    const colorScheme = useColorScheme();
   

  return (
 
    <View style={[styles().flex, styles().justifyCenter, {backgroundColor:currentTheme.black}]}>
        <SafeAreaView style={[styles().flex, StyleContainer, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
            <Header navigation={navigation} LeftIcon={LeftIcon} PageTitle={PageTitle} BellIcon={BellIcon}/>

            {withoutScroll ? 
                <View style={[
                    { flexGrow: 1},
                    styles().ph20,
                    ContentContainer
                    ]}>
                    {children}
                </View> : 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[styles().ph20, ContentContainer, {flexGrow:1}]}
                    keyboardShouldPersistTaps='handled'>
                        {children}
                </ScrollView> }
        </SafeAreaView>
    </View>
    
           
  );
}