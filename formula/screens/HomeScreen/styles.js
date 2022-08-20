import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formulaContainer: {
        width: '100%',
        height: '100%',
      },
      
      defaultPage: {
        width: '100%',
        alignItems: 'center',
      },

      paragraph: {
        width: '85%',
        alignItems: 'center',
        paddingLeft: 60,
        marginBottom: 20
      },
    
      loginPage: {
        width: '100%',
        alignItems: 'center'
      },
    
      title: {
        fontSize: 35,
        marginBottom: 20,
        color: 'white',
        fontWeight: '300',
        fontFamily: 'Blinker'
      },
    
      mainStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: '100',
        fontFamily: 'Blinker',
      },
    
      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

      Logo: {
        width: '70%',
        marginTop: 80,
      },

      root: {
        alignItems: 'center',
      },
      
});

export default styles;