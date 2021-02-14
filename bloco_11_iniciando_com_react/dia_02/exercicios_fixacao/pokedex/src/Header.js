import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className='divHeader'>
                <h1> {this.props.textHeader} </h1>
            </div>
        );
    }
}

export default Header;