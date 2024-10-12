import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window'); // Get the screen width for layout

export const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        'VT323': require('../assets/fonts/VT323-Regular.ttf'),
        'Joystix': require('../assets/fonts/joystix.otf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>; // Return a loading indicator if fonts aren't loaded
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
                            
                            {/* Wrapper for the custom image background behind the itemImage */}
                            <View style={styles.itemImageWrapper}>
                                <Image 
                                    source={require('../assets/icons/bluebg.png')} // Your custom image as background
                                    style={styles.backgroundImage}
                                />
                                <Image source={{ uri: 'https://storage.googleapis.com/staging.testproject-435112.appspot.com/sdd-removebg-preview.png' }} style={styles.itemImage} />
                            </View>

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
                                    <Text style={styles.featureText}>PROGRAMMABLE</Text>
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
                                    <Text style={styles.featureText}>DIY ASSEMBLY</Text>
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
                                    <Text style={styles.featureText}>FLY AT HOME</Text>
                                </View>
                            </View>

                            {/* Fly Button with Image */}
                            <TouchableOpacity style={styles.flyButton}>
                                <Image 
                                    source={require('../assets/icons/button.png')} 
                                    style={styles.flyButtonImage} 
                                />
                                <Text style={styles.flyButtonText}>BUY</Text>
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
        width: 370,
        height: 521,
        marginTop: 30,
        marginLeft: 12,
        resizeMode: 'stretch',
        zIndex: -1, // Send the background image behind other content
    },
    collegeName: {
        fontFamily: 'VT323', // Custom font applied here
        color: '#fff',
        fontSize: 42,
        marginTop: 10
    },
    clubName: {
        fontFamily: 'VT323', // Custom font applied here
        color: '#FBF619',
        fontSize: 16,
        marginTop: 75,
        position: 'absolute'
    },
    itemImageWrapper: {
        width: "100%", 
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', 
        zIndex: -1
    },
    backgroundImage: {
        width: '125%', 
        height: '150%', 
        position: 'absolute', // Ensure the background stays behind the itemImage
        resizeMode: 'contain', 
    },
    itemImage: {
        width: 300, // Inside width to be smaller than the wrapper
        height: 215,
        resizeMode: 'contain',
    },
    itemName: {
        fontFamily: 'VT323', // Custom font applied here
        color: '#fff',
        fontSize: 32,
        marginTop: 15
    },
    itemPrice: {
        color: '#fff',
        fontFamily: 'Joystix',
        fontSize: 19,
        marginBottom: 10, 
    },
    imageSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 30,
    },
    imageBox: {
        width: 98.26,
        height: 89,
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        position: 'relative',
        zIndex: 1,
    },
    placeholderImage: {
        width: 98.26,
        height: 89,
        position: 'absolute',
        zIndex: 2,
    },
    featureText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        fontFamily: 'VT323', // Make sure the font is applied here as well
    },
    flyButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flyButtonImage: {
        width: 350,
        height: 54,
    },
    flyButtonText: {
        fontFamily: 'VT323', // Custom font applied here
        color: '#000',
        fontSize: 32,
        position: 'absolute',
        letterSpacing: 5
    },
});
