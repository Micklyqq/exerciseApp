import * as SecureStore from 'expo-secure-store';

    export async function getData(key,isObject=false) {
        try {
            if(isObject){
                const jsonValue = await SecureStore.getItemAsync(key);
                return jsonValue!==null?JSON.parse(jsonValue):null;
            }
            const value = await SecureStore.getItemAsync(key);
            return value!==null? value:null;

            
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }
    
     export async function saveData(key,value,isObject=false) {
        try {
            if(isObject){
                const jsonValue = JSON.stringify(value);
                await SecureStore.setItemAsync(key,jsonValue);
                console.log('Data saved successfully!');
                return;
            }
            await SecureStore.setItemAsync(key, value);
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
