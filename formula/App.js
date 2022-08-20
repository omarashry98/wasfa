import React, {useState} from 'react';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import Navigation from './routes';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);


const getFonts = () => Font.loadAsync({
  'Melanie': require('./assets/fonts/MelanieRegular.ttf'),
  'Blinker': require('./assets/fonts/Blinker-Regular.ttf')
})


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
    if(fontsLoaded){
      return(
        <Navigation />
      );
    } else {
        return(
            <AppLoading 
              startAsync={getFonts} 
              onFinish ={()=> {
              setFontsLoaded(true)
            }}onError={console.warn}/>
        )
    }

}

export default App;
