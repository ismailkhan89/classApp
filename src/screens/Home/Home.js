import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, useColorScheme, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import TextField from '../../component/FloatTextField/FloatTextField';
import { theme } from '../../context/ThemeContext/ThemeColor'
import ThemeButton from '../../component/ThemeButton/ThemeButton';
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
  import Swiper from 'react-native-swiper'
import TabbarTesting from './tabbar_testing';
  

const {width, height} = Dimensions.get('window');


 


export default function Home(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
    const colorScheme = useColorScheme();

    const Slider = [
        {
            Image: require('../../assets/images/home-slider-img.png')
        },
        {
            Image: require('../../assets/images/home-slider-img.png'),
        },
        {
            Image: require('../../assets/images/home-slider-img.png'),
        },
    ]

    const exploreDevotions = [
        {
            id:0,
            content:'The Rightful place of human longings',
            image: require('../../assets/images/devotional-img1.png'),
        },
        {
            id:1,
            content:'finding emotional healings',
            image: require('../../assets/images/devotional-img2.png'),
        },
        {
            id:2,
            content:'forum mourning to laughter',
            image: require('../../assets/images/devotional-img3.png'),
        },
        {
            id:3,
            content:'A perfect vessel unto honor',
            image: require('../../assets/images/devotional-img4.png'),
        },
        
    ]

    return (
        <Layout navigation={props.navigation} BellIcon={true} ContentContainer={styles().ph0}>

            <View style={[styles().flexRow, styles().mb20, styles().ph30, styles().alignCenter]}>
                <View style={[styles().wh80px, styles().overflowH, styles().br40]}>
                    <Image source={require('../../assets/images/profile-home-img.jpg')} resizeMode="cover" style={styles().wh100} />
                </View>
                <View style={[styles().flex, styles().ml15]}>
                    <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.BBBBBB75}]}>Thursday, July 8</Text>
                    <Text style={[styles().fs18, styles().fontRegular, {color:currentTheme.white}]}>Good Morning,</Text>
                    <Text style={[styles().fs20, styles().fontBold, {color:currentTheme.white}]}>Sarah</Text>
                </View>
            </View>
            

            

            <View style={styles().ph30}>
            <Swiper style={styles.wrapper} 
                paginationStyle={[styles().posAbs, {bottom:-20},]} 
                containerStyle={[styles().h155px, styles().pt15, styles().ph15, styles().flex, styles().br10, {backgroundColor:currentTheme.c171C26}]} 
                showsButtons={false}
                dotColor={currentTheme.themeLightColor}
                activeDotColor={currentTheme.themeBackground}
                autoplay={true}
            >
                <View style={[ styles().flex]}>
                    <Text style={[styles().fs16, styles().fw600, {color:currentTheme.white}]}>Ye Shall Know The Truth</Text>
                    <View style={[styles().flexRow, styles().mb5, styles().mt10]}>
                        <View style={[styles().wh65px, styles().br5, styles().overflowH, styles().mr10]}>
                            <Image source={require('../../assets/images/home-top-slider-img.png')} />
                        </View>
                        <Text style={[styles().fs12, styles().lh18, styles().flex, styles().fw400, {color:currentTheme.white}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor nisl porttitor enim iaculis tincidunt.</Text>
                    </View>
                    <View style={[styles().w100, styles().h35px, styles().br20, styles().overflowH]}>
                        <Image source={require('../../assets/images/percent.png')} style={[styles().w100, styles().h30px]} resizeMode='contain' />
                    </View>
                </View>
                <View style={[ styles().flex]}>
                    <Text style={[styles().fs16, styles().fw600, {color:currentTheme.white}]}>Ye Shall Know The Truth</Text>
                    <View style={[styles().flexRow, styles().mt10]}>
                        <View style={[styles().wh65px, styles().br5, styles().overflowH, styles().mr10]}>
                            <Image source={require('../../assets/images/home-top-slider-img.png')} />
                        </View>
                        <Text style={[styles().fs12, styles().lh18, styles().flex, styles().fw400, {color:currentTheme.white}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor nisl porttitor enim iaculis tincidunt.</Text>
                    </View>
                    <View style={[styles().w100, styles().h30px, styles().overflowH, styles().br20]}>
                        <Image source={require('../../assets/images/percent.png')} style={styles().wh100} resizeMode='contain' />
                    </View>
                </View>
                <View style={[ styles().flex]}>
                    <Text style={[styles().fs16, styles().fw600, {color:currentTheme.white}]}>Ye Shall Know The Truth</Text>
                    <View style={[styles().flexRow, styles().mt10]}>
                        <View style={[styles().wh65px, styles().br5, styles().overflowH, styles().mr10]}>
                            <Image source={require('../../assets/images/home-top-slider-img.png')} />
                        </View>
                        <Text style={[styles().fs12, styles().lh18, styles().flex, styles().fw400, {color:currentTheme.white}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor nisl porttitor enim iaculis tincidunt.</Text>
                    </View>
                    <View style={[styles().w100, styles().h32px, styles().overflowH, styles().br20]}>
                        <Image source={require('../../assets/images/percent.png')} style={styles().wh100} resizeMode='contain' />
                    </View>
                </View>
            </Swiper>
            </View>

            <View style={[styles().mt35, styles().ph30]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Today’s Writing</Text>
                <View style={[styles().mb20, styles().ph15, styles().br10, styles().pt10, styles().pb15, {backgroundColor:currentTheme.white}]}>
                    <Text style={[styles().fs16, styles().mb5, styles().fontSemiBold, {color:currentTheme.black}]}>The Ones That Like Me</Text>
                    <Text style={[styles().fs13, styles().lh22, styles().fontRegular, {color:currentTheme.black}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor nisl porttitor enim iaculis tincidunt. Pellentesque accumsan cursus justo in porttitor.</Text>
                </View>
            </View>

            <View style={[styles().ph30, styles().mb20]}>
                <Text style={[styles().fs15, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Today's Devotional</Text>
                <View style={[styles().mb20]}>
                    <View style={[styles().h140px, styles().br5, styles().overflowH, styles().mb20]}>
                        <Image source={require('../../assets/images/profile-top-img.png')} resizeMode="cover" style={styles().wh100} />
                    </View>
                    <View>
                        <Text style={[styles().fs16, styles().mb10, styles().fontSemiBold, {color:currentTheme.white}]}>JUDGE NOT!</Text>
                        <Text style={[styles().fs13, styles().lh22, styles().fontRegular, {color:currentTheme.white}]}>To judge means: to separate, to pick out, select, choose. By implication, it means to condemn, punish—avenge, conclude. It also carries the idea of having discernment. The passage where Jesus said, “Do not judge, or you too will be judged” (Matthew 7:1) goes on to show us how to have discernment. Love is the proper motivation for not judging and for using good judgment.</Text>
                        <TouchableOpacity>
                            <Text style={[styles().fs14, styles().fontSemiBold, {color:currentTheme.blue}]}>Read Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={[styles().w100, styles().ph30, styles().mb35, styles().h200px, styles().overflowH, styles().br10]}>
                <Image source={require('../../assets/images/home-banner.png')} style={styles().wh100} resizeMode={'cover'} />
            </View>

            <View style={[styles().flexRow, styles().ph30, styles().alignStart, styles().pb20, styles().mb20, {borderBottomWidth:1, borderColor:currentTheme.whitish}]}>
                <View style={[styles().mr10]}>
                    <MaterialCommunityIcons name="lightbulb-on" size={24} color={currentTheme.lightYellow} />
                </View>
                <View style={[styles().flex]}>
                    <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.c373737}]}>Anchor</Text>
                    <Text style={[styles().fs13, styles().lh22, styles().fontRegular, {color:currentTheme.white}]}>To judge means: to separate, to pick out, select, choose. By implication, it means to condemn, punish—avenge, conclude. It also carries the idea of having discernment. The passage where Jesus said, “Do not judge, or you too will be judged” (Matthew 7:1) goes on to show us how to have discernment. Love is the proper motivation for not judging and for using good judgment.</Text>
                    <Text style={[styles().fs14, styles().lh18, styles().fontSemiBold, {color:currentTheme.white}]}>Matthew 7:1-2 NKJV</Text>
                </View>
            </View>

            <View>
                <Text style={[styles().fs15, styles().ml30, styles().mb10, styles().fontRegular, {color:currentTheme.whitish}]}>Explore Devotionals</Text>
                <FlatList
                    data={exploreDevotions}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles().br10, 
                                    styles().mb20,
                                    {width:width * 0.35, marginLeft:index === 0 ? 30 : width * 0.05} 
                                ]}>
                                <View style={[styles().w100, styles().br10, styles().overflowH, styles().h70px, styles().mb5]}>
                                <Image source={item.image} style={styles().wh100} resizeMode="cover" />
                                </View>
                                <View style={styles().flex}>
                                    <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.white}]}>{item.content}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<View style={styles().w25px} />} 
                />
            </View>

            

            
            
            
         
        
       {/* bottom tabs new design
        <View style={[styles().flexRow, styles().bottom0, styles().left0, styles().right0, styles().boxpeshadowCart, styles().posAbs,  styles().h60px, {backgroundColor:currentTheme.white30}, styles().justifyEvenly, styles().alignCenter]}>
                <TouchableOpacity>
                    <Text>one</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>two</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles().wh100px,  styles().overflowH, styles().bottom20, styles().br50,  {backgroundColor:'transparent'}  ]}>
                    <View style={[styles().wh100px, styles().alignCenter, styles().justifyCenter, styles().bottom25, styles().boxpeshadow, styles().br50, {backgroundColor:currentTheme.themeBackground}]}>
                    <View style={[styles().alignCenter, styles().justifyCenter]}>
                    <Text>three</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>four</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>five</Text>
                </TouchableOpacity>
            </View> */}
    
    </Layout>
           
  );
}
