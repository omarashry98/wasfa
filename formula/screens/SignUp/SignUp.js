import React from 'react';
import {View, Text, ImageBackground, ScrollView, Alert} from 'react-native';
import styles from './styles';
import CustomInput from '../../components /CustomInput';
import CustomButton from '../../components /CustomButton';
import {useForm} from 'react-hook-form';



const SignUp = ({navigation}) => {

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const onRegisterPressed = () => {
        navigation.navigate('Main');
    }

    const {
        control, 
        handleSubmit, 
        watch,
        formState: {errors}
    } = useForm();

    const pwd = watch('Password');

    return (
        
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.formulaContainer}>
            
                <ImageBackground 
                    source={require('../../assets/photos/SignUpBackground.png')}
                    style={styles.image}
                />

                <Text style={styles.title}>Create an Account</Text>

                <CustomInput 
                    name="Name"
                    placeholder="Name" 
                    rules={{
                        required: 'Name is required',
                        minLength: {value: 3, message: 'Name should be a minimum of 3 characters'},
                        maxLength: {value: 15, message: 'Name should be a maximum of 15 characters'}
                    }}
                    control={control}
                />

                <CustomInput 
                    name="Username"
                    placeholder="Username" 
                    rules={{
                        required: 'Username is required',
                        minLength: {value: 3, message: 'Username should be a minimum of 3 characters'},
                        maxLength: {value: 15, message: 'Username should be a maximum of 15 characters'}
                    }}
                    control={control}
                />

                <CustomInput 
                    name= "Email"
                    placeholder="Email" 
                    rules={{
                        required: 'Email is required',
                        pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                    }}
                    control={control}
                />
                <CustomInput 
                    name="Password"
                    placeholder="Password" 
                    rules={{
                        required: 'Password is required',
                        minLength: {value: 3, message: 'Password should be a minimum of 3 characters'},
                        maxLength: {value: 15, message: 'Password should be a maximum of 15 characters'}
                    }}
                    control={control}
                    secureTextEntry
                />

                <CustomInput 
                    name="Repeat Password"
                    placeholder="Repeat Password" 
                    rules={{
                        required: 'Repeat Password',
                        validate: value => 
                            value === pwd || 'Password do not match'
                        
                    }}
                    control={control}
                    secureTextEntry
                />
                
                <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.account}>Already have an account?</Text>
                    <CustomButton 
                        text="Sign in" 
                        onPress={()=>{navigation.goBack()}} 
                        type="SIGNIN"
                    />
                </View>
                
            </View>
        </ScrollView>
      
    );
};

export default SignUp;