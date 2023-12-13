import {StyleSheet} from 'react-native';
import {Button, View} from 'react-native-ui-lib';

export default function SettingsScreen({navigation}) {

    return (
       <View style={{width:'90%',alignSelf:'center'}}>
        <Button marginT-200 borderRadius={10}  label="Сменить группу" onPress={()=>navigation.navigate("ChooseGroup")}/>
       </View>
    );
}
const styles = StyleSheet.create({
    mainBox:{

    },
    cardContainer: {
        marginVertical: 16,
    },
    centeredContent: {
        alignItems: 'center', // центрирование по вертикали
        justifyContent: 'center', // центрирование по горизонтали
        flex: 1,
    },
    image: {
        flex: 1,
        height: '100%',
        width: undefined,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    imageBox:{
        width:"40%"
    },
    buttonInfo:{
        marginTop:30
    },
    contentBox:{
        width:'60%'
    }
});
