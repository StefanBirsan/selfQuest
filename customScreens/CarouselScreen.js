import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    FlatList,
    useWindowDimensions,
    ImageBackground
} from "react-native";
import data from "../assets/dataItem/data";

// Component for representing the current screen
const CurrentScreenIndicator = () => {
    return (
        <View style={styles.currentScreenIndicator}>
            <Text style={styles.indicatorDot}>...</Text>
        </View>
    );
};

const CarouselScreen = () => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const RenderItem = ({ item, index }) => {
        return (
            <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
                <Image source={item.image} style={{ width: SCREEN_WIDTH * 0.8, height: SCREEN_WIDTH * 0.8 }} />
                <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemText}>{item.text}</Text>
                </View>

                <CurrentScreenIndicator />
            </View>
        );
    };

    return (
        <ImageBackground source={require('../assets/images/backsit.jpeg')} style={styles.backgroundImage}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return <RenderItem item={item} index={index} />;
                    }}
                    keyExtractor={item => item.id}
                    scrollEventThrottle={16}
                    horizontal={true}
                    bounces={false}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
    itemText: {
        color: "black",
        textAlign: "center",
        lineHeight: 20,
        marginHorizontal: 35,
    },
    itemTitle: {
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "transparent",
        position: "relative",
    },
    currentScreenIndicator: {
        marginTop: -20,
    },
    indicatorDot: {
        fontSize: 24,
        color: "black",
    },
});

export default CarouselScreen;
