import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, Keyboard, SafeAreaView, useColorScheme, ScrollView, Dimensions, StatusBar, Platform, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
import TextField from '../../component/FloatTextField/FloatTextField';
import { theme } from '../../context/ThemeContext/ThemeColor'
import ThemeButton from '../../component/ThemeButton/ThemeButton';
import Multiselect from '../../component/Multiselect/Multiselect';
import {
    Ionicons,
    Foundation,
    FontAwesome5,
    Feather,
    Octicons,
    AntDesign,
    FontAwesome,
  } from "@expo/vector-icons";
import { useLoginUser } from '../../apollo/mutations';
import { CommonActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Spinner from '../../component/Spinner/Spinner';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from '../../context/Auth/auth';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import i18n from 'i18n-js';

  const {width} = Dimensions.get('window')
  const oval1Width = width * 0.5, oval2Width = width * 0.7;


export default function Login(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]
    const colorScheme = useColorScheme();

    const { setTokenAsync } = useContext(AuthContext)

    const [UserName, SetUserName] = useState('');
    const [UserError, setUserError] = useState(false)

    const [Password, SetPassword] = useState('')
    const [PassError, setPassError] = useState(false)

    const [Organization, SetOrganization] = useState('')
    const [OrganizationError, setOrganizationError] = useState(false)

    const [loading , setLoading] = useState(false)

    const [ConfirmiconEye, setConfirmIconEye] = useState("eye-slash");
    function onChangeIconConfirm() {
        if (ConfirmiconEye === "eye") {
        setConfirmIconEye("eye-slash");
        } else {
        setConfirmIconEye("eye");
        }
    }

    const { mutate } = useLoginUser({
        onCompleted : onCompleted,
        onError : onError
    });

    async function onCompleted(data){
        try {
            console.log('ider ao')

            await AsyncStorage.setItem('token',data.login.token)
            setTokenAsync(data.login.token)

            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Welcome to Resonate'
            });
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{name: 'noDrawer'}],
                })
            );
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }
  
    function onError(error){
        ErrorMessage(error)
        setLoading(false)
    }

    function validate(){
        let status = true
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if(UserName === ""){
            setUserError(true)
            status = false
        }
        else if (reg.test(UserName) === false) {
            setUserError(true)
            status = false
        }
        if(Password === ""){
            setPassError(true)
            status = false
        }
        return status
    }



    const [Nationality, SetNationality] = useState([])

    const NationalityList = [
        {
            name: "The Potter's House",
            _id: 0
        },
        {
            name: "The Potter's House 2",
            _id: 1
        },
        ]

  return (
    <View style={[styles().flex, styles().ph30, styles().justifyCenter, {backgroundColor:currentTheme.black}]}>

        {loading && <Spinner />}
        <SafeAreaView style={[styles().flex, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
        <View style={[styles().flex]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS ==='ios' ? 50 : 30}
                style={styles().flex}
            >
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>
           
                <View style={[styles().wh100px, styles().mt70, styles().br40, styles().overflowH, styles().alignSelfCenter, styles().mb35]}>
                    <Image source={require('../../assets/images/logo.png')} style={styles().wh100} />
                </View>

                {/* <View style={[styles().alignCenter, styles().mb50]}>
                    <Text style={[styles().fs24, styles().fontBold, {color:currentTheme.A5A5A5}]}>Resonate</Text>
                    <Text style={[styles().fs14, {color:currentTheme.whitish}]}>By Perspectives Worldwide</Text>
                </View> */}

                <View style={styles().mb15}>
                    <TextField
                    keyboardType="default"
                    value={UserName}
                    // label="Email/Phone"
                    label={"Email Address"}
                    errorText={UserError}
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setUserError(false);
                        SetUserName(text);
                    }}
                    
                    />
                </View>
                <View style={styles().mb15}>
                    <TextField
                    keyboardType="default"
                    value={Password}
                    // label="Email/Phone"
                    label={"Password"}
                    errorText={PassError}
                    
                    autoCapitalize="none"
                    style
                    onChangeText={(text) => {
                        setPassError(false);
                        SetPassword(text);
                    }}
                    secureTextEntry={ConfirmiconEye === "eye" ? false : true}
                    childrenPassword={
                        <TouchableOpacity
                        onPress={onChangeIconConfirm.bind()}
                        style={[styles().passEye]}
                        >
                        <FontAwesome
                            name={ConfirmiconEye}
                            size={16}
                            color={currentTheme.black}
                        />
                        </TouchableOpacity>
                    }
                    />
                </View>
                

                {/* <View style={styles().mb15}>
                <Multiselect HeadingText={'Organization'} ListItems={NationalityList} SelectText={"The Potter's House"} value={Nationality} setValue={SetNationality}/>
                </View> */}

                <View style={styles().mt25}>
                    <ThemeButton
                        Title={"Login"}
                        Style={styles().br5}
                        onPress={() => {
                            setLoading(true)
                            if(validate()){
                                mutate({
                                    variables : {
                                        email : UserName,
                                        password : Password,
                                        type : 'default'
                                    }
                                })
                            }
                            else {
                                setLoading(false)
                            }
                        }}
                    />
                    <TouchableOpacity onPress={()=>props.navigation.navigate('ForgetPassword')} style={[styles().alignCenter, styles().mt20]}>
                        <Text style={[styles().fs12, styles().fontRegular, {color:currentTheme.themeBackground}]}>{i18n.t("Forgot Password")}</Text>
                    </TouchableOpacity>
                </View>

            <View style={[styles().flexRow, styles().justifyCenter, styles().alignCenter, styles().mt50]}>
                <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.white}]}>{i18n.t("Dont have an account?")} </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Signup')}>
                    <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.themeColor}]}>{i18n.t("Sign Up")}</Text>
                </TouchableOpacity>
            </View>

                
            </ScrollView>
            
            
        </KeyboardAvoidingView>
        <View style={[styles().alignCenter, styles().justifyEnd, styles().mb20]}>
            <Text style={[styles().fs30, styles().textUpper, styles().fontBold, {letterSpacing:2, color:currentTheme.white}]}>Resonate.</Text>
            <Text style={[styles().fs14, styles().fontSemiBold, styles().textUpper, { letterSpacing:1, color:currentTheme.whitish}]}>By Perspectives Worldwide</Text>
        </View>
    </View>
            
    
</SafeAreaView>
</View>
  );
}
