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
  import TextField from '../../component/TextField/TextField';
const {width, height} = Dimensions.get('window');

export default function Notes(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [search, setSearch] = useState('')
    
    const [tab, setTab] = useState(true)

    const NotesTabList = [
        {
            id:0,
            title:'The glory of the King (1 Kings 10:1)',
            description:'Solomon was the most glorious king Israel had ever had. But Solomon knew that David would have a greater Son than he, whose throne would last forever. Roll the story forward a',
            time:'Day 3',
            date:'22-Mar-23',
            day:'Monday'
        },
        {
            id:1,
            image:require('../../assets/images/read-note-img.jpg'),
            title:'The glory of the King (1 Kings 10:1)',
            description:'Solomon was the most glorious king Israel had ever had. But Solomon knew that David would have a greater Son than he, whose throne would last forever. Roll the story forward a',
            time:'Day 3',
            date:'22-Mar-23',
            day:'Monday'
        },
        {
            id:2,
            title:'The glory of the King (1 Kings 10:1)',
            description:'Solomon was the most glorious king Israel had ever had. But Solomon knew that David would have a greater Son than he, whose throne would last forever. Roll the story forward a',
            time:'Day 3',
            date:'22-Mar-23',
            day:'Monday'
        }
    ]

    
    return (
        <Layout navigation={props.navigation}LeftIcon={true} BellIcon={true} PageTitle={'Notes'} >

            <View style={[styles().br10, styles().posAbs, styles().left20, styles().flexRow, styles().alignSelfStart, styles().alignCenter, styles().justifyStart, {top:-35, backgroundColor:currentTheme.c171C26}]}>
                <TouchableOpacity onPress={()=> setTab(true)} style={[styles().pall10, styles().ph15, styles().brw1, {borderRightColor:currentTheme.SliderDots}]}>
                    <AntDesign name="laptop" size={20} color={tab ? currentTheme.lightBlue : currentTheme.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setTab(false)} style={[styles().pall10, styles().ph15,]}>
                    <Feather name="list" size={20} color={tab === false ? currentTheme.lightBlue : currentTheme.white} />
                </TouchableOpacity>
            </View>
            
            <View style={[styles().flexRow, styles().mv20, styles().justifyBetween, styles().alignCenter]}>
                <View style={[styles().flex, styles().mr10, styles().br50, styles().overflowH]}>
                    <TextField 
                        title={'Search your notes'} 
                        SetEditinfo={(e)=> setSearch(e)} 
                        value={search} 
                        PlaceholderInfo={'Search your notes'}
                        placeHolderText={true}
                        borderInput={[styles().br50, {backgroundColor:currentTheme.c171C26}]}
                    />
                    <TouchableOpacity style={[styles().posAbs, styles().right20, {top:8}]}>
                        <FontAwesome name='search' size={20} color={currentTheme.white} />
                    </TouchableOpacity>
                </View>
                <View style={[styles().wh40px, styles().alignCenter, styles().justifyCenter, styles().br20, {backgroundColor:currentTheme.c171C26}]}>
                    <FontAwesome name="plus" size={20} color={currentTheme.white} />
                </View>
            </View>

            {tab && 
            <View style={[styles().flex, styles().flexRow, styles().flexWrap, styles().justifyBetween, styles().alignStart]}>
                <View style={[styles().w47]}>
                    <View style={[styles().w100, styles().mb15, styles().pb10, styles().br20, styles().overflowH, {backgroundColor:currentTheme.c171C26}]}>
                        <View style={[styles().w100, styles().mb10, styles().h80px, styles().overflowH]}>
                            <Image source={require('../../assets/images/notes-list-img1.jpg')} style={styles().wh100} resizeMode="cover" />
                        </View>
                        <View style={[styles().ph10]}>
                            <Text style={[styles().fs14, styles().lh20, styles().fw400, {color:currentTheme.white}]}>The glory of the King (1 Kings 10:1)</Text>
                            <Text style={[styles().fs12, styles().mt10, styles().lh18, styles().fw400, {color:currentTheme.white}]}>Solomon was the most glorious king Israel had ever had. But Solomon knew that David would have a greater Son than he, whose throne would last forever. Roll the story forward a</Text>
                        </View>
                    </View>

                    <View style={[styles().w100, styles().pb35, styles().br20, styles().overflowH, {backgroundColor:currentTheme.white}]}>
                        <View style={[styles().alignCenter, styles().mt10, styles().ph10]}>
                            <Text style={[styles().fs14, styles().lh20, styles().fw700, {color:currentTheme.c171C26}]}>Immaculate</Text>
                            <Text style={[styles().fs12, styles().lh18, styles().mb10, styles().mt5, styles().textCenter, styles().lh18, styles().fw400, {color:currentTheme.c171C26}]}>A voice note on how great our God is and a testimony of His righteousness.</Text>
                            <Image source={require('../../assets/images/notes-player-img.png')} style={[styles().w100, styles().h35px]} resizeMode="cover" />
                        </View>
                    </View>
                </View>

                <View style={[styles().w47]}>
                    <View style={[styles().w100, styles().mb15, styles().pb20, styles().br20, styles().overflowH, {backgroundColor:currentTheme.themeBackground}]}>
                        <View style={[styles().wh30px, styles().mt15, styles().mr15, styles().alignSelfEnd, styles().alignCenter, styles().justifyCenter, styles().bw1, styles().br5, {backgroundColor:currentTheme.lightishGrey, borderColor:currentTheme.white}]}>
                            <FontAwesome5 name="clock" size={16} color={currentTheme.white} />
                        </View>
                        <View style={[styles().alignCenter, styles().mt15, styles().ph10]}>
                            <Text style={[styles().fs14, styles().lh20, styles().fw700, {color:currentTheme.white}]}>SERMON</Text>
                            <Text style={[styles().fs12, styles().mb10, styles().mt10, styles().textCenter, styles().lh18, styles().fw400, {color:currentTheme.white90}]}>What a Marvelous {`\n`} God we serve.</Text>
                            <Text style={[styles().fs30, styles().fw400, {color:currentTheme.white}]}>13:30</Text>
                            <Text style={[styles().fs12, styles().fw400, {color:currentTheme.white90}]}>August 28</Text>
                        </View>
                    </View>

                    <View style={[styles().w100,  styles().pb10, styles().br20, styles().overflowH, {backgroundColor:currentTheme.c171C26}]}>
                        <View style={[styles().ph10, styles().mt10]}>
                            <Text style={[styles().fs16, styles().mb5, styles().lh20, styles().fw400, {color:currentTheme.white}]}>Spiritually Abusive Leader</Text>
                            <Text style={[styles().fs11, styles().mb5, styles().lh18, styles().fw400, {color:currentTheme.white}]}>I’m grateful for God’s emphasis on both sound doctrine and sound living for Christian leaders.</Text>
                            <Text style={[styles().fs11, styles().mb5, styles().lh18, styles().fw400, {color:currentTheme.white}]}>1. That’s why Paul commanded Timothy to watch his life.</Text>
                            <Text style={[styles().fs11, styles().mb5, styles().lh18, styles().fw400, {color:currentTheme.white}]}>2. Christian leader needs to live a holy life to back up the message of God’s holy Word.</Text>
                        </View> 
                    </View>
                </View>
            </View> }

            {tab === false && 
            <View style={[styles().flex]}>
                <FlatList
                    data={NotesTabList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[styles().pv10, styles().mb20, {width:width}]}>
                                {item.image && <View style={[styles().h300px, styles().w100]}>
                                    <Image source={item.image} style={styles().wh100} resizeMode='cover' />
                                </View> }
                                <Text style={[styles().fs30, styles().mb10, styles().fw600, {color:currentTheme.white}]}>The glory of the King (1 Kings 10:1)</Text>
                                <Text style={[styles().fs14, styles().lh20, styles().fw400, {color:currentTheme.SliderDots}]}>Solomon was the most glorious king Israel had ever had. But Solomon knew that David would have a greater Son than he, whose throne would last forever. Roll the story forward a</Text>
                                <View style={[styles().flexRow, styles().mt15, styles().flexWrap, styles().alignCenter, styles().pb15, styles().bbw1, {borderBottomColor:currentTheme.SliderDots}]}>
                                    <Text style={[styles().pv10, styles().mr10, styles().ph25, styles().br50, {backgroundColor:currentTheme.c171C26, color:currentTheme.white}]}>Day 3</Text>
                                    <Text style={[styles().pv10, styles().mr10, styles().ph25, styles().br50, {backgroundColor:currentTheme.c171C26, color:currentTheme.white}]}>22-Mar-23</Text>
                                    <Text style={[styles().pv10, styles().ph25, styles().br50, {backgroundColor:currentTheme.c171C26, color:currentTheme.white}]}>Monday</Text>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>}
            
            
    
    </Layout>
           
  );
}