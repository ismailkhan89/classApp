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
    MaterialIcons,
    MaterialCommunityIcons
  } from "@expo/vector-icons";
const {width, height} = Dimensions.get('window');

export default function NotesSingle(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
    const MostRecent = [
        {
            id:0,
            title:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd',
            description:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd'
        },
        {
            id:1,
            title:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd',
            description:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd'
        },
        {
            id:2,
            title:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd',
            description:'As one of the Gifts of the Holy Spirit, discernment is a crucial part of hearing and following the voice of GOd'
        },
    ]
    
    return (
        <Layout navigation={props.navigation} LeftIcon={true}  withoutScroll={true} ContentContainer={styles().ph0}>
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <View style={[styles().mb20]}>
                    <Text style={[styles().fs13, styles().mb5, styles().fontRegular, {color:currentTheme.whitish}]}>8 min read | Spiritual Growth</Text>
                    <Text style={[styles().fs24, styles().fontBold, {color:currentTheme.white}]}>Why Is It Important To Hear God?</Text>
                </View>
                <FlatList
                    data={MostRecent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[styles().pt5, styles().pb15, {borderTopWidth:index === 0 ? 0 : 1, borderTopColor:currentTheme.white}]}>
                                <Text style={[styles().fs12, styles().lh18, styles().fontRegular, {color:currentTheme.SliderDots}]}>{item.title}</Text>
                                <View style={[styles().w50px, styles().mt5, styles().mb5, {height:3, borderBottomWidth:1, borderBottomColor:currentTheme.SliderDots, borderStyle:'dashed'}]} />
                                <Text style={[styles().fs15, styles().lh22, styles().fontRegular, {color:currentTheme.white}]}>{item.description}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    // ListFooterComponent={<View style={styles().h100px} />} 
                />
                
            </View>
            
    
    </Layout>
           
  );
}
