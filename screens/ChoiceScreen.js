import React, { useEffect, useState }from 'react';
import { Button, Text, View } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';

import YoutubePlayer from 'react-native-youtube-iframe';

import { randomize } from '../Random';
import { YOUTUBE_KEY } from '../constants/api';

import { addChoice, addPoint } from '../actions/quiz';

/*
TODO:
Make global state for results
Pop show from animelist
rerender with new question

fix autoplay
Hide video in question screen or play audio only

make a better randomize function

Make offline / top 200 mode / most popular 200 mode
make user list mode

Make UI look nice
*/


export default function ChoiceScreen({ navigation }) {

    //redux state hook
    const animeList = useSelector((state) => state.animeReducer.animelist);
    //multiple choice options
    const [choices, setChoices] = useState([]);
    //video_id for youtube link
    const [video, setVideo] = useState("");
    //youtube player autoplay
    const [playing, setPlaying] = useState(true);

    const dispatch = useDispatch();

    useFocusEffect(
        
        React.useCallback(() => {
        animeList.sort(randomize);

        let c = [animeList[0].title, animeList[1].title, animeList[2].title, animeList[3].title, animeList[4].title, animeList[5].title, animeList[6].title, animeList[7].title];
        c.sort(randomize);
        setChoices(c);

        //format search string for Youtube API request
        const query = encodeURI(animeList[0].title + ' op');
        const key = YOUTUBE_KEY;

        fetch (
            'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+query+'&type=video&videoDuration=short&key='+key
        )
        .then((response) => response.json())
        .then((json) => setVideo(json.items[0].id.videoId))
        .catch((error) => console.error(error));
    
    }, [])
    );

    const checkBoxPressHandler = (index) => {
        //Process selection and move to selection screen
        const correct = animeList[0].title === choices[index];
        dispatch(addChoice(choices[index]));
        if (correct) {
            dispatch(addPoint());
        }
        navigation.navigate('Selection', {video: video, anime: animeList[0].title, user_choice: choices[index], correct: correct});
    };

    const playerIsReady = () => {
        setPlaying(true);
    }

    return (
        <View>
            <View>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    onReady={playerIsReady}
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
                {choices.map((answer, index) => (
                    <Button key={index} title={answer} onPress={() => {checkBoxPressHandler(index)}} />
                ))}
            </View>
        </View>
    )
}