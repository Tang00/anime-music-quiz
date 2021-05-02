import React, { useState }from 'react';
import { StyleSheet, Button, Text, View, useWindowDimensions } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import YoutubePlayer from 'react-native-youtube-iframe';

import useTimer from '../scripts/timer';
import { randomize } from '../scripts/random';
import { YOUTUBE_KEY } from '../constants/api';
import { addChoice, addPoint } from '../actions/quiz';

import Tally from '../components/tally';
import ChoiceButton from '../components/choicebutton';

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
    const dispatch = useDispatch();

    //multiple choice options
    const [choices, setChoices] = useState([]);

    //video_id for youtube link
    const [video, setVideo] = useState("");
    //youtube player autoplay
    const [playing, setPlaying] = useState(false);

    //calculate player size
    const window = useWindowDimensions();
    const width = window.width;
    const height = width * (9/16);

    //countdown timers
    const { timer, isActive, handleStart } = useTimer(3);

    
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

        handleStart();
    
    }, [])
    );


    const pressHandler = (index) => {
        //Process selection and move to selection screen
        setPlaying(false);

        const correct = animeList[0].title === choices[index];
        dispatch(addChoice(choices[index]));
        if (correct) {
            dispatch(addPoint());
        }
        
        navigation.navigate('Selection', {video: video, anime: animeList[0].title, user_choice: choices[index], correct: correct});
    };


    const renderCountdown = () => {
        if (isActive) {
            return <Text style={styles.title}>{timer}</Text>
        }
        else {
            return <Text style={styles.title}>Guess the opening theme!</Text>
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.videoPlayer}>
                <YoutubePlayer
                    height={height}
                    width={width}
                    play={!isActive}
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
            <View style={{position:'absolute',
                    left: 0,
                    top:0,
                    opacity:.99,
                    height: height,
                    width: width,
                    backgroundColor:'#393E46',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Tally />
                    {renderCountdown()}
            </View>
            <View style={styles.choices}>
                {choices.map((answer, index) => (
                    <ChoiceButton key={index} title={answer} onPress={() => {pressHandler(index)}} />
                ))}
            </View>
        </View>
    )
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
    choices: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        fontWeight: 'bold'
    },
    subtext: {
        color: '#EEEEEE',
        fontSize: 20
    }
  })