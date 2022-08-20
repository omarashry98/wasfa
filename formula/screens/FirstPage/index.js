import React from 'react';
import {View, ImageBackground, Image, ScrollView} from 'react-native';
import styles from './styles';
import Logo from '../../assets/photos/wLogo.png';
import CustomInput from '../../components /CustomInput';
import CustomButton from '../../components /CustomButton';
import {useForm} from 'react-hook-form';




const FirstPage = ( {navigation} ) => {

    const onLoginPressed = () => {
        navigation.navigate('Main');
    };
    
    const {
        control, 
        handleSubmit, 
        formState: {errors}
    } = useForm();

    return (
        
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.formulaContainer}>
                
                    <ImageBackground 
                        source={require('../../assets/photos/newBackground.png')}
                        style={styles.image}
                    />


                    <View style={styles.root}>
                        <Image 
                        source={Logo} 
                        style={styles.Logo}
                        resizeMode="contain"/>
                    </View>


                    <CustomInput 
                        name= "username"
                        placeholder="Username" 
                        rules={{
                            required: 'Email is required', 
                            minLength: {value:3, message:'not a vaild email'}
                        }}
                        control={control}
                    />
                    <CustomInput 
                        name="password"
                        placeholder="Password" 
                        rules={{
                            required: 'Password is required', 
                            minLength: {value: 3, message: 'Password more should be minimum 3 characters long'}
                        }}
                        control={control}
                        secureTextEntry
                    />
                    
                    <CustomButton 
                        text={'Login'} 
                        onPress={handleSubmit(onLoginPressed)}
                    />
                    <View style={{flexDirection:"row"}}>
                        <CustomButton 
                            text="forgot password?" 
                            onPress={()=>{navigation.navigate('ForgotPassword')}} 
                            type="TERTIARY"
                        />
                        <CustomButton 
                            text="dont have account?" 
                            onPress={()=>{navigation.navigate('SignUp')}} 
                            type="TERTIARY"
                        />
                    </View>
                
            </View>
        </ScrollView>
      
    );
};

export default FirstPage;