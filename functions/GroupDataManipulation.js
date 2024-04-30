import * as SecureStore from 'expo-secure-store';

    export async function getData() {
        try {
            return await SecureStore.getItemAsync('group');
            
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
    }
    
     export async function saveData(value) {
        try {
            await SecureStore.setItemAsync('group', value);
            console.log('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
