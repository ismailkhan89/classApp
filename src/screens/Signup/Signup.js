import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, ActivityIndicator, Keyboard, } from 'react-native';
import styles from '../styles';
import ThemeContext from '../../context/ThemeContext/ThemeContext'
// import TextField from '../../component/FloatTextField/FloatTextField';
import TextField from '../../component/TextField/TextField';
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
  import { useMutation } from '@apollo/client';
  import { CREATE_USER } from '../../apollo/server';
  import Toast from 'react-native-toast-message';
import {  useCreateUser } from '../../apollo/mutations';
import Spinner from '../../component/Spinner/Spinner';
import { useGetUsers } from '../../apollo/queries';
import ErrorMessage from '../../component/ErrorMessage/ErrorMessage';
import i18n from 'i18n-js';

const { height, width } = Dimensions.get('screen')

export default function PersonalInfo(props) {
    const themeContext = useContext(ThemeContext)
    const currentTheme = theme[themeContext.ThemeValue]

    const [fname, setFname] = useState('')
    const [fnameError, setFnameError] = useState(false)

    const [lname, setLname] = useState('')
    const [lnameError, setLnameError] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [userName, setUsername] = useState('')
    const [userNameError, setUserNameError] = useState(false)

    const [organization, setOrganization] = useState([])
    const [organizationError, setOrganizationError] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const [confirmPass, setConfirmPass] = useState('')
    const [confirmPassError, setConfirmPassError] = useState(false)

    const [Nationality, SetNationality] = useState([])

    const [loading , setLoading] = useState(false)

    const { mutate } = useCreateUser({
        onCompleted : onCompleted,
        onError : onError
    });

    const { data, loading : orgLoading  } = useGetUsers({
        onCompleted : () => {},
        onError : () => {}
    })

    async function onCompleted(data){
        try {
           
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Congratulations, you have successfully signed up 👋'
            });
            props.navigation.goBack();
        //   return props.navigation.navigate('SignUpEmailVerify',{email : email})
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


    function validate() {
        let status = true

        if(fname === ""){
            setFnameError(true)
            status = false
        }
        if(lname === ""){
            setLnameError(true)
            status = false
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if(email === ""){
            setEmailError(true)
            status = false
        }
        else if (reg.test(email) === false) {
            setEmailError(true)
            status = false
        }
        if(userName === ""){
            setUserNameError(true)
            status = false
        }
        if(password === ""){
            setPasswordError(true)
            status = false
        }
        if(confirmPass === ""){
            setConfirmPassError(true)
            status = false
        }
        if(confirmPass !== password){
            setConfirmPassError(true)
            status = false
        }
        return status
    }

    const [passEye, setpassEye] = useState("eye-slash");
    function onChangeIconConfirm() {
        if (passEye === "eye") {
            setpassEye("eye-slash");
        } else {
            setpassEye("eye");
        }
    }

  return (
    
        <View style={[styles().flex, styles().ph30, styles().justifyCenter, {backgroundColor:currentTheme.black}]}>

        {loading && <Spinner />}

         <SafeAreaView style={[styles().flex, {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, 
    }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS ==='ios' ? 50 : 50}
                
                style={styles().flex}
            >
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()} style={[styles().wh40px, styles().alignCenter, styles().justifyCenter, styles().mt30, styles().br20, {backgroundColor:currentTheme.white30}]}>
                    <FontAwesome5 name="arrow-left" size={20} color={currentTheme.white} />
                </TouchableOpacity>
                <View style={[styles().flex, styles().justifyCenter]}>
                
                    <View style={[styles().wh100px, styles().br40, styles().overflowH, styles().alignSelfCenter, styles().mb50]}>
                        <Image source={require('../../assets/images/logo.png')} style={styles().wh100} />
                    </View>

                <View style={[styles().ph35, styles().alignCenter, styles().mb35]}>
                    <Text style={[styles().fs14, styles().fontRegular, styles().textCenter, {color:currentTheme.BBBBBB}]}>{i18n.t("Please enter the information below to get started with Resonate")}</Text>
                </View>

                <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>

                    <View style={[styles().mb5, styles().mr5, styles().flex]}>
                        <TextField 
                            SetEditinfo={(e)=> {
                                setFnameError(false)
                                setFname(e)
                                }
                            } 
                            value={fname} 
                            StyleError={{borderColor: fnameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                            PlaceholderInfo={i18n.t("First Name")} 
                        />
                    </View>

                    <View style={[styles().mb5,  styles().flex]}>
                        <TextField 
                            SetEditinfo={(e)=> {
                                setLnameError(false)
                                setLname(e)
                                }
                            } 
                            value={lname} 
                            StyleError={{borderColor: lnameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                            PlaceholderInfo={i18n.t('Last Name')} 
                        />
                    </View>
                </View>

                <View style={[styles().flexRow, styles().justifyBetween, styles().alignCenter]}>

                    <View style={[styles().mb5, styles().mr5, styles().flex]}>
                        <TextField 
                            SetEditinfo={(e)=> {
                                setEmailError(false)
                                setEmail(e)
                                }
                            } 
                            keyboardType={'email'}
                            value={email} 
                            StyleError={{borderColor: emailError ? currentTheme.red : 'transparent', borderWidth: 1}}
                            PlaceholderInfo={i18n.t('Email Address')} 
                        />
                    </View>
                   
                    <View style={[styles().mb5, styles().flex]}>
                        <TextField 
                            SetEditinfo={(e)=> {
                                setUserNameError(false)
                                setUsername(e)
                                }
                            } 
                            value={userName} 
                            StyleError={{borderColor: userNameError ? currentTheme.red : 'transparent', borderWidth: 1}}
                            PlaceholderInfo={i18n.t('Username')} 
                        />
                    </View>
                </View>
                
                <View style={styles().mb5}>
                    <Multiselect 
                        // HeadingText={'Organization'} 
                        ListItems={data} 
                        SelectText={i18n.t("Select Organization")} 
                        value={organization} 
                        setValue={setOrganization}/>
                </View>

                <View style={[styles().mb5]}>
                    <TextField 
                        SetEditinfo={(e)=> {
                            setPasswordError(false)
                            setPassword(e)
                            }
                        } 
                        value={password} 
                        StyleError={{borderColor: passwordError ? currentTheme.red : 'transparent', borderWidth: 1}}
                        PlaceholderInfo={i18n.t('Password')} 
                        eye={true}
                    />
                </View>
               
                <View style={[styles().mb5]}>
                    <TextField 
                        SetEditinfo={(e)=> {
                            setConfirmPassError(false)
                            setConfirmPass(e)
                            }
                        } 
                        value={confirmPass} 
                        StyleError={{borderColor: confirmPassError ? currentTheme.red : 'transparent', borderWidth: 1}}
                        PlaceholderInfo={i18n.t('Confirm Password')} 
                        eye={true}
                    />
                </View>


                <View style={styles().mt35}>
                 <ThemeButton
                    Title={"Continue"}
                    Style={styles().br5}
                    onPress={() => {
                        Keyboard.dismiss()
                        setLoading(true)
                        if(validate()){
                            mutate({
                                variables : {
                                    name: fname,
                                    username: userName,
                                    lastname: lname,
                                    password: password,
                                    email: email,
                                    type: "individual",
                                    reqUser : organization.length > 0 ? organization[0] : null
                                }},
                            );
                        }
                        else{
                            setLoading(false)
                        }
                       
                    }}
                />  

                <View style={[styles().flexRow, styles().justifyCenter, styles().alignCenter, styles().mt35]}>
                    <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.white}]}>{i18n.t("Already have an account?")}</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                        <Text style={[styles().fs14, styles().fontRegular, {color:currentTheme.themeBackground}]}> {i18n.t("Sign In")}</Text>
                    </TouchableOpacity>
                </View>
                
            </View>

            <View style={[styles().alignCenter, styles().mb20, styles().mt70]}>
                    <Text style={[styles().fs30, styles().textUpper, styles().fontBold, {color:currentTheme.white}]}>Resonate.</Text>
                    <Text style={[styles().fs14, styles().textUpper, {color:currentTheme.white}]}>By Perspectives Worldwide</Text>
                </View>
            </View>
            </ScrollView>
            
            
        </KeyboardAvoidingView>
    
</SafeAreaView>
</View>
  );
}