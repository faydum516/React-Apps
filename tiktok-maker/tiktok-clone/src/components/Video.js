import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, likes, shares, messages, channel, description, song }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className="video">
            <video onClick={handleVideoPress} className="videoPlayer" loop ref={videoRef} src={url}></video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    );
}

export default Video;