import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Card, Chip, Image, Text, View, Colors, ActionBar} from 'react-native-ui-lib';
import * as SecureStore from 'expo-secure-store';
import {useEffect, useState} from "react";
import enterGym from "../assets/images/enterGym.jpg"
import gymPause from "../assets/images/gymPause.jpg"
import testGym from "../assets/diferrent/man-warm-up.png"
import testGym2 from "../assets/diferrent/girl-hands-up.png"
import testGym3 from "../assets/diferrent/leg-warm-up.png"
import testGym4 from "../assets/diferrent/warm-up.png"
import ExerciseCard from "../components/ExerciseCard";
import DatabaseInteraction from "../logic/DatabaseInteraction";
export default function ExerciseChooseScreen({navigation,route}) {
    const [group,setGroup] = useState(null);
    const [enterExercises,setEnterExercises] = useState("");
    const [pauseExercises,setPauseExercises] = useState("");
    const [minuteExercises,setMinuteExercises] = useState("");
    const [microPauseExercises,setMicroPauseExercises] = useState("");
    async function saveData(value) {
        try {
            await SecureStore.setItemAsync('group', value);
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
    async function getData() {
        try {
            const value = await SecureStore.getItemAsync('group');
            if (value !== null) {
                setGroup(value);
                console.log(group);
            } else {
                console.log('No data found with that key.');
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getData()
        };
        fetchData();

    }, [route.params?.groupChange]);
    useEffect(() => {

        const fetchData = async () => {
            if(group!==null) {
                await DatabaseInteraction.getEnterExercises(group).then((data) => setEnterExercises(data));
                await DatabaseInteraction.getPauseExercises(group).then((data) => setPauseExercises(data));
                await DatabaseInteraction.getMinuteExercises(group).then((data) => setMinuteExercises(data));
                await DatabaseInteraction.getMicroPauseExercises(group).then((data) => setMicroPauseExercises(data));
            }
        };
        fetchData();

    }, [group]);

  return (
      <>
      <View style={styles.mainBox}>
          <ExerciseCard image={testGym} name={"Вводная гимнастика"} info={"физические упражнения, проводимые до работы с целью подготовки организма к предстоящей деятельности"} data={enterExercises} navigation={navigation}/>
          <ExerciseCard image={testGym2} name={"Физкультурная пауза"} info={"форма производственной гимнастики, проводимая в первую и вторую половины рабочего дня в течение 5-6 минут"} data={pauseExercises} navigation={navigation}/>
          <ExerciseCard image={testGym3} name={"Физкультурная минутка"} info={"малая форма активного отдыха, в виде кратковременной физкультурной паузы, которая проводится для того, чтобы локально воздействовать на утомленную группу мышц."} data={minuteExercises} navigation={navigation}/>
          <ExerciseCard image={testGym4} name={"Микропауза"} info={"самая короткая форма производственной гимнастики, длящаяся всего 20-30 с, снижая при этом общее или локальное утомление, путем частичного снижения или повышения возбудимости центральной нервной системы."} data={microPauseExercises} navigation={navigation} />
      </View>
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
