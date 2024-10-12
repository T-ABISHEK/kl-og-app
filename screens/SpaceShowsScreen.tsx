import React, { useRef } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const { height, width } = Dimensions.get('window'); // Get screen width and height

const dummyShortsData = [
  { id: '1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '2', url: 'https://www.w3schools.com/html/movie.mp4' },
  { id: '3', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '4', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '5', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
];

export const SpaceShowsScreen = () => {
  const videoRefs = useRef<(Video | null)[]>([]);

  const renderShortItem = ({ item, index }: { item: { url: string }, index: number }) => (
    <View style={styles.shortContainer}>
      <Video
        ref={(ref) => { videoRefs.current[index] = ref }}
        source={{ uri: item.url }}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        useNativeControls={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyShortsData}
        renderItem={renderShortItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        pagingEnabled // Enable paging for snapping behavior
        decelerationRate="fast" // Ensure fast deceleration like Instagram or YouTube
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  flatListContainer: {
    paddingVertical: (height - 533) / 2, // Center the video by adding top/bottom padding
  },
  shortContainer: {
    width: 300,  // Fixed width for the video panel
    height: 533, // Fixed height for the video panel
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    alignSelf: 'center', // Ensure the panel is centered horizontally
    marginBottom: 100, // Add space between videos (adjust as needed)
  },
  video: {
    width: 300,
    height: 533,
  },
});
