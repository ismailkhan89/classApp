import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import Layout from '../../component/Layout/Layout';
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
    Entypo,
    MaterialIcons,
    MaterialCommunityIcons
  } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../context/Auth/auth';
import { CommonActions } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function More(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
    const { setTokenAsync , logout } = useContext(AuthContext)

    const AccountMore = [
        {
            id:0,
            title:'Account Settings',
            icon: <FontAwesome5 name="user-edit" size={20} color={currentTheme.white} />,
            navigateTo:'AccountSettings'
        },
        {
            id:1,
            title:'Notifications',
            icon: <MaterialCommunityIcons name="bell-outline" size={24} color={currentTheme.white} />,
            navigateTo:'Notifications'
        },
        {
            id:2,
            title:'Personalization',
            icon: <Ionicons name="settings" size={24} color={currentTheme.white} />
        }
    ]

    const MiscMore = [
        {
            id:0,
            title:'Share the app',
            icon: <FontAwesome name="share-alt" size={24} color={currentTheme.white} />
        },
        {
            id:1,
            title:'Language',
            icon: <Feather name="globe" size={24} color={currentTheme.white} />,
            // navigateTo:'Language'
            onPress : () => props.navigation.push('Language')
        },
        {
            id:2,
            title:'Help',
            icon: <Feather name="help-circle" size={24} color={currentTheme.white} />
        },
        {
            id:3,
            title:'About',
            icon: <Entypo name="info-with-circle" size={24} color={currentTheme.white} />
        },
        {
            id:4,
            title:'Logout',
            icon: <FontAwesome name="sign-out" size={24} color={currentTheme.white} />,
            onPress : async () => {
                await AsyncStorage.removeItem('token')
                logout()
                props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'Auth'}],
                    })
                )
            }
        }
    ]
    
    return (
        <Layout navigation={props.navigation} BellIcon={true} PageTitle={'More'} withoutScroll={true} ContentContainer={styles().ph0}>
            
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <FlatList
                    data={AccountMore}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={()=> item.navigateTo && props.navigation.navigate(item.navigateTo)}
                                style={[
                                    styles().flexRow,
                                    styles().mb10,
                                    // styles().justifyBetween,
                                    styles().alignCenter,
                                ]}>
                                <View style={[styles().wh35px, styles().alignCenter, styles().justifyCenter]}>
                                    {item.icon}
                                </View>
                                <View style={[styles().flex, styles().ml10]}>
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={
                        <FlatList
                    data={MiscMore}
                    ListHeaderComponent={<View style={[styles().mt20, styles().pt20, {borderTopWidth:1, borderColor:currentTheme.SliderDots}]} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={item.onPress}
                                style={[
                                    styles().flexRow,
                                    styles().mb10,
                                    // styles().justifyBetween,
                                    styles().alignCenter,
                                ]}>
                                <View style={[styles().wh35px, styles().alignCenter, styles().justifyCenter]}>
                                    {item.icon}
                                </View>
                                <View style={[styles().flex, styles().ml10]}>
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
                    }
                />
            </View>
            
    
    </Layout>
           
  );
}
