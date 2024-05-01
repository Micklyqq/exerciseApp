import * as SecureStore from 'expo-secure-store';

    export async function getData(key) {
        try {
            return await SecureStore.getItemAsync(key);
            
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }
    
     export async function saveData(key,value) {
        try {
            await SecureStore.setItemAsync(key, value);
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
