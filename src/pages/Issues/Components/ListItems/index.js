import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ issue:{ title, user, html_url } }) => {
    let formattedTitle = title.length >= 25
        ? title.slice(0, 25) + '...' 
        : title

    return (
        <TouchableOpacity 
            style={styles.box} 
            onPress={ () => Linking.openURL(html_url) }
        >
            <Image style={styles.boxAvatar} source={{ uri: user.avatar_url }} />
            <View style={styles.boxDesc}>
                <Text style={styles.boxName}>{formattedTitle}</Text>
                <Text style={styles.boxOrg}>{user.login}</Text>
            </View>

            <Icon style={styles.boxIcon} name="angle-right" size={20}/>

        </TouchableOpacity>
    )
};

ListItem.propTypes = {
    issue: PropTypes.shape({
        title: PropTypes.string.isRequired,
        user: PropTypes.shape({
            avatar_url: PropTypes.string.isRequired,
            login: PropTypes.string.isRequired,
        }),
        html_url: PropTypes.string.isRequired,
    })
}


export default ListItem;