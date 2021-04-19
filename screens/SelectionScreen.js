import React from 'react';
import {Button, View, Text} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';


export default function SelectionScreen({ route, navigation }) {

  const { video, anime, user_choice, correct } = route.params;

  return (
    <View>
      <View>
        <YoutubePlayer
          height={300}
          play={true}
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
      <View>
        <Text>{correct ? "CORRECT" : "INCORRECT"}</Text>
        <Text>ANSWER: {anime}</Text>
        <Text>YOUR CHOICE: {user_choice}</Text>
        <Button title="Next" onPress={() => navigation.pop()} />
        <Button title="End" onPress={() => navigation.navigate('Result')} />
      </View>
    </View>
  );
}