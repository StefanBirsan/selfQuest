import {StyleSheet, Text, TouchableOpacity} from "react-native";



const Tag = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.TagContainer}>
        <Text style={styles.TagText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    pressedButton: {
        backgroundColor: '#864AF9', // Change this color to the pressed color
    },

    TagContainer: {
        backgroundColor: '#F8E559',
        borderRadius: 20,
        padding: 10,
        margin: 5,
        elevation: 5,
    },
    TagText: {
        color: '#424769',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Tag;