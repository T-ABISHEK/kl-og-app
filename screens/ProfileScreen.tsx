import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('inventions'); // Manage active tab

  const renderTabContent = () => {
    if (activeTab === 'inventions') {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* My Inventions content */}
          <View style={styles.inventionItem}>
            <Image source={require('../assets/icons/esp-drone.png')} style={styles.itemImage} />
            <View>
              <Text style={styles.itemName}>ESP DRONE</Text>
              <Text style={styles.itemPrice}>₹1500</Text>
            </View>
            <TouchableOpacity style={styles.playButtonContainer}>
              <Image source={require('../assets/icons/flynow.png')} style={styles.playButtonImage} />
              <Text style={styles.playButtonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inventionItem}>
            <Image source={require('../assets/icons/esp-drone.png')} style={styles.itemImage} />
            <View>
              <Text style={styles.itemName}>RPI DRONE</Text>
              <Text style={styles.itemPrice}>₹1500</Text>
            </View>
            <TouchableOpacity style={styles.playButtonContainer}>
              <Image source={require('../assets/icons/flynow.png')} style={styles.playButtonImage} />
              <Text style={styles.playButtonText}>PLAY NOW</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    if (activeTab === 'topics') {
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Topics Learned content */}
          <View style={styles.topicItem}>
            <Text style={styles.topicName}>Formation of Black Hole</Text>
            <View style={styles.pointsContainer}>
            <Image source={require('../assets/icons/coin.png')} style={styles.coinIcon} />
              <Text style={styles.topicPoints}>110</Text>              
            </View>
          </View>

          <View style={styles.topicItem}>
            <Text style={styles.topicName}>Life Cycle of Stars</Text>
            <View style={styles.pointsContainer}>
            <Image source={require('../assets/icons/coin.png')} style={styles.coinIcon} />
              <Text style={styles.topicPoints}>120</Text>              
            </View>
          </View>

          <View style={styles.topicItem}>
            <Text style={styles.topicName}>Dark Matter and Dark Energy</Text>
            <View style={styles.pointsContainer}>
            <Image source={require('../assets/icons/coin.png')} style={styles.coinIcon} />
            <Image source={require('../assets/icons/topicsframe.png')} style={styles.topicsFrame} />
              <Text style={styles.topicPoints}>180</Text>              
            </View>
          </View>
        </ScrollView>
      );
    }

    if (activeTab === 'settings') {
      return (
        <View style={styles.settingsContainer}>
          <Text style={styles.deleteText}>Do you want to delete your account?</Text>
          <View style={styles.settingsButtons}>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noButton}>
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={require('../assets/icons/profileIcon.png')} style={styles.profileIcon} />
        <TouchableOpacity style={styles.editIconContainer}>
          <Image source={require('../assets/icons/edit.png')} style={styles.editIcon} />
        </TouchableOpacity>
        <Text style={styles.userNameText}>Ananya Sharma</Text>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Image source={require('../assets/icons/solved.png')} style={styles.statIcon} />
            <Text style={styles.statValue}>355</Text>
            <Text style={styles.statLabel}>Solved</Text>
          </View>
          <View style={styles.statItem}>
            <Image source={require('../assets/icons/inventions.png')} style={styles.statIcon} />
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Inventions</Text>
          </View>
          <View style={styles.statItem}>
            <Image source={require('../assets/icons/rank.png')} style={styles.statIcon} />
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>Rank</Text>
          </View>
        </View>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('inventions')} style={[styles.tab, activeTab === 'inventions' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'inventions' && styles.activeTabText]}>My Inventions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('topics')} style={[styles.tab, activeTab === 'topics' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'topics' && styles.activeTabText]}>Topics Learned</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('settings')} style={[styles.tab, activeTab === 'settings' && styles.activeTab]}>
          <Text style={[styles.tabText, activeTab === 'settings' && styles.activeTabText]}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Render Content Based on Active Tab */}
      {renderTabContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    paddingVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconContainer: {
    position: 'absolute',
    top: 110,
    right: 120,
    backgroundColor: '#FFD700',
    borderRadius: 25,
  },
  editIcon: {
    width: 34.1,
    height: 34.1,
    resizeMode: 'contain',
  },
  userNameText: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Joystix',
    marginTop: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statIcon: {
    width: 36,
    height: 36,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Joystix',
  },
  statLabel: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'VT323',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
    marginVertical: 10,
    width: 343,
    marginLeft: 25
  },
  tab: {
    height: 35,
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: '#FFF500',
  },
  tabText: {
    fontSize: 14,
    color: '#808080',
    fontFamily: 'VT323',
  },
  activeTabText: {
    color: '#000',
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  inventionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  itemName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'VT323',
  },
  itemPrice: {
    fontSize: 15,
    color: '#FFFFFF',
    fontFamily: 'VT323',
  },
  playButtonContainer: {
    position: 'relative',
    width: 102,
    height: 48,
  },
  playButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  playButtonText: {
    position: 'absolute',
    top: '20%',
    left: '33%',
    color: '#000',
    fontFamily: 'VT323',
    fontSize: 15
  },
  topicItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: 343,
    height: 38,
    marginBottom: 15
  },
  topicName: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'VT323',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topicPoints: {
    fontSize: 13,
    color: '#B0B0B0',
    fontFamily: 'Joystix',
    marginRight: 5,
  },
  coinIcon: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
    marginRight: 15
  },
  settingsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  deleteText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'VT323',
    marginBottom: 20,
  },
  settingsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  yesButton: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  noButton: {
    backgroundColor: '#00FF00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'VT323',
  },
  topicsFrame: {
    width: 343,
    height: 38
  }
});
