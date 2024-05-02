
import {StyleSheet} from "react-native";
import {Text, View, Button, RadioButton, RadioGroup, Colors} from 'react-native-ui-lib';
import {useState} from "react";
import { saveData,getData } from "../logic/GroupDataManipulation";

export default function ChooseGroupScreen({navigation}) {
    const [selectedGroup, setSelectedGroup] = useState('groupOne');

    const handleRadioButtonChange = (value) => {
        setSelectedGroup(value);
    };

    const handleButtonClick = () => {
       saveData("group",selectedGroup).then(()=>{
        navigation.navigate({
            name: 'ChooseExercise',
            params: { groupChange: selectedGroup },
            merge: true,
        });
       });
       
    };

    const [currentGroup,setCurrentGroup] = useState(null);
    getData("group").then((data)=>setCurrentGroup(data));

    function renderCurrentGroup(){
        switch (currentGroup) {
            case 'groupOne':
                return <Text style={styles.currentGroup} >Текущая группа: Группа 1</Text>;
            case 'groupTwo':
                return <Text style={styles.currentGroup}>Текущая группа: Группа 2</Text>;
            case 'groupThree':
                return <Text style={styles.currentGroup}>Текущая группа: Группа 3</Text>;
            case 'groupFour':
                return <Text style={styles.currentGroup}>Текущая группа: Группа 4</Text>;
            default:
                return <Text style={styles.currentGroup}>Текущая группа: Не выбрана</Text>;
        }
    }

    return (
       <View flex paddingL-50 paddingR-50 paddingT-20 >
           <Text center $textPrimary text70 style={{borderBottomWidth:1,borderBottomColor:Colors.violet30}} >
               Профессии для удобства поделенны на 4 группы. У каждой группы свои
               упражнения. Выберите свою группу на основании приведенного описания
           </Text>
           {renderCurrentGroup()}
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
const styles = StyleSheet.create({
    currentGroup:{
        color: "#7416E0",
        fontSize:16,
        textAlign:"center",
        fontWeight:"bold"
    },
})
