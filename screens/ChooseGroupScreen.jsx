
import {TouchableOpacity} from "react-native";
import {Text, View, Button, RadioButton, RadioGroup, Dividers,Colors} from 'react-native-ui-lib';
import styled from "styled-components/native";
import * as SecureStore from 'expo-secure-store';
import {useState} from "react";

export default function ChooseGroupScreen({navigation}) {
    const [selectedGroup, setSelectedGroup] = useState('groupOne');
    async function saveData(value) {
        try {
            await SecureStore.setItemAsync('group', value);
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    const handleRadioButtonChange = (value) => {
        setSelectedGroup(value);
    };

    const handleButtonClick = () => {
       saveData(selectedGroup);
        navigation.navigate({
            name: 'ChooseExercise',
            params: { groupChange: selectedGroup },
            merge: true,
        });
    };



    return (
       <View flex paddingL-50 paddingR-50 paddingT-20 >
           <Text center $textPrimary text70 style={{borderBottomWidth:1,borderBottomColor:Colors.violet30}} >
               Профессии для удобства поделенны на 4 группы. У каждой группы свои
               упражнения. Выберите свою группу на основании приведенного описания
           </Text>
           <RadioGroup initialValue={'groupOne'} onValueChange={handleRadioButtonChange}>
               <View marginT-20 >
                   <RadioButton value={'groupOne'} label={'Группа 1'}/>
                   <Text marginT-10>профессии с преобладанием нервного напряжения при незначительной физической нагрузке и однообразных рабочих движениях</Text>
               </View>
               <View marginT-20>
                   <RadioButton value={'groupTwo'} label={'Группа 2'}/>
                   <Text >профессии, в которых сочетается физическая и умственная деятельность при средней физической нагрузке и некотором разнообразии движений</Text>
               </View>
               <View marginT-20>
                   <RadioButton value={'groupThree'} label={'Группа 3'}/>
                   <Text >профессии, характеризующиеся разнообразными рабочими операциями, требующими больших физических напряжений</Text>
               </View>
               <View marginT-20>
                   <RadioButton value={'groupFour'} label={'Группа 4'}/>
                   <Text >профессии, связанные с умственным трудом требующие постоянного умственного напряжения</Text>
               </View>
           </RadioGroup>
           <Button label="Выбрать" marginT-30 onPress={handleButtonClick}/>
       </View>
    );
}
