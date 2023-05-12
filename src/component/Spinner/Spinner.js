import { ActivityIndicator, View ,Dimensions } from "react-native";

const { height,width } = Dimensions.get('screen')
export default function Spinner(){
    return <View style={[{position :'absolute',
    justifyContent :'center',
    alignItems :'center',
    flex : 1,
    zIndex :2,
    height :height,
    width :width,
    backgroundColor :'rgba(0,0,0,0.7)'}]}>
<View style={{ backgroundColor :'rgba(255,255,255,0.6)' ,padding :15,
borderRadius : 10 }}>
    <ActivityIndicator color={'black'} size={'large'} />
</View>
</View>
}