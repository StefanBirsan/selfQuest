import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
} from 'react-native';
import Tag from "../customButtons/TagButtons";
import {useState} from "react";
import {auth, db} from "../Scripts/Scripts";
import {ref, set} from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';


const image = {uri: 'https://images.unsplash.com/photo-1613742631162-cdba058776b9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'}



const TagScreen = () =>{
    const [selectedTags, setSelectedTags] = useState([]);

    const userId = auth.currentUser ? auth.currentUser.uid : null;

    const dataAddOn = async (userUID) => {
        console.log(userUID);
        try {
            await set(ref(db, `users/${userUID}`), {
                XP: 0,
                HP: 100,
                tags: selectedTags,
            });
            console.log("Data added successfully");
            await storeKey();
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    const storeKey = async () => {
        try {
            await AsyncStorage.setItem('userToken', 'yes');
            console.log('Data stored successfully.');
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };


    const handleTagPress = (tagTitle) => {

        if (selectedTags.includes(tagTitle)) {

            setSelectedTags(selectedTags.filter((tag) => tag !== tagTitle));
        } else {

            setSelectedTags(prev=>[...prev, tagTitle]);
        }
    };
    return (
        <View style={styles.container}>

            <ImageBackground source={image} style={styles.bg}>

                <Text style={styles.titlu}> Choose your tags </Text>

                <View style={styles.lista}>

                    <Tag
                        title={'eating too much'}
                         onPress={() => handleTagPress('eating too much')}
                         selected={selectedTags.includes('eating too much')}
                    />

                    <Tag title={'eating too little'}
                         onPress={() => handleTagPress('eating too much')}
                         selected={selectedTags.includes('eating too little')}
                    />
                    <Tag
                        title={'skipping meals'}
                        onPress={() => handleTagPress('skipping meals')}
                        selected={selectedTags.includes('skipping meals')}
                    />
                    <Tag
                        title={'not enough water'}
                        onPress={() => handleTagPress('not enough water')}
                        selected={selectedTags.includes('not enough water')}
                    />
                    <Tag
                        title={'too much caffeine'}
                        onPress={() => handleTagPress('too much caffeine')}
                        selected={selectedTags.includes('too much caffeine')}
                    />
                    <Tag
                        title={'oversleeping'}
                        onPress={() => handleTagPress('oversleeping')}
                        selected={selectedTags.includes('oversleeping')}
                    />
                    <Tag
                        title={'not sleeping enough'}
                        onPress={() => handleTagPress('not sleeping enough')}
                        selected={selectedTags.includes('not sleeping enough')}
                    />
                    <Tag
                        title={'going to bed late'}
                        onPress={() => handleTagPress('going to bed late')}
                        selected={selectedTags.includes('going to bed late')}
                    />
                    <Tag
                        title={'hard to fall asleep'}
                        onPress={() => handleTagPress('hard to fall asleep')}
                        selected={selectedTags.includes('hard to fall asleep')}
                    />
                    <Tag
                        title={'procrastinating'}
                        onPress={() => handleTagPress('procrastinating')}
                        selected={selectedTags.includes('procrastinating')}
                    />
                    <Tag
                        title={'multitasking'}
                        onPress={() => handleTagPress('multitasking')}
                        selected={selectedTags.includes('multitasking')}
                    />
                    <Tag
                        title={'being late'}
                        onPress={() => handleTagPress('being late')}
                        selected={selectedTags.includes('being late')}
                    />
                    <Tag
                        title={'bad hygiene'}
                        onPress={() => handleTagPress('bad hygiene')}
                        selected={selectedTags.includes('bad hygiene')}
                    />
                    <Tag
                        title={'no exercise'}
                        onPress={() => handleTagPress('no exercise')}
                        selected={selectedTags.includes('no exercise')}
                    />
                    <Tag
                        title={'bad posture'}
                        onPress={() => handleTagPress('bad posture')}
                        selected={selectedTags.includes('bad posture')}
                    />
                    <Tag
                        title={'smoking'}
                        onPress={() => handleTagPress('smoking')}
                        selected={selectedTags.includes('smoking')}
                    />
                    <Tag
                        title={'alcohol'}
                        onPress={() => handleTagPress('alcohol')}
                        selected={selectedTags.includes('alcohol')}
                    />
                    <Tag
                        title={'Porn Addiction'}
                        onPress={() => handleTagPress('Porn Addiction')}
                        selected={selectedTags.includes('Porn Addiction')}
                    />
                </View>
                    <Tag
                        title={'Continue'}
                        onPress={() => dataAddOn(userId)}
                        style={styles.continueS}
                    />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    continueS:{
      marginTop: 50,
    },
    bg : {
        flex:1,
        justifyContent:"flex-start",
        padding:'2%'
    },
    titlu:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:'20%',
        marginBottom:'6%',
        color:'white',
    },
    lista:{
        flexDirection:"row",
        width:'100%',
        flexWrap:"wrap",
    },
    TagContainer:{
        elevation: 5,
        backgroundColor: "black",
        borderRadius: 8,
        width:"auto",
        height:"auto",
        margin:'2%',
        padding:'2%',
    },
    TagText:{
        fontSize: 15,
        color: "white",
        fontWeight: "bold",
        alignSelf:'center',
    }
});

export default TagScreen;