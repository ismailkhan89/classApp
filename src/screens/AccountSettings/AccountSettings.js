import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, FlatList, KeyboardAvoidingView, Image, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import { theme } from '../../context/ThemeContext/ThemeColor'
import Layout from '../../component/Layout/Layout';
import TextField from '../../component/TextField/TextField';
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
import UserContext from '../../context/User/User';
import ThemeButton from '../../component/ThemeButton/ThemeButton';
import CameraComponent from '../../component/CameraComponent/CameraComponent';
import { useUserUpdate } from '../../apollo/mutations';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import Spinner from '../../component/Spinner/Spinner';
import Toast from 'react-native-toast-message';
import { uploadImageToCloudinary } from '../../component/CameraComponent/CloudUpload';
const {width, height} = Dimensions.get('window');
import i18n from 'i18n-js';

export default function AccountSettings(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const user = useContext(UserContext);

    console.log('useruser',user)

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

    const [fname, setFname] = useState('')
    const [fnameError, setFnameError] = useState(false)

    const [lname, setLname] = useState('')
    const [lnameError, setLnameError] = useState(false)

    const [userName, setUsername] = useState('')
    const [userNameError, setUserNameError] = useState(false)

    const [profilePic , setProfilePic ] = useState('')
    const [profilePicErr , setProfilePicErr ] = useState(null)
    const [profilePicLoading , setProfilePicLoading ] = useState(false)

    const [loading , setLoading ] = useState(false)


    useEffect(() => {
        if(user?._id){
            setFname(user.name)
            setLname(user.last_name)
            setUsername(user.username)
            setProfilePic(user.picture ? user.picture : '')
        }
    },[user])


    const { mutate  } = useUserUpdate({
        onCompleted : () => {
            user.refetch();
            setLoading(false)
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Profile update successfully'
            });
            props.navigation.goBack()
        },
        onError : (e) => {
            ErrorMessage(e)
            setLoading(false)
        }
    })
    
    function validate(){
        let status = true
        if(fname === ""){
            setFnameError(true)
            status = false
        }
        if(lname === ""){
            setLnameError(true)
            status = false
        }
        if(userName === ""){
            setUserNameError(true)
            status = false
        }
        return status
    }

    return (
        <Layout navigation={props.navigation} LeftIcon={true} PageTitle={i18n.t('Account Settings')} withoutScroll={true} ContentContainer={styles().ph0}>

            {loading && <Spinner />}
            <View style={[styles().flex, styles().mt20, styles().ph20]}>
                <View style={[styles().alignCenter, styles().alignSelfCenter, styles().justifyCenter]}>
                    <View style={[styles().wh100px, styles().alignSelfCenter, styles().mt10, styles().br50, styles().overflowH, styles().bw1, {borderColor:currentTheme.SliderDots}]}>
                        <Image source={
                            profilePic ? { uri : profilePic } : 
                            require('../../assets/images/logo.png')} style={styles().wh100} resizeMode="cover" />
                    </View>
                    <View style={[styles().wh30px, styles().posAbs, styles().br15, styles().justifyCenter, styles().alignCenter, styles().top35, {backgroundColor:currentTheme.white, right:-10}]}>
                        <CameraComponent 
                        loading={(e) => setProfilePicLoading(e)} 
                        update={(e) =>  {
                            setProfilePic(e)
                            setProfilePicErr(null)
                        }}>
                            <Ionicons name="pencil" size={16} color={currentTheme.themeColor} />
                        </CameraComponent>
                    </View>

                    <TouchableOpacity 
                    onPress={() => props.navigation.push('ChangePassword')}
                    style={[styles().mt20]}>
                        <Text style={[styles().fs14, styles().fw400, {color:currentTheme.themeColor}]}>{i18n.t('Change Pasword')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles().mt35, styles().pt35, ]} />

                <View>
                    <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>
                        <View style={[styles().mb5, styles().mr5, styles().w40]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.blackish}]}>{i18n.t('First Name')}</Text>
                            </View>
                        </View>
                        <View style={[styles().mb5,  styles().flex]}>
                            <View style={[styles().h50px, 
                                styles().justifyCenter, 
                                styles().br10, 
                                styles().overflowH,
                                 {backgroundColor:  currentTheme.BBBBBB,}]}>
                            <TextField 
                                SetEditinfo={(e)=> {
                                    setFnameError(false)
                                    setFname(e)
                                    }
                                } 
                                value={fname} 
                                stylesInput={{
                                    paddingTop : 0
                                }}
                                StyleError={{borderColor: fnameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                                PlaceholderInfo={''} 
                            />
                            </View>
                                {/* <Text style={[styles().fs13, styles().fw400, {color: currentTheme.black}]}>{user?.name ? user?.name : ''}</Text> */}
                        </View>
                    </View>
                    <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>
                        <View style={[styles().mb5, styles().mr5, styles().w40]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.blackish}]}>{i18n.t('Last Name')}</Text>
                            </View>
                        </View>
                        <View style={[styles().mb5,  styles().flex]}>
                        <View style={[styles().h50px, 
                                styles().justifyCenter, 
                                styles().br10, 
                                styles().overflowH,
                                 {backgroundColor:  currentTheme.BBBBBB,}]}>
                            <TextField 
                                SetEditinfo={(e)=> {
                                    setLnameError(false)
                                    setLname(e)
                                    }
                                } 
                                value={lname} 
                                stylesInput={{
                                    paddingTop : 0
                                }}
                                StyleError={{borderColor: lnameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                                PlaceholderInfo={''} 
                            />
                            </View>
                        </View>
                    </View>
                    <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>
                        <View style={[styles().mb5, styles().mr5, styles().w40]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.blackish}]}>{i18n.t('Username')}</Text>
                            </View>
                        </View>
                        <View style={[styles().mb5,  styles().flex]}>
                        <View style={[styles().h50px, 
                                styles().justifyCenter, 
                                styles().br10, 
                                styles().overflowH,
                                 {backgroundColor:  currentTheme.BBBBBB,}]}>
                            <TextField 
                                SetEditinfo={(e)=> {
                                    setUserNameError(false)
                                    setUsername(e)
                                    }
                                } 
                                value={userName} 
                                stylesInput={{
                                    paddingTop : 0
                                }}
                                StyleError={{borderColor: userNameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                                PlaceholderInfo={''} 
                            />
                            </View>
                        </View>
                    </View>
                    <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>
                        <View style={[styles().mb5, styles().mr5, styles().w40]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.blackish}]}>{i18n.t('Email')}</Text>
                            </View>
                        </View>
                        <View style={[styles().mb5,  styles().flex]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.black}]}>{user?.email ? user?.email : ''}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>
                        <View style={[styles().mb5, styles().mr5, styles().w40]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.blackish}]}>{i18n.t('Organization')}</Text>
                            </View>
                        </View>
                        <View style={[styles().mb5,  styles().flex]}>
                            <View style={[styles().h50px, styles().justifyCenter, styles().br10, styles().ph20, {backgroundColor:  currentTheme.BBBBBB}]}>
                                <Text style={[styles().fs13, styles().fw400, {color: currentTheme.black}]}>The Potter's House</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={[styles().mt15,  styles().flex]}>
                        <ThemeButton
                            Title={"Update"}
                            Style={styles().br5}
                            onPress={async () => {
                                setLoading(true)
                                if(validate()){
                                    mutate({
                                        variables : {
                                            name : fname,
                                            lastname : lname,
                                            username : userName,
                                            picture : (profilePic && profilePic !== user?.picture) ? await uploadImageToCloudinary(profilePic) : profilePic,
                                        }
                                    })
                                }
                                else {
                                    setLoading(false)
                                }
                            }}
                        />
                        </View>
                    </View>
              </View>
        </Layout>
           
  );
}