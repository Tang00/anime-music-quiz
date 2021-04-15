import React, { useEffect, useState }from 'react';
import { Button, Text, View } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

import { randomize } from '../Random';

/*
TODO:
Add redux / Make global state for anime list and results
Make multiple choice functionality
Block Screen until choice is made
change screen to display correctness when choice is made
Pop show from animelist
rerender with new question
Youtube player does not autoplay
*/
export default function ChoiceScreen({ route, navigation }) {

    //Get anime list from navigation
    const {anime} = route.params;
    const [animeList, setAnimeList] = useState(anime);
    //multiple choice options
    const [choices, setChoices] = useState(["","","",""]);
    //video_id for youtube link
    const [video, setVideo] = useState("");
    //for youtube player
    const [playing, setPlaying] = useState(true);

    useEffect(() => {
        let temp = animeList;
        temp.sort(randomize);
        setAnimeList(temp);

        let c = [animeList[0].title, animeList[1].title, animeList[2].title, animeList[3].title];
        c.sort(randomize);
        setChoices(c);

        //format search string for Youtube API request
        const query = encodeURI(animeList[0].title + ' op');
        //Youtube Data API Key
        const key = "";
        fetch (
            'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+query+'&type=video&videoDuration=short&key='+key
        )
        .then((response) => response.json())
        .then((json) => setVideo(json.items[0].id.videoId))
        .catch((error) => console.error(error));
}, []);

    const checkBoxPressHandler = (index) => {
        //Process selection and move to selection screen
        navigation.navigate("Selection");
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