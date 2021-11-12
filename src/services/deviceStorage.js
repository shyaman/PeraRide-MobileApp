import { AsyncStorage } from 'react-native';

const deviceStorage = {
  
    async saveJWT(value) {
      try {
        await AsyncStorage.setItem('jwt', value);
      } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
      }
    },
    
    async loadJWT() {
        try {
          const value = await AsyncStorage.getItem('jwt');
          return value
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      },

      async deleteJWT() {
        try{
          await AsyncStorage.removeItem('jwt')
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
    
  };

export default deviceStorage;