import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <img className = 'ImageCard' src = { this.props.image}/>
        );
    }
}

export default Image;