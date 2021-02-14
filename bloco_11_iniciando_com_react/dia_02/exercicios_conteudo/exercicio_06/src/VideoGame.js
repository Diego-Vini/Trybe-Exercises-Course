import React from 'react';

class VideoGame extends React.Component {
    render() {
        const { title, developer, sales } = this.props.game
        return <p><strong>{title}</strong>, feito pela <em>{developer}, </em>
         {sales} cópias vendidas </p>
    }
}

export default VideoGame;