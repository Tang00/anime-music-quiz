import React, { useState } from 'react';
import { StyleSheet, Image, Button, View, Text, useWindowDimensions } from 'react-native';

import { useSelector } from 'react-redux';

import YoutubePlayer from 'react-native-youtube-iframe';

import tally from '../components/tally';


/* 
TODO:
unmount screen when navigating to results
or
stop video playback when navigating to results

make UI look nice
*/

export default function SelectionScreen({ route, navigation }) {

  const [playing, setPlaying] = useState(true);

  const { video, anime, user_choice, correct } = route.params;

  const animeList = useSelector((state) => state.animeReducer.animelist);

  const poster = animeList[0].image_url;

  //calculate player size
  const window = useWindowDimensions();
  const width = window.width;
  const height = width * (9/16);

  const goToResults = () => {
    setPlaying(false);
    navigation.navigate('Result');
  }

  return (
    <View style={styles.container}>

      <View style={styles.videoPlayer}>
        <YoutubePlayer
          height={height}
          width={width}
          play={playing}
          videoId={video}
          initialPlayerParams={{
            controls:false,
            preventFullScreen:true,
            start:0,
            autoplay:1
          }}
          webViewProps={{
            scrollEnabled:false,
            allowsInlineMediaPlayback:true
          }}
        />
      </View>

      <View style={styles.header}>
        <Image style={styles.image} source={{uri: poster}}/>
        <View style={styles.titleCard}>
          <Text style={styles.title}>{anime}</Text>
        </View>
      </View>

      <View style={styles.choices}> 
        <Text style={styles.text}>{correct ? 'Correct!' : 'Incorrect!'}</Text>
        <Text style={styles.subtext}>Your choice:</Text>
        <Text style={styles.subtext}>{user_choice}</Text>
        {tally()}
      </View>

      <View style={styles.navigation}>
        <Button title='Next Question' onPress={() => navigation.pop()} />
        <Button title='End Quiz' onPress={() => goToResults()} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#393E46',
  },
  videoPlayer: {
    //flex: 2,
    alignItems: 'center'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 10,
  },
  titleCard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10
  },
  choices: {
    flex: 1,
    alignItems: 'center',
  },
  navigation: {
    flex: 1,
    alignItems: 'center',
    color: '#00ADB5'
  },
  title: {
    color: '#00ADB5',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text: {
    color: '#AAD8D3',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtext: {
    color: '#EEEEEE',
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    height: 120,
    width: 80,
  }
})