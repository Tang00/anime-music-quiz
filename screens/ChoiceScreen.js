import React, { useState }from 'react';
import {  Button, Text, View } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';


export default function ChoiceScreen({ route, navigation }) {
    //CURRENTLY REFRESHED CONSTANTLY AND USES UP ALL YOUTUBE API QUOTA INSTANTLY

    //Testing API call
    //This will become global state variable
    const { json } = route.params;
    
    //randomize
    //temp solution
    function randomize(a,b) {
        return Math.random() - 0.5;
    }
    json.sort(randomize);

    //Will be state variable
    const num = 1;

    //Select choices
    //INDEX 0 IS THE CORRECT CHOICE
    const choices = [json[0].title, json[1].title, json[2].title, json[3].title];
    //Shuffle order
    choices.sort(randomize);

    //format search string for Youtube API request
    const query = encodeURI(json[0].title + ' op');
    
    //Youtube Data API Key
    const key = "";

    //Find Youtube video
    const [videos, setVideos] = useState();

    const getSong = async () => {
        try {
            //get Youtube search results
            let response = await fetch(
                'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+query+'&type=video&videoDuration=short&key='+key
            );
            let json = await response.json();
            setVideos(json.items);
        }
        catch (error) {
            console.error(error);
        }
    }

    //getSong();
    //console.log(videos);
    //const video = videos[0][id].videoId;
    video = "jiJu4K2jems"

    const checkBoxPressHandler = (index) => {
        //Process selection and move to selection screen
        navigation.navigate("Selection");
    }

    return (
        <View>
            <View>
                <YoutubePlayer
                    height={300}
                    play={true}
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
                <Text>{json[0].title} {json[0].mal_id}</Text>
            </View>
        </View>
    )
}