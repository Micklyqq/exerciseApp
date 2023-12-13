import React from 'react';
import { StatusBar } from "expo-status-bar";
import * as Font from 'expo-font'
import {useEffect, useState} from "react";
import {NavigationContainer,useNavigation} from "@react-navigation/native";
import {Colors,Image} from "react-native-ui-lib";
import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';
import {TouchableOpacity} from "react-native";
import settingsIcon from "./assets/icons/setting.png";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseGroupScreen from "./screens/ChooseGroupScreen";
import ExerciseChooseScreen from "./screens/ExerciseChooseScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
let customFonts = {
    "Literata-Bold": require("./assets/fonts/Literata/Literata-Bold.ttf"),
    "Literata-Regular":require("./assets/fonts/Literata/Literata-Regular.ttf"),
    "Literata-Medium":require("./assets/fonts/Literata/Literata-Medium.ttf")
};


export default function App() {
    const Stack = createNativeStackNavigator();
    const downloadDatabase = async () => {
        try {
            const sourcePath = require('./data/ExerciseDatabase.json');
            const destinationUri = `${FileSystem.documentDirectory}ExerciseDatabase.json`;

            // Проверяем, существует ли файл уже в целевой директории
            const fileInfo = await FileSystem.getInfoAsync(destinationUri);
            if (fileInfo.exists) {
                console.log('File already exists, no need to copy.');
                return;
            }

            // Записываем содержимое в целевой файл
            await FileSystem.writeAsStringAsync(destinationUri, JSON.stringify(sourcePath));
            console.log('File copied successfully.');
        } catch (error) {
            console.error('Error copying file:', error);
        }

    };
    async function loadFonts() {
        await Font.loadAsync(customFonts).then(()=>setFontsLoaded(true));
    }
    async function checkGroup(key) {
        try {
            const value = await SecureStore.getItemAsync(key);
            return value;
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }

    const SettingsButton = React.memo(({ navigation }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image style={{ width: 20, height: 20 }} source={settingsIcon} />
        </TouchableOpacity>
    ));

    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [group,setGroup] = useState(false);
    useEffect(() => {
        checkGroup("group").then((data)=>setGroup(data));
        loadFonts();
        downloadDatabase()
    }, [group]); // Выполнится только при монтировании компонента

    if (!fontsLoaded) {
        return null;
    }

  return (
      <>
          <StatusBar style="auto" />
    <NavigationContainer>
        <Stack.Navigator  screenOptions={({ navigation }) => ({
            headerStyle: {
                backgroundColor: Colors.violet30,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => <SettingsButton navigation={navigation} />
        })}>
            {(group === "chooseGroup" || group === null) ? (
                <Stack.Group>
                    <Stack.Screen name="ChooseGroup" component={ChooseGroupScreen} options={{
                        title: 'Выбор группы',
                    }}/>
                    <Stack.Screen name="ChooseExercise" component={ExerciseChooseScreen} options={{
                        title: 'Выбор упражнения',
                    }}/>
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="ChooseExercise" component={ExerciseChooseScreen} options={{
                        title: 'Выбор упражнения',
                    }}/>

                    <Stack.Screen name="ChooseGroup" component={ChooseGroupScreen} options={{
                        title: 'Выбор группы'
                    }}/>
                </Stack.Group>

            )}
            <Stack.Screen name={"Settings"} component={SettingsScreen} options={{
                title: 'Настройки'
            }}/>
            <Stack.Screen name={"Exercise"} component={ExerciseScreen} options={{
                title: 'Упражнение'
            }}/>

        </Stack.Navigator>
    </NavigationContainer>

      </>
  );
}
