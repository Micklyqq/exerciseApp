import {View, Text, Colors} from "react-native-ui-lib";
import {useEffect, useState} from "react";
import {StyleSheet} from "react-native";

export default function Timer(){
    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
      const intervalId = setInterval(()=>{
          setTime((prevTime)=>{
              const newSeconds = prevTime.seconds+1;
              const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
              const newHours = prevTime.hours + Math.floor(newMinutes / 60);
              return{
                  hours: newHours%24,
                  minutes: newMinutes%60,
                  seconds: newSeconds %60,
              }
          })
      },1000);
    }, []);



    return(
        <View>
            <Text center $textPrimary text10 style={styles.timerText}>
                {time.hours < 10 ? `0${time.hours}` : time.hours}:
                {time.minutes < 10 ? `0${time.minutes}` : time.minutes}:
                {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    timerText:{
        marginTop:"10%",
        borderWidth:5,
        borderColor:Colors.violet30,
        borderRadius:10,
        margin:"5%"
    }
})