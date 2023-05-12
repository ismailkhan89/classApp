import React, { useContext, useState } from 'react';
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
    MaterialCommunityIcons
} from "@expo/vector-icons";
const { width, height } = Dimensions.get('window');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';



export default function Devotionals(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const MostRecent = [
        {
            id: 0,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img1.jpg'),
        },
        {
            id: 1,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img2.jpg'),
        },
        {
            id: 2,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img3.jpg'),
        },
        {
            id: 3,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img4.jpg'),
        },
    ]

    const SelfDiscrovery = [
        {
            id: 0,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img3.jpg'),
        },
        {
            id: 1,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img4.jpg'),
        },
        {
            id: 2,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img1.jpg'),
        },
        {
            id: 3,
            title: 'Why Is It Important To Hear God?',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
            image: require('../../assets/images/devotions-img2.jpg'),
        },
    ]

    const FirstRoute = () => (
        <>
            <View style={[styles().ml20, styles().mb10, { borderBottomColor: currentTheme.white, borderBottomWidth: 1 }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, { color: currentTheme.whitish }]}>Most Recent</Text>
                <FlatList
                    data={MostRecent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate('DevoDetails', item)}
                                style={[
                                    styles().br10,
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,

                                    { width: width * 0.75, marginLeft: index === 0 ? 0 : width * 0.05 }
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, { color: currentTheme.white }]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, { color: currentTheme.white90 }]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />}
                />
            </View>

            <View style={[styles().ml20, styles().pr20, styles().pb10, styles().mb10, styles().overflowH, { borderBottomColor: currentTheme.white, borderBottomWidth: 1 }]}>
                <View style={[styles().w100, styles().h100px, styles().overflowH, styles().br10]}>
                    <Image source={require('../../assets/images/home-banner2.png')} style={styles().wh100} resizeMode="contain" />
                </View>
            </View>

            <View style={[styles().ml20, styles().mb10, { borderBottomColor: currentTheme.white, borderBottomWidth: 1, }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, { color: currentTheme.whitish }]}>Self Discovery</Text>
                <FlatList
                    data={SelfDiscrovery}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10,
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,

                                    { width: width * 0.75, marginLeft: index === 0 ? 0 : width * 0.05 }
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, { color: currentTheme.white }]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, { color: currentTheme.white90 }]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />}
                />
            </View>

            <View style={[styles().ml20, { borderBottomColor: currentTheme.white, borderBottomWidth: 1, }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, { color: currentTheme.whitish }]}>Featured Devotional</Text>
                <FlatList
                    data={MostRecent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10,
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,

                                    { width: width * 0.75, marginLeft: index === 0 ? 0 : width * 0.05 }
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, { color: currentTheme.white }]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, { color: currentTheme.white90 }]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />}
                />
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
        { key: 'first', title: 'Store' },
        { key: 'second', title: 'Library' },
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
        <Layout navigation={props.navigation} BellIcon={true} PageTitle={'Devotionals'} ContentContainer={styles().ph0}>
            <View style={[styles().flex, styles().mt25]}>
                <View style={[styles().posAbs, styles().top5, styles().wh40px, styles().br20, styles().alignCenter, styles().justifyCenter, styles().right20, {backgroundColor:currentTheme.SliderDots}]}>
                    <FontAwesome name="search" size={20} color={currentTheme.white} />
                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>

            {/* <View style={[styles().ml20, styles().mb10, {borderBottomColor:currentTheme.white, borderBottomWidth:1 }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, {color:currentTheme.whitish}]}>Most Recent</Text>
                <FlatList
                    data={MostRecent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,
                                    
                                    {width:width * 0.75, marginLeft:index === 0 ? 0 : width * 0.05} 
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, {color:currentTheme.white90}]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />} 
                />
            </View>

            <View style={[styles().ml20, styles().pr20, styles().pb10, styles().mb10, styles().overflowH, {borderBottomColor:currentTheme.white, borderBottomWidth:1 }]}>
                <View style={[styles().w100,  styles().h100px, styles().overflowH, styles().br10]}>
                    <Image source={require('../../assets/images/home-banner2.png')} style={styles().wh100} resizeMode="cover" />
                </View>
            </View>

            <View style={[styles().ml20, styles().mb10, {borderBottomColor:currentTheme.white, borderBottomWidth:1, }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, {color:currentTheme.whitish}]}>Self Discovery</Text>
                <FlatList
                    data={MostRecent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,
                                    
                                    {width:width * 0.75, marginLeft:index === 0 ? 0 : width * 0.05} 
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, {color:currentTheme.white90}]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />} 
                />
            </View>

            <View style={[styles().ml20, {borderBottomColor:currentTheme.white, borderBottomWidth:1, }]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontLight, {color:currentTheme.whitish}]}>Featured Devotional</Text>
                <FlatList
                    data={MostRecent}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb10,
                                    styles().flexRow,
                                    styles().justifyBetween,
                                    styles().alignCenter,
                                    
                                    {width:width * 0.75, marginLeft:index === 0 ? 0 : width * 0.05} 
                                ]}>
                                <View style={[styles().wh130px, styles().overflowH, styles().br10]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={[styles().flex, styles().ml15]}>
                                    <Text style={[styles().fs13, styles().fontRegular, {color:currentTheme.white}]}>{item.title}</Text>
                                    <Text style={[styles().fs11, styles().fontRegular, {color:currentTheme.white90}]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />} 
                />
            </View> */}

        </Layout>

    );
}
