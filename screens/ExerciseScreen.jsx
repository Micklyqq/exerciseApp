import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Colors, Button } from 'react-native-ui-lib';
import pushup from "../assets/images/pushup.png"
export default function ExerciseScreen({navigation,route}) {
const {data} = route.params
    const [page,setPage] = useState(0);
    return (
        <View flex>
            <View style={styles.counter}>
                <Text>{`${page+1}/${data.length}`}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={pushup}
                    style={styles.image}
                    resizeMode="cover"
                />

            </View>

            <View height={1} bg-violet30 marginV-16 style={{width:"95%",alignSelf:"center"}}/>


            <Text center text50 $textPrimary>{data[page].dose}</Text>

            <Text text30 center marginV-20 $textPrimary>{'Описание'}</Text>

            <View>
                <View style={styles.infoBlock}>
                    <Text text80 center style={styles.textDesign}>{data[page].content+data[page].recomendation}</Text>
                </View>
            </View>

            {(page+1!==data.length)&&(
                <Button
                    label={'Следующее'}
                    backgroundColor={Colors.violet30}
                    onPress={() => setPage(page+1)}
                    fullWidth={true}
                    style={styles.buttonContainer}
                />
            )}

            {(page+1===data.length)&&(
                <Button
                    label={'Завершить тренировку'}
                    backgroundColor={Colors.violet30}
                    onPress={() => navigation.navigate("ChooseExercise")}
                    style={styles.buttonContainer}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    infoBlock: {
        backgroundColor: Colors.violet30,
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        width:"98%",
        alignSelf:'center'
    },
    textDesign:{
        color:Colors.$textDefaultLight
    },
    imageContainer: {
        width: '100%', // Ширина блока
        alignItems: 'center',
        marginTop:20
    },
    image: {
        width: '90%', // Ширина изображения внутри блока
        height: 200,
        alignSelf: 'center', // Центрирование изображения
    },
    buttonContainer:{
        width:"90%",
        alignSelf:'center',
        borderRadius:15
    },
    counter:{
        alignSelf:'flex-end',
        marginRight:20,
    }
});
