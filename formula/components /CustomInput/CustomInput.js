import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, rules={}, placeholder, secureTextEntry}) =>{
    return(
        

        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View 
                        style={[
                            styles.container, 
                            {borderColor: error ? 'red' : '#e8e8e8'}
                        ]}>
                        <TextInput 
                            value={value} 
                            onChangeText={onChange} 
                            onBlur={onBlur} 
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        /> 
                    </View>
                    {error && (
                        <Text style={{color: 'red', alignSelf: 'center'}}> {error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '6%',

        marginHorizontal: 40,
        
        borderColor: '#e8e8e8',
        borderRadius: 5,
        borderWidth: 1,

        paddingHorizontal: 10,
        paddingTop: 10,
        marginVertical: 7,
        
    },
    input: {},
})

export default CustomInput