import React , {useContext ,useRef , useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AppState } from 'react-native'
import { useEffect } from 'react';
import { AuthContext } from '../Auth/auth';
import getEnvVars from '../../../environment'
import { useProfile } from '../../apollo/queries';

const { SERVER_URL } = getEnvVars()

const UserContext = React.createContext({});

export const UserProvider = props => {

    const { token } = useContext(AuthContext)

    const { data,loading,error,refetch } = useProfile({
        onCompleted : () => { },
        onError : () => {}
    })

    useEffect(() => {
        refetch()
    },[token])
    //   useEffect(() => {
    //     if(data?.profile && data?.profile?._id){
    //       updateNotificationToken()
    //     }
    //   },[data?.profile && data?.profile?._id])

    //   async function updateNotificationToken(){
    //     let token = "";
  
    //     const authStatus = await messaging().hasPermission();
    //     const enabled =
    //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    //     if (!enabled) {
    //       authStatus = await messaging().requestPermission();
    //     }
  
    //     try {
    //       token = await messaging().getToken();
    //       if(token && token !== data?.profile?.notification){
    //         mutate({
    //           variables : {
    //             notificationToken : token
    //           }
    //         })
    //       }
    //     } catch (error) {
  
    //     }
    //   }


    // console.log('data>>>>>',data)
    const user =  error || !data?._id || !data ? { isLoggedIn: false } : {...data,refetch,loading}
   

    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    );
};
export const UserConsumer = UserContext.Consumer;
export default UserContext;