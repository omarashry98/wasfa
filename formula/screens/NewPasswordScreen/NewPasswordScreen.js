import React, {useState} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components /CustomInput';
import CustomButton from '../../components /CustomButton';
import {useForm} from 'react-hook-form';


const NewPasswordScreen = ({navigation}) => {
    
    const onSubmitPressed = (data) => {
        console.warn(data);
        navigation.navigate('Home');
    };

    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('New')


    return (
        
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.formulaContainer}>
            
                <ImageBackground 
                    source={require('../../assets/photos/SignUpBackground.png')}
                    style={styles.image}
                />

                <Text style={styles.title}>Reset your Password</Text>

                <CustomInput 
                    name= "New"
                    placeholder="New Password" 
                    rules={{
                        required: "Enter new password",
                        minLength: {value: 3, message: "Minimum of 3 characters"},
                        maxLength: {value: 15, message: "Maximum of 15 characters"}
                    }}
                    control={control}
                    secureTextEntry
                    
                />

                <CustomInput 
                    name= "repeat"
                    placeholder="Repeat Password" 
                    rules={{
                        required: "Repeat Password",
                        validate: value =>
                            value === pwd || "Password do not match"
                    }}
                    control={control}
                    secureTextEntry
                />

                <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)}/>
                
                <View style={{flexDirection:"row"}}>
                    <CustomButton 
                        text="Back to Sign in" 
                        onPress={()=>{navigation.navigate('Home')}} 
                        type="RESETPAGE"
                    />
                </View>
                
            </View>
        </ScrollView>
      
    );
};

export default NewPasswordScreen;