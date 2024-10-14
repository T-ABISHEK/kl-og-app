import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, Modal, Animated } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { HomeScreen } from '../screens/HomeScreen';
import { SpaceShowsScreen } from '../screens/SpaceShowsScreen';
import { ShopScreen } from '../screens/ShopScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { useFonts } from 'expo-font';

const initialLayout = { width: Dimensions.get('window').width };

export default function BottomTabNavigator() {
    const [fontsLoaded] = useFonts({
        'VT323': require('../assets/fonts/VT323-Regular.ttf'),
        'Joystix': require('../assets/fonts/joystix.otf'),
    });

    const [index, setIndex] = useState<number>(1);
    const [routes] = useState([
        { key: 'spaceshows', title: 'SpaceShows' },
        { key: 'home', title: 'Home' },
        { key: 'shop', title: 'Shop' },
        { key: 'profile', title: 'Profile' },
    ]);

    const [menuVisible, setMenuVisible] = useState(false); // Control side panel visibility
    const [slideAnim] = useState(new Animated.Value(-Dimensions.get('window').width)); // Animation for sliding panel from left

    const renderScene = SceneMap({
        spaceshows: SpaceShowsScreen,
        home: HomeScreen,
        shop: ShopScreen,
        profile: ProfileScreen,
    });

    const openMenu = () => {
        setMenuVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const closeMenu = () => {
        Animated.timing(slideAnim, {
            toValue: -Dimensions.get('window').width,
            duration: 300,
            useNativeDriver: false,
        }).start(() => setMenuVisible(false)); // Set menuVisible to false after animation completes
    };

    return (
        <View style={styles.container}>
            {/* Add Topline Image */}
            <Image source={require('../assets/icons/topline.png')} style={styles.topline} />

            {/* Header Bar */}
            <HeaderBar coinAmount={65106} openMenu={openMenu} />

            {/* Tab View */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={() => null}
                swipeEnabled={true}
            />

            {/* Add Bottomline Image */}
            <Image source={require('../assets/icons/bottomline.png')} style={styles.bottomline} />

            {/* Custom Tab Bar */}
            <CustomTabBar index={index} setIndex={setIndex} />

            {/* Side Panel Modal */}
            {menuVisible && (
                <Modal
                    visible={menuVisible}
                    animationType="none"
                    transparent={true}
                    onRequestClose={closeMenu} // Close when back is pressed
                >
                    <View style={styles.modalContainer}>
                        <Animated.View style={[styles.sidePanel, { transform: [{ translateX: slideAnim }] }]}>
                            <TouchableOpacity style={styles.panelButton} onPress={() => alert('Terms and Conditions')}>
                                <Text style={styles.panelButtonText}>Terms and Conditions</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.panelButton} onPress={() => alert('Privacy Policy')}>
                                <Text style={styles.panelButtonText}>Privacy Policy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.panelButton} onPress={() => alert('Logged Out')}>
                                <Text style={styles.panelButtonText}>Logout</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        {/* Close the side panel by tapping outside */}
                        <TouchableOpacity style={styles.overlay} onPress={closeMenu} />
                    </View>
                </Modal>
            )}
        </View>
    );
}

// Header Bar Component
interface HeaderBarProps {
    coinAmount: number;
    openMenu: () => void;
}

function HeaderBar({ coinAmount, openMenu }: HeaderBarProps) {
    return (
        <View style={styles.headerContainer}>
            {/* Menu Icon */}
            <TouchableOpacity onPress={openMenu}>
                <Image 
                    source={require('../assets/icons/menu.png')} 
                    style={styles.menuIcon} 
                />
            </TouchableOpacity>

            {/* Logo */}
            <Image 
                source={require('../assets/icons/logokl.png')} 
                style={styles.logo}
            />

            {/* Coin Display */}
            <View style={styles.coinContainer}>
                <Image 
                    source={require('../assets/icons/coin.png')} 
                    style={styles.coinIcon}
                />
                <Text style={styles.coinText}>{coinAmount}</Text>
            </View>
        </View>
    );
}

interface CustomTabBarProps {
    index: number;
    setIndex: (index: number) => void;
}

function CustomTabBar({ index, setIndex }: CustomTabBarProps) {
    const getTabOrder = () => {
        if (index === 0 || index === 1) {
            return (
                <>
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={0} label="SpaceShows" icon={require('../assets/icons/spaceshows.png')} />
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
                </>
            );
        } else if (index === 2 || index === 3) {
            return (
                <>
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={1} label="Home" icon={require('../assets/icons/home.png')} />
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={2} label="Shop" icon={require('../assets/icons/shop.png')} />
                    <TabItem setIndex={setIndex} selectedIndex={index} currentIndex={3} label="Profile" icon={require('../assets/icons/profile.png')} />
                </>
            );
        }
    };

    return <View style={styles.tabContainer}>{getTabOrder()}</View>;
}

interface TabItemProps {
    setIndex: (index: number) => void;
    selectedIndex: number;
    currentIndex: number;
    label: string;
    icon: any;
}

function TabItem({ setIndex, selectedIndex, currentIndex, label, icon }: TabItemProps) {
    return (
        <TouchableOpacity onPress={() => setIndex(currentIndex)} style={styles.tabButton}>
            {/* Conditionally render the background image if the tab is selected */}
            {selectedIndex === currentIndex && (
                <Image
                    source={require('../assets/icons/buttonbg.png')}
                    style={styles.buttonBackground}
                />
            )}

            {/* Tab Icon */}
            <Image
                source={icon}
                style={[
                    styles.icon,
                    selectedIndex === currentIndex && styles.activeIcon,
                    selectedIndex === currentIndex && styles.upwardIcon,
                    selectedIndex !== currentIndex && styles.lowerInactiveIcon,
                ]}
            />
            <Text style={[styles.label, selectedIndex === currentIndex && styles.activeLabel]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#000',
    },
    menuIcon: {
        width: 24,
        height: 24,
        marginTop: 30,
        tintColor: '#FFFFFF',
    },
    logo: {
        width: 32,
        height: 38,
        marginTop: 30,
        marginLeft: 40,
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
        marginTop: 30,
    },
    coinText: {
        fontFamily: 'Joystix',
        fontSize: 13,
        marginTop: 30,
        color: '#B0B0B0',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        width: 396,
        height: 78
    },
    tabButton: {
        alignItems: 'center',
    },
    buttonBackground: {
        position: 'absolute',
        width: 54, 
        height: 54, 
        bottom: 27,
        zIndex: -1, 
        resizeMode: 'contain',
    },
    icon: {
        width: 26,
        height: 26,
        tintColor: '#fff',
    },
    activeIcon: {
        width: 26,
        height: 26,
        marginTop: 10,
        tintColor: '#FFD700',
    },
    upwardIcon: {
        marginBottom: 1,
    },
    lowerInactiveIcon: {
        marginTop: 25,
        marginHorizontal:-15,
    },
    label: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'VT323',
    },
    activeLabel: {
        color: '#FFD700',
        marginTop: 10,
    },

    // Styles for Topline and Bottomline
    topline: {
        position: 'absolute',
        top: 60,
        width: '100%',
        height: 50,
        resizeMode: 'contain',
        zIndex: 1,
    },
    bottomline: {
        position: 'absolute',
        bottom: 70,
        width: '100%',
        height: 17,
        resizeMode: 'stretch',
        zIndex: 1,
    },

    // Side Panel and Modal Styles
    modalContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    sidePanel: {
        width: '70%',
        backgroundColor: '#000',
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    panelButton: {
        paddingVertical: 15,
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        width: '100%',
    },
    panelButtonText: {
        fontFamily: 'VT323',
        fontSize: 20,
        color: '#fff',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
