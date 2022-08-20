import React, {useState} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components /CustomInput';
import CustomButton from '../../components /CustomButton';
import {useForm} from 'react-hook-form';



const ConfirmEmailScreen = ({navigation}) => {

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onResendPressed = () => {
        console.warn("resend code");
    }

    const onConfirmPressed = (data) => {
        console.warn(data);
        navigation.navigate('NewPassword');
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
                    source={require('../../assets/photos/SignUpBackground.png')}
                    style={styles.image}
                />

                <Text style={styles.title}> Enter Code </Text>

                <CustomInput 
                    name= "Code"
                    control={control}
                    placeholder="Enter Code" 
                    rules= {{
                        required: 'Confirmation code is required'
                    }}
                />

                
                <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
                <View style={{flexDirection:"row"}}>
                    <CustomButton 
                        text="Resend Code" 
                        onPress={onResendPressed} 
                        type="SECONDARY"
                    />
                    <CustomButton 
                        text="Back to Sign in" 
                        onPress={()=>{navigation.navigate('Home')}} 
                        type="SECONDARY"
                    />
                </View>
                
            </View>
        </ScrollView>
      
    );
};

export default ConfirmEmailScreen;