import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window'); // Get the screen width for layout

export const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'VT323': require('../assets/fonts/VT323-Regular.ttf'), // Correct font path
    });

    if (!fontsLoaded) {
        return null; // Return null or a loading spinner while fonts are loading
    }

    const slides = new Array(10).fill(0); // Array of 10 slides

    return (
        <View style={styles.container}>
            <ScrollView horizontal pagingEnabled>
                {slides.map((_, index) => (
                    <View style={styles.slideContainer} key={index}>
                        {/* Background Image */}
                        <Image source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/Hover.png' }} style={styles.bgImage} />
                        
                        <ScrollView contentContainerStyle={styles.scrollContainer}>
                            {/* College Name */}
                            <Text style={styles.collegeName}>IIT BOMBAY</Text>
                            
                            {/* Club Name */}
                            <Text style={styles.clubName}>AEROMODELLING Club</Text>
                            
                            {/* Item Image */}
                            <Image source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/sdd-removebg-preview.png' }} style={styles.itemImage} />

                            {/* Item Name and Price */}
                            <Text style={styles.itemName}>FPV Drone</Text>
                            <Text style={styles.itemPrice}>$499.99</Text>

                            {/* Image Boxes with Feature Text */}
                            <View style={styles.imageSection}>
                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/sdd-removebg-preview.png' }} // Actual image
                                        style={styles.image}
                                    />
                                    <Image
                                        source={require('../assets/icons/featuresholder.png')} // Placeholder image
                                        style={styles.placeholderImage}
                                    />
                                    <Text style={styles.featureText}>Programmable</Text>
                                </View>

                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/sdd-removebg-preview.png' }} // Actual image
                                        style={styles.image}
                                    />
                                    <Image
                                        source={require('../assets/icons/featuresholder.png')} // Placeholder image
                                        style={styles.placeholderImage}
                                    />
                                    <Text style={styles.featureText}>DIY Assembly</Text>
                                </View>

                                <View style={styles.imageBox}>
                                    <Image
                                        source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/sdd-removebg-preview.png' }} // Actual image
                                        style={styles.image}
                                    />
                                    <Image
                                        source={require('../assets/icons/featuresholder.png')} // Placeholder image
                                        style={styles.placeholderImage}
                                    />
                                    <Text style={styles.featureText}>Fly at Home</Text>
                                </View>
                            </View>

                            {/* Fly Button */}
                            <TouchableOpacity style={styles.flyButton}>
                                <Text style={styles.flyButtonText}>FLY</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    slideContainer: {
        width: width, // Each slide should take the full width of the screen
        backgroundColor: '#000',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    bgImage: {
        position: 'absolute',
        width: 540,
        height: 605,
        resizeMode: "stretch",
        zIndex: -1, // Send the background image behind other content
    },
    collegeName: {
        fontFamily: 'VT323',
        color: '#fff',
        fontSize: 42,
        fontWeight: 'bold',
    },
    clubName: {
        fontFamily: 'VT323',
        color: '#FBF619',
        fontSize: 16,
        marginBottom: 10,
    },
    itemImage: {
        width: 269,
        height: 215,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    itemName: {
        fontFamily: 'VT323',
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemPrice: {
        color: '#fff',
        fontSize: 19,
        marginBottom: 15,
    },
    imageSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    imageBox: {
        width: 97,
        height: 89,
        alignItems: 'center',
        position: 'relative', // Allows absolute positioning inside
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        position: 'relative', // Ensure the actual image is positioned absolutely
        zIndex: 1, // Put actual image behind placeholder
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
        position: 'absolute', // Place the placeholder on top of the actual image
        zIndex: 2, // Ensure the placeholder is always on top
    },
    featureText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    flyButton: {
        backgroundColor: '#FBF619',
        width: 350,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    flyButtonText: {
        fontFamily: 'VT323',
        color: '#000',
        fontSize: 32,
        fontWeight: 'bold',
    },
});

