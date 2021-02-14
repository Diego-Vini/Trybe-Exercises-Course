import React from 'react';
import Data from './Data'
import VideoGame from './VideoGame'

class VideoGameList extends React.Component {
    render() {  
        return(
            <div>
                {Data.map((jogo, index) => {
                    return <VideoGame game = {jogo} key={index}/>
                })}

            </div>
        )
    }
}

export default VideoGameList;