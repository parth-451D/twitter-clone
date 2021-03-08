import React ,{useState} from 'react';
import './tweetbox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

const [tweetMessage, setTweetMessage] = useState("");
const [tweetImage, setTweetImage] = useState("");
const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
        displayName: "parth",
        username: "Parth421",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:""

    });

    setTweetMessage("");
    setTweetImage("");
};


    return (
        <div className="tweetBox">
        <form >
            <div className="tweetBox_input">
            <Avatar src="https://yt3.ggpht.com/yti/ANoDKi5k2unzUQaPprFcPOAjgQwksT_uZQUPDa27gg=s88-c-k-c0x00ffffff-no-rj-mo" />
            <input value={tweetMessage} onChange={e => setTweetMessage(e.target.value)} type="text" placeholder="what's happening ?"/>
            </div>
            <input value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_inputImage" type="text" placeholder="Enter image URL"/>
            <Button 
            onClick={sendTweet}
            type="submit"
            className="tweetBox_Button">Tweet</Button>
        </form>
            
        </div>
    );
    }
export default TweetBox;
