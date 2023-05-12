import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, TextInput, } from 'react-native';
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
  import moment from 'moment'
  import TextField from '../../component/FloatTextField/FloatTextField';
  import CalendarStrip from 'react-native-calendar-strip';
const {width, height} = Dimensions.get('window');

export default function ReadNotes(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [NoteSave,setNoteSave] = useState(false)
    const [NoteText, setNoteText] = useState('')
    const [NoteTextError, setNoteTextError] = useState(false)

    const [scripture, setScripture] = useState(false)

    const [bookDate ,setBookDate ] = useState(moment())

    function ScriptureModal(){
        return(
            <Modal
                animationType='fade'
                transparent={true}
                visible={scripture}
                onRequestClose={()=> {
                    setScripture(!scripture)
                }}
            >
                <TouchableOpacity activeOpacity={1} onPress={()=> setScripture(!scripture)} style={[styles().flex, styles().posAbs, styles().left0, styles().right0, styles().top0,styles().bottom0, {backgroundColor:currentTheme.blackish}]} />
                <View style={[styles().alignCenter, styles().justifyCenter, styles().flex]}>
                <View style={[styles().br20, styles().pv10, styles().ph15, {backgroundColor:currentTheme.white, width:width * 0.8, height:height * 0.5}]}>
                    <Text style={[styles().fs15, styles().fontRegular, {color:currentTheme.blackish}]}>SCRIPTURE</Text>
                    <Text style={[styles().fs22, styles().mb10, styles().fontSemiBold, {color:currentTheme.themeBackground}]}>John 5:19 NIV</Text>
                    <Text style={[styles().fs15, styles().fontRegular, {color:currentTheme.black}]}>Jesus gave them this answer: “Very truly I tell you, the Son can do nothing by himself; he can do only what he sees his Father doing, because whatever the Father does the Son also does.</Text>
                </View>
                </View>
            </Modal>
        )
    }
    
    return (
        <Layout navigation={props.navigation} withoutScroll={true} LeftIcon={true}>
            <CalendarStrip
                            scrollable
                            selectedDate={bookDate}
                            onDateSelected={(datE) => {
                                setBookDate(datE)
                            }}
                            style={[styles().boxpeshadow, styles().br10, {backgroundColor:currentTheme.c171C26, height:130, marginTop:15, marginBottom:20 }]}
                            // style={{height:130, borderWidth:2}}
                            calendarColor={'transparent'}
                            // calendarHeaderStyle={{color: 'black'}}
                            // dateNumberStyle={{color: 'white'}}
                            // dateNameStyle={{color: 'white'}}
                            iconContainer={{flex: 0.05 }}
                            // dayContainerStyle={{backgroundColor:'#F0F3F7', width:40, height:40, padding:0}}
                            // iconContainer={{flex:0}}
                            iconStyle={{position:'absolute', top:-65, tintColor:currentTheme.c171C26}}
                            highlightDateNameStyle={{fontSize:14, color:currentTheme.themeBackground}}
                            dateNameStyle={{ fontSize:14, color:currentTheme.white,}}
                            dateNumberStyle={{backgroundColor:currentTheme.EAEAEA, color:currentTheme.white, marginTop:10, borderRadius:50, width:35, height:35, paddingVertical:5}}
                            highlightDateNumberStyle={{backgroundColor:currentTheme.themeBackground, borderRadius:50, color:currentTheme.white, marginTop:10, width:35, height:35, paddingVertical:5}}
                            dayComponentHeight={70}
                            maxDayComponentSize={50}
                            minDayComponentSize={50}
                            calendarHeaderContainerStyle={{height:40, marginBottom:30, paddingTop:10, borderRadius:10, borderBottomLeftRadius:0, borderBottomRightRadius:0, backgroundColor:currentTheme.c171C26, color:currentTheme.white}}
                            calendarHeaderStyle={{fontSize:16, color:currentTheme.white}}
                            // highlightDateContainerStyle={{backgroundColor :currentTheme.themeBackground}}
                            innerStyle={{ height:200 }}
                            
                            
                        />
            <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={[{flexGrow:1}]}
                    style={{flex:1}}
                    keyboardShouldPersistTaps='handled'>
            <View>
                <View style={[styles().mb10]}>
                    <Text style={[styles().fs13, styles().mb5, styles().fontRegular, {color:currentTheme.whitish}]}>8 min read | Spiritual Growth</Text>
                    <Text style={[styles().fs24, styles().fontBold, {color:currentTheme.white}]}>Why Is It Important To Hear God?</Text>
                </View>
                <View style={[styles().flexRow, styles().mb10, styles().alignCenter]}>
                    <Text style={[styles().fs15, styles().fontRegular, {color:currentTheme.SliderDots}]}>Bible Verse:</Text>
                    <TouchableOpacity onPress={()=> setScripture(!scripture)} style={[ styles().ml5]}>
                        <Text style={[styles().fs15, styles().fontBold, {color:currentTheme.themeBackground}]}>John 5:19</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>setNoteSave(!NoteSave)} style={[styles().w100, styles().mb10, styles().h170px, styles().overflowH, styles().br10]}>
                    <Image source={require('../../assets/images/read-note-img.jpg')} style={styles().wh100} resizeMode="cover" />
                </TouchableOpacity>
                <View style={[styles().mb35]}>
                    <Text style={[styles().fs15, styles().lh26, styles().mb15, styles().fontRegular, {color:currentTheme.white}]}>When you hear from God you are listening to him. Now I know that is a very “duh” explanation but hear me out. Oftentimes as Christians both new and old, we go through things that leave us wondering if God hears our prayers. It can be hard to distinguish his voice from the noise around us and we question whether He is listening.</Text>
                    <Text style={[styles().fs15, styles().lh26, styles().mb15, styles().fontRegular, {color:currentTheme.white}]}>When you hear from God you are listening to him. Now I know that is a very “duh” explanation but hear me out. Oftentimes as Christians both new and old, we go through things that leave us wondering if God hears our prayers. It can be hard to distinguish his voice from the noise around us and we question whether He is listening.</Text>
                    <Text style={[styles().fs15, styles().lh26, styles().mb15, styles().fontRegular, {color:currentTheme.white}]}>When you hear from God you are listening to him. Now I know that is a very “duh” explanation but hear me out. Oftentimes as Christians both new and old, we go through things that leave us wondering if God hears our prayers. It can be hard to distinguish his voice from the noise around us and we question whether He is listening.</Text>
                    <Text style={[styles().fs15, styles().lh26, styles().mb15, styles().fontRegular, {color:currentTheme.white}]}>When you hear from God you are listening to him. Now I know that is a very “duh” explanation but hear me out. Oftentimes as Christians both new and old, we go through things that leave us wondering if God hears our prayers. It can be hard to distinguish his voice from the noise around us and we question whether He is listening.</Text>
                </View>
            </View>

            </ScrollView>

            
            {NoteSave ? <View style={[styles().posAbs, styles().bottom0, {width:width}]}>
                <View style={[styles().w100, styles().pv10, styles().ph15, {backgroundColor:currentTheme.E8E5E5}]}>
                    <Text style={[styles().fs15, styles().fontSemiBold, {color:currentTheme.blackish}]}>Enter your note</Text>
                    
                    <View style={[styles().mb5, styles().mt10,]}>
                        <TextField
                        keyboardType="default"
                        value={NoteText}
                        // label="Email/Phone"
                        label="Enter Your Note"
                        errorText={NoteTextError}
                        autoCapitalize="none"
                        style
                        onChangeText={(text) => {
                            setNoteTextError(false);
                            setNoteText(text);
                            }}
                        stylesInput={{backgroundColor:currentTheme.white}}
                        />
                    </View>
                    
                    <TouchableOpacity style={[styles().alignEnd]} onPress={()=>setNoteSave(false)}>
                        <Text style={[styles().fs18, styles().fontSemiBold, styles().textUpper, {color:currentTheme.themeBackground}]}>Save Note</Text>
                    </TouchableOpacity>
                    
                </View>
            </View> : null }

            <ScriptureModal />
            
    
    </Layout>
           
  );
}