import React, { useState } from 'react';
import {Button, View, Text} from 'react-native';

import { useSelector } from 'react-redux';

import YoutubePlayer from 'react-native-youtube-iframe';

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

  const goToResults = () => {
    setPlaying(false);
    navigation.navigate('Result');
  }

  return (
    <View>
      <View>
        <YoutubePlayer
          height={300}
          play={playing}
          //onReady={}
          //onChangeState={}
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
      <View >
        <Text>{correct ? 'CORRECT' : 'INCORRECT'}</Text>
        <Text>ANSWER: {anime}</Text>
        <Text>YOUR CHOICE: {user_choice}</Text>
        <Button title='Next' onPress={() => navigation.pop()} />
        <Button title='End' onPress={() => goToResults()} />
      </View>
    </View>
  );
}