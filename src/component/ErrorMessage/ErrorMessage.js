import Toast from "react-native-toast-message";


export default function ErrorMessage(error){
    try {
        return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: error.graphQLErrors[0].message
        });
        }
        catch (e) {
            return Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Invaild Request'
        });
    }
}