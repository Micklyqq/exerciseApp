import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, Colors, Button, ProgressBar } from 'react-native-ui-lib';
export default function ExerciseScreen({navigation,route}) {
const {data} = route.params
    const [page,setPage] = useState(0);
    const progressStep = 100/data.length
    const [progressData,setProgressData] = useState(progressStep)
    return (
        <View flex>


            {/* <View style={styles.counter}>
                <Text>{`${page+1}/${data.length}`}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={startTraining}
                    style={styles.image}
                    resizeMode="cover"
                />

                <Text style={styles.exerciseHeader}>Вводная гимнастика</Text>
                

            </View> */}

             
             
                <Text style={styles.counterText}>{`${page+1}/${data.length}`}</Text>
                
            <ProgressBar progress={progressData} progressColor={Colors.violet30} style={{width:"95%",alignSelf:"center"}} />

            <View height={1} bg-violet30 marginV-16 style={{width:"95%",alignSelf:"center"}}/>


            <View style={styles.buttonsView}>

                {(page!==0)&&(
                    <Button
                        label={'<---'}
                        backgroundColor={Colors.violet30}
                        onPress={() => {
                            setPage(page-1);
                            setProgressData(progressData-progressStep);
                        }}
                        fullWidth={true}
                        style={styles.controlButtons}
                    />
                )}

                {(page===0)&&(
                    <Button
                        label={'<---'}
                        backgroundColor={Colors.violet30}
                        onPress={() => setPage(page)}
                        fullWidth={true}
                        style={styles.controlButtons}
                    />
                )}
                <View style={{width:'10%'}}>

                </View>
                {(page+1!==data.length)&&(
                    <Button
                        label={'--->'}
                        backgroundColor={Colors.violet30}
                        onPress={() => {
                            setPage(page+1);
                            setProgressData(progressData+progressStep)
                        }}
                        fullWidth={true}
                        style={styles.controlButtons}
                    />
                )}
                {(page+1===data.length)&&(
                    <Button
                        label={'Завершить'}
                        backgroundColor={Colors.violet30}
                        onPress={() => navigation.navigate("ChooseExercise")}
                        fullWidth={true}
                        style={styles.controlButtons}
                    />
                )}


            </View>

            <Text center text50 $textPrimary style={{marginTop:"5%"}}>{data[page].dose}</Text>


            <Text text30 center marginV-20 $textPrimary>{'Описание'}</Text>

            <View>
                <View style={styles.infoBlock}>
                    <ScrollView>
                        <Text text80 center style={styles.textDesign}>{data[page].content+data[page].recomendation}</Text>
                    </ScrollView>
                </View>
            </View>



            {/*{(page+1===data.length)&&(*/}
            {/*    <Button*/}
            {/*        label={'Завершить тренировку'}*/}
            {/*        backgroundColor={Colors.violet30}*/}
            {/*        onPress={() => navigation.navigate("ChooseExercise")}*/}
            {/*        style={styles.buttonContainer}*/}
            {/*    />*/}
            {/*)}*/}
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
        height:'60%',
        alignSelf:'center'
    },
    textDesign:{
        color:Colors.$textDefaultLight
    },
    imageContainer: {
        width: '100%', // Ширина блока
        alignItems: 'center',
        marginTop:20,
        height:"20%"
    },
    image: {
        width: '100%', // Ширина изображения внутри блока
        alignSelf: 'center', // Центрирование изображения
        height:'50%'
    },
    buttonsView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        width:"90%",
        alignSelf:'center',
        borderRadius:15
    },
    controlButtons:{
        backgroundColor: Colors.violet30,
        color:Colors.$textDefaultLight,
        flex:1,
        borderRadius:20
    },
    buttonsText:{
        color:Colors.$textDefaultLight
    }
    ,
    // counter:{
    //     marginRight:20, 
    // },
    counterText:{
        fontSize:30,
        color:Colors.violet30,
        alignSelf:'center',
        marginTop:'30%'
    },
    exerciseHeader:{
        fontSize:20,
        color: Colors.violet30,
        marginTop:50,
        marginBottom:50
    }
});
