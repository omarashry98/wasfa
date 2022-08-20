import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from '../screens/FirstPage';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import SignUp from '../screens/SignUp/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name= "Home" component={FirstPage} />
                <Stack.Screen name= "Main" component={HomeScreen} />
                <Stack.Screen name= "Email" component={ConfirmEmailScreen} />
                <Stack.Screen name= "SignUp" component={SignUp} />
                <Stack.Screen name= "ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name= "NewPassword" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;