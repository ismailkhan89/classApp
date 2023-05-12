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
const {width, height} = Dimensions.get('window');

export default function Notifications(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const NotificationsList = [
        {
            id:0,
            title:'New Devotional has been added',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.'
        },
        {
            id:1,
            title:'New Devotional has been added',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.'
        },
        {
            id:2,
            title:'New Devotional has been added',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.'
        }
    ]
    
    return (
        <Layout navigation={props.navigation} LeftIcon={true} PageTitle={'Notifications'} withoutScroll={true} ContentContainer={styles().ph0}>
            
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <FlatList
                    data={NotificationsList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().flexRow,
                                    styles().mb10,
                                    styles().justifyBetween,
                                    styles().pb10,
                                    {borderBottomColor:currentTheme.SliderDots, borderBottomWidth:1,}
                                    // styles().alignCenter,
                                ]}>
                                <View style={[styles().mt5, styles().br5, {width:10, height:10, backgroundColor:currentTheme.themeBackground}]} />

                                
                                <View style={[styles().flex, styles().ml10]}>
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs12, styles().fontRegular, {color:currentTheme.white}]}>{item.description}</Text>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            
    
    </Layout>
           
  );
}