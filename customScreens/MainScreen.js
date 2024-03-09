import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground, TouchableOpacity,
} from 'react-native';

const ButonPH = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.ButonPHContainer}>
        <Text style={styles.ButonText}>{title}</Text>
    </TouchableOpacity>
);

const ButonSR = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.ButonSRContainer}>
        <Text style={styles.ButonText}>{title}</Text>
    </TouchableOpacity>
);

const MainScreen = () => {
    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.container}>
            <View style={styles.sus}>
                <Image style={styles.logo} source={require('../assets/images/sidequest.png')}/>
                <Text style={styles.desc}>
                    Your personal portal to self improvement
                </Text>
            </View>
            <View style={styles.jos}>
                <Image source={undefined} style={styles.avatar}/>
                <View style={styles.detalii}>
                    <Text style={styles.hp}>Hp baga functie</Text>
                    <Text style={styles.xp}>Xp baga functie</Text>
                    <ButonPH title={'Personal Hub'}/>
                </View>
            </View>
            <View style={styles.josjos}>
                <ButonSR title={'Settings'}/>
                <ButonSR title={'Reminders'}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },

    ButonPHText:{
        alignSelf:'center',
        fontWeight:"bold",
    },
    logo:{
        height:'70%',
        width:'90%',
        alignSelf:"center",
        marginTop:"9%",
        marginLeft:'3%',
    },
    desc:{
        alignSelf:"center",
        color:'#F8E559',
        fontWeight:"bold",
        fontSize:20,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 28,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
        marginBottom: 20,
    },
    sus:{

        flex:1,
    },
    jos:{

        flex:3,
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    avatar:{
        borderRadius:100,
        borderWidth:10,
        borderColor:'#A955E6',
        backgroundColor:'transparent',
        height:'40%',
        marginTop:'10%',
        marginLeft:'2%',
        flex:2,
    },
    detalii:{
        justifyContent:"space-evenly",
        height:200,
        marginTop:'8%',
        marginLeft:'2%',
        marginRight:'2%',
        flex:3,
    },
    hp:{
        backgroundColor:'#EE4266',
        borderRadius:10,
        textAlign:'center',
        elevation:5,
    },
    xp:{
        backgroundColor:'#F8E559',
        borderRadius:10,
        textAlign:'center',
        elevation:5,
    },
    josjos:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-around',
    },

    ButonSRText:{
        alignSelf:'center',
        fontWeight:"bold",
        fontSize:16,
    },
    ButonPHContainer: {
        backgroundColor: '#A955E6',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        elevation: 5,
    },
    ButonSRContainer: {
        backgroundColor: '#A955E6',
        borderRadius: 30,
        height: 60,
        width: '45%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        elevation: 5,
    },
    ButonText: {
        alignSelf: 'center',
        fontWeight: "bold",
        color: 'white',
        fontSize: 16,
    },
});



export default MainScreen;