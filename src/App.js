
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
// import { StartScreen } from './screens/StartScreen';
import { Homescreen } from './screens/Homescreen';

export default function App() {

 
  return (
    
      <View style={{flex :1}}>
      {/* <StartScreen/> */}
      <Homescreen/>
    </View>
   
    
  );
}


