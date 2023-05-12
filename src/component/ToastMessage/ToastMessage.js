import Toast from "react-native-toast-message";

export default function ToastMessage({msg, header,description}) {
    return Toast.show({
        type: msg, 
        text1: header,
        text2: description
    });;
  }
  


