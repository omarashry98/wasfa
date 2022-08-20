import {LogBox, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formulaContainer: {
        width: '100%',
        height: '100%',
      },
      
      frontPage: {
        marginTop: '15%',
        width: '100%',
        alignItems: 'center',
      },
    
      loginPage: {
        width: '100%',
        alignItems: 'center'
      },
    
      appName: {
        fontSize: 35,
        color: 'white',
        fontWeight: '300',
        fontFamily: 'Melanie'
      },
    
      mainStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: '100',
        fontFamily: 'Blinker',
      },
    
      image:{
        width: '100%',
        height: '100%',
        position: 'absolute',
      },

      title: {
        fontSize: 28, 
        fontWeight: 'bold',
        fontFamily: 'Blinker',
        color: '#B6B6B6',
        marginLeft: 67,
        marginTop: 220,
        marginBottom: 15,

      },

      account: {
        color: '#B6B6B6',
        fontFamily: 'Blinker',
        marginLeft: 90,
        marginTop: 17,
      }

      

});

export default styles;