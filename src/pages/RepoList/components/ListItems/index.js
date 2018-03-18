import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

import styles from './styles';

const ListItem = ({ repository, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Issues', {
            org: repository.org,
            name: repository.name
        }) } style={styles.box}>
            <Image style={styles.boxAvatar} source={{ uri: repository.avatar }} />
            <View style={styles.boxDesc}>
                <Text style={styles.boxName}>{repository.name}</Text>
                <Text style={styles.boxOrg}>{repository.org}</Text>
            </View>

            <Icon style={styles.boxIcon} name="angle-right" size={20}/>

        </TouchableOpacity>
    )
};

ListItem.propTypes = {
    repository: PropTypes.shape({
        org: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
}

export default ListItem;