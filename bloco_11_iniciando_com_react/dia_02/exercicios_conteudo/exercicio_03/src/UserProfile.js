import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'


class UserProfile extends React.Component {
    render() {
        return(
            <div>
                <p> { this.props.user.name } </p>
                <p> { this.props.user.email }</p>
                <Image source = { this.props.user.avatar} alternativeText='User Avatar'/>
            </div>
        );
    }
}
UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default UserProfile;