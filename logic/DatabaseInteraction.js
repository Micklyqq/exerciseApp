import * as FileSystem from 'expo-file-system';
class DatabaseInteraction{




    constructor() {
        this.filePath = `${FileSystem.documentDirectory}ExerciseDatabase.json`
    }




    async readExerciseData() {
        try {
            const content = await FileSystem.readAsStringAsync(this.filePath);
            return JSON.parse(content);
        } catch (error) {
            console.error('Error reading or parsing exercise data:', error);
            throw error;
        }
    }

    async getEnterExercises(group) {
        try {
            const exerciseData = await this.readExerciseData();

            if (exerciseData && exerciseData[group] && exerciseData[group].enterGym && exerciseData[group].enterGym.exercise) {
                return exerciseData[group].enterGym.exercise;
            } else {
                console.error(`Invalid data structure for group '${group}'`);
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async getPauseExercises(group) {
        try {
            const exerciseData = await this.readExerciseData();

            if (exerciseData && exerciseData[group] && exerciseData[group].pauseGym && exerciseData[group].pauseGym.exercise) {
                return exerciseData[group].pauseGym.exercise;
            } else {
                console.error(`Invalid data structure for group '${group}'`);
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async getMinuteExercises(group) {
        try {
            const exerciseData = await this.readExerciseData();

            if (exerciseData && exerciseData[group] && exerciseData[group].minuteGym && exerciseData[group].minuteGym.exercise) {
                return exerciseData[group].minuteGym.exercise;
            } else {
                console.error(`Invalid data structure for group '${group}'`);
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    async getMicroPauseExercises(group) {
        try {
            const exerciseData = await this.readExerciseData();

            if (exerciseData && exerciseData[group] && exerciseData[group].microPauseGym && exerciseData[group].microPauseGym.exercise) {
                return exerciseData[group].microPauseGym.exercise;
            } else {
                console.error(`Invalid data structure for group '${group}'`);
                return null;
            }
        } catch (error) {
            throw error;
        }
    }
}
export default new DatabaseInteraction();