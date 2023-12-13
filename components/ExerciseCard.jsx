import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Card, Image, Text, View, Colors, Hint} from 'react-native-ui-lib';
import * as SecureStore from 'expo-secure-store';
import {useEffect, useState} from "react";


export default function ExerciseCard({image,name,info,data,navigation}) {
const [isVisible,setVisible] = useState(false);
const buttonHandler = async ()=>{
    navigation.navigate("Exercise",{
        data:data
    })
}


    return (
            <>
            <Card
                style={styles.cardContainer}
                enableShadow
                borderRadius={8}
                height={100}
                row
            >
                <View style={styles.imageBox}>
                    <Image
                        source={image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.contentBox} padding-16>
                    <View flex row style={styles.centeredContent}>
                        <Text>{name}</Text>
                        <TouchableOpacity
                            style={{
                                width:20,
                                height:20,
                                borderRadius: 10,
                                backgroundColor: Colors.violet30,
                                marginLeft:5
                            }}
                            onPress={()=>setVisible(true)}

                        ><Hint visible={isVisible} message={info} messageStyle={{color:Colors.$textNeutralHeavy}} color={Colors.$backgroundPrimaryMedium} onBackgroundPress={() => setVisible(false)}>
                            <Text center style={{ fontSize: 12, color: 'white' }}>{"?"}</Text>
                        </Hint>
                        </TouchableOpacity>
                    </View>
                    <Button label={"Начать"} onPress={buttonHandler} />
                </View>
            </Card>



        </>

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
