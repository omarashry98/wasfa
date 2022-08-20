import React, {useState} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components /CustomInput';
import CustomButton from '../../components /CustomButton';
import {useForm} from 'react-hook-form';


const ForgotPasswordScreen = ({navigation}) => {

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const onSendPressed = () => {
        navigation.navigate('Email');
    };

    const{control, handleSubmit} = useForm();


    return (
        
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.formulaContainer}>
            
                <ImageBackground 
                    source={require('../../assets/photos/SignUpBackground.png')}
                    style={styles.image}
                />

                <Text style={styles.title}>Enter Email</Text>

                <CustomInput 
                    name= "Email"
                    control={control}
                    placeholder="Email" 
                    rules={{
                        pattern: {value: EMAIL_REGEX, message: 'Invalid Email'}
                    }}
                    
                />

                
                <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
                <View style={{flexDirection:"row"}}>
                    <CustomButton 
                        text="Back to Sign in" 
                        onPress={()=>{navigation.goBack()}} 
                        type="RESETPAGE"
                    />
                </View>
                
            </View>
        </ScrollView>
      
    );
};

export default ForgotPasswordScreen;