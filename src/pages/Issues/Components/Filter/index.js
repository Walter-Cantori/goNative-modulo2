import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import PropTypes from 'prop-types';

const Filter = ({selected, changeFilter }) =>
    <View style={styles.container}>

        <TouchableOpacity onPress={() => changeFilter('all')}>
            <Text style={selected === 'all'? styles.activeTxt: styles.inactiveTxt}>Todas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeFilter('open')}>
            <Text style={selected === 'open'? styles.activeTxt: styles.inactiveTxt}>Abertas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeFilter('closed')}>
            <Text style={selected === 'closed' ? styles.activeTxt: styles.inactiveTxt}>Fechadas</Text>
        </TouchableOpacity>

    </View>

Filter.propTypes = {
    selected: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

export default Filter;