import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, useWindowDimensions } from 'react-native';
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
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MusicComponent from '../../component/Music/MusicComponent';

export default function Music(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const MostRecent = [
        {
            id:0,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/music-img1.png'),
        },
        {
            id:1,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/music-img2.png'),
        },
        {
            id:2,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/music-img3.png'),
        },
        {
            id:3,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/music-img4.png'),
        },
        {
            id:4,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/music-img5.png'),
        },
        {
            id:5,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/music-img6.png'),
        },
        {
            id:6,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/music-img1.png'),
        },
        {
            id:7,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/music-img2.png'),
        },
        {
            id:8,
            title:'The Heavens Adore You',
            singer:'Monica Smith',
            image: require('../../assets/images/music-img3.png'),
        },
        {
            id:9,
            title:'Love Theory',
            singer:'Kirk Franklin',
            image: require('../../assets/images/music-img4.png'),
        },
        {
            id:10,
            title:'Work it Out',
            singer:'Tye Tribbett',
            image: require('../../assets/images/music-img5.png'),
        },
        {
            id:11,
            title:'Unstoppable (ft. Lacrae)',
            singer:'Koryn Hawthorne',
            image: require('../../assets/images/music-img6.png'),
        },
    ]

    const FirstRoute = () => (
        <>
        <View style={[styles().flex, styles().mt20, styles().ph20]}>
            <FlatList
                data={MostRecent}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <MusicComponent item={item} index={index} />
                        )
                }}
                keyExtractor={(item, index) => index.toString()}  
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
            </>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#3b5998' }} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Music' },
        { key: 'second', title: 'Video' },
    ]);

    const renderTabBar = props => (
        <TabBar 
            
            {...props}
            
            indicatorStyle={[styles().br50, { marginBottom: 5, width: '44%', marginLeft: '2%', height: 31, backgroundColor: currentTheme.themeBackground }]}
            //   indicatorContainerStyle={{marginRight:10}}
            style={[styles().br50, styles().w60, styles().alignSelfCenter, styles().bw1, { backgroundColor: 'transparent', borderColor: currentTheme.themeBackground }]}
            activeColor={currentTheme.white}
            inactiveColor={currentTheme.white}
            tabStyle={[styles().h40px, styles().alignCenter]}
            labelStyle={[styles().fs14, styles().fw600, styles().lh16, {marginTop:-5, textTransform: 'capitalize' }]}
        />
    );


    return (
        <Layout navigation={props.navigation} BellIcon={true} PageTitle={'Music Library'} withoutScroll={true} ContentContainer={styles().ph0}>
            <TouchableOpacity style={[styles().alignSelfEnd, styles().posAbs, styles().br20, styles().right15, styles().alignCenter, styles().justifyCenter, styles().wh25px, {top:-30, backgroundColor:currentTheme.SliderDots}]}>
                <FontAwesome5 name="plus" size={16} color={currentTheme.white} />
            </TouchableOpacity>

            <View style={[styles().flex, styles().mt25]}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>

            {/* <View style={[styles().flex, styles().mt20, styles().ph20]}>
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
            </View> */}
    
    </Layout>
           
  );
}
