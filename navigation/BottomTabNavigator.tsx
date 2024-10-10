import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
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

    const [index, setIndex] = useState<number>(1); // Type for index state
    const [routes] = useState([
        { key: 'spaceshows', title: 'SpaceShows' },
        { key: 'home', title: 'Home' },
        { key: 'shop', title: 'Shop' },
        { key: 'profile', title: 'Profile' },
    ]);

    const renderScene = SceneMap({
        spaceshows: SpaceShowsScreen,
        home: HomeScreen,
        shop: ShopScreen,
        profile: ProfileScreen,
    });

    return (
        <View style={{ flex: 1 }}>
            {/* Header Bar */}
            <HeaderBar coinAmount={65106} />
            
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={() => null} 
                swipeEnabled={true}
            />
            <CustomTabBar index={index} setIndex={setIndex} />
        </View>
    );
}

// Header Bar Component
interface HeaderBarProps {
    coinAmount: number;
}

function HeaderBar({ coinAmount }: HeaderBarProps) {
    return (
        <View style={styles.headerContainer}>
            {/* Menu Icon */}
            <TouchableOpacity>
                <Image 
                    source={require('../assets/icons/menu.png')} 
                    style={styles.menuIcon} 
                />
            </TouchableOpacity>

            {/* Logo */}
            <Image 
                source={require('../assets/icons/logokl.png')} // Placeholder for logo
                style={styles.logo}
            />

            {/* Coin Display */}
            <View style={styles.coinContainer}>
                <Image 
                    source={require('../assets/icons/coin.png')} // Placeholder for coin icon
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
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#000',
    },
    menuIcon: {
        width: 30,
        height: 30,
        marginTop: 30,
        tintColor: '#FFFFFF',
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 30,
        marginLeft: 40
    },
    coinContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinIcon: {
        width: 25,
        height: 25,
        marginRight: 5,
        marginTop: 30,
    },
    coinText: {
        fontFamily: 'Joystix',
        fontSize: 18,
        marginTop: 30,
        color: '#B0B0B0', // Coin color
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#000',
        paddingVertical: 10,
    },
    tabButton: {
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
    },
    activeIcon: {
        width: 50,
        height: 50,
        tintColor: '#FFD700',
    },
    upwardIcon: {
        marginBottom: 10,
    },
    lowerInactiveIcon: {
        marginTop: 25,
    },
    label: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
        fontFamily: 'VT323'
    },
    activeLabel: {
        color: '#FFD700',
    },
});
