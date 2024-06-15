import { Video } from "expo-av";
import {Button, Image, Text, View} from "react-native-ui-lib";
import { useEffect, useState,useRef } from "react";
import { Asset } from 'expo-asset';
import videoPaths from '../data/videoList'; // Импортируем объект с путями к видеофайлам
import noImage from "../assets/icons/no-image.png"
export default function DisplayVideo({ data, page }) {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [videoMissing,setVideoMissing] = useState(false);
const videoRef = useRef(null);

  const handleRestartVideo = () => {
    videoRef.current?.playFromPositionAsync(0);
  };
    useEffect(() => {
        if (data && page !== undefined) {
            const videoIndex = data[page].media;
            if(data[page].media.length===0){
           setVideoMissing(true);
           return;
            }
            console.log(data[page].media)
            const videoModule = videoPaths[videoIndex];

            if (videoModule) {
                const videoAsset = Asset.fromModule(videoModule);
                videoAsset.downloadAsync().then(() => {
                    setCurrentVideo(videoAsset.localUri || videoAsset.uri);
                    setVideoMissing(false);
                });
            }
        }
    }, [data, page]);

    return (
        <View style={{width:'90%',height:300,display:'flex',alignSelf:'center',alignItems:"center"}}>
            {currentVideo !== null && videoMissing!== true && (
                <Video
                    source={{ uri: currentVideo }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode='cover'
                    shouldPlay
                    useNativeControls={true}
                    style={{ width: '100%', height:300,borderRadius:30,borderWidth:5,borderColor:'#f2f2f2'}}
                />
            )}
            {videoMissing===true && (
            <Image source={noImage} style={{width:"70%",height:300,}}/>
                )}
        </View>
    );
}