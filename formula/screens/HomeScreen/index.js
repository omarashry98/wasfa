import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import Logo from '../../assets/photos/FoodIcon.png';
import CustomButton from '../../components /CustomButton';
import styles from './styles';
import CustomInput from '../../components /CustomInput';



const HomeScreen = ({navigation}) => {

    

    const onCreateWasfaPressed = () => {
        navigation.navigate('Home');
    };


    return(
        <View style={styles.formulaContainer}>
                    <ImageBackground 
                        source={require('../../assets/photos/DefaultBackground2.png')}
                        style={styles.image}
                    />

                    <View style={styles.root}>
                        <Image 
                        source={Logo} 
                        style={styles.Logo}
                        resizeMode="contain"/>
                    </View>

                    <View style={styles.defaultPage}>  
                        <Text style={styles.title}>Wasfa</Text>
                    </View>
                    <View style={styles.paragraph}>  
                        <Text style={styles.mainStyle}>
                            create your own Wasfa using various 
                            ingredients, if the ingredients are not 
                            compatible we will let you know
                        </Text>
                    </View>

                    <CustomButton text="Create Wasfa" onPress={onCreateWasfaPressed}/>
                    
                
            </View>

    )
}

export default HomeScreen;