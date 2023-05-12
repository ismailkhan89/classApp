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

export default function SongNotes(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const MostRecent = [
        {
            id:0,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/devotion-img1.png'),
        },
        {
            id:1,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/devotion-img2.png'),
        },
        {
            id:2,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/devotion-img3.png'),
        },
        {
            id:3,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/devotion-img4.png'),
        },
        {
            id:4,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/devotion-img1.png'),
        },
        {
            id:5,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/devotion-img2.png'),
        },
        {
            id:6,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/devotion-img3.png'),
        },
        {
            id:7,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/devotion-img4.png'),
        },
        {
            id:8,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/devotion-img1.png'),
        },
        {
            id:9,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/devotion-img2.png'),
        },
        {
            id:10,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/devotion-img3.png'),
        },
        {
            id:11,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/devotion-img4.png'),
        },
    ]
    return (
        <Layout navigation={props.navigation} LeftIcon={true}  withoutScroll={true} ContentContainer={styles().ph0}>
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
            <View style={[styles().mb20]}>
                    <Text style={[styles().fs13, styles().mb5, styles().fontRegular, {color:currentTheme.whitish}]}>8 min read | Spiritual Growth</Text>
                    <Text style={[styles().fs24, styles().fontBold, {color:currentTheme.white}]}>Why Is It Important To Hear God?</Text>
                    <View style={[styles().flexRow, styles().mb10, styles().alignCenter]}>
                        <Text style={[styles().fs15, styles().fontRegular, {color:currentTheme.SliderDots}]}>Bible Verse: </Text>
                        <Text style={[styles().fs15, styles().fontBold, {color:currentTheme.themeBackground}]}>John 5:19</Text>
                    </View>
                </View>
                <FlatList
                    data={MostRecent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb10,
                                    styles().pb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,
                                    {borderBottomWidth:1, borderBottomColor:currentTheme.A5A5A5}
                                ]}>
                                <View style={[styles().wh50px, styles().overflowH, styles().br25]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontLight, {color:currentTheme.whitish}]}>{item.singer}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    // ListFooterComponent={<View style={styles().h100px} />} 
                />
            </View>
            <View>
                <View>
                    <TouchableOpacity
                        style={[
                            styles().br10, 
                            styles().ph20,
                            styles().pv10,
                            styles().flexRow,
                            styles().justifyBetween,
                            styles().alignCenter,

                            {backgroundColor:currentTheme.white15}
                            
                            // {width:width * 0.75, marginLeft:index === 0 ? 0 : width * 0.05} 
                    ]}>
                        <View style={[styles().wh50px, styles().overflowH, styles().br25]}>
                            <Image source={require('../../assets/images/devotion-img1.png')} style={styles().wh100} resizeMode="cover" />
                        </View>
                        <View style={[styles().flex, styles().ml15]}>
                            <Text style={[styles().fs16, styles().fontRegular, {color:currentTheme.white}]}>Unstoppable (ft. Lacrae)</Text>
                            <Text style={[styles().fs11, styles().fontLight, {color:currentTheme.whitish}]}>Koryn Hawthorne</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
    
    </Layout>
           
  );
}
