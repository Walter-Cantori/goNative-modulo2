import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, AsyncStorage, FlatList } from 'react-native';

import Filter from './Components/Filter';
import styles from './styles';
import { colors } from '../../styles';
import api from '../../services/api';
import ListItem from './Components/ListItems';

export default class Issues extends Component {
    static navigationOptions = {
        title: 'rocketnative',
        headerTintColor: colors.black,
    }

    static propTypes = {
        navigation: PropTypes.shape({
            state: PropTypes.shape({
                params: PropTypes.shape({
                    org: PropTypes.string,
                    name: PropTypes.string,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }

    state = {
        filter: 'all',
        issues: [],
        refreshing: false,
    }

    getSavedFilter = async () => {
        let filter = await AsyncStorage.getItem('@githuber:filter')

        if(filter){
            this.setState({ filter})
        }
        return
    }

    loadIssues = async () => {
        this.setState({ refreshing: true })

        const {name, org} = this.props.navigation.state.params
        const url = `repos/${name}/${org}/issues?state=${this.state.filter}`;

        const issues = await api.get(url)

        this.setState({ 
            issues: issues.data,
            refreshing: false 
        })
    }

    changeFilter = async (filter) => {
       await AsyncStorage.setItem('@githuber:filter', filter)
       this.setState( { filter })
       this.loadIssues()
    }

    componentDidMount = async () => {
        await this.getSavedFilter()

        await this.loadIssues()
       
    }

    renderListItem = ({ item }) => <ListItem issue={item} />

    render(){
        return(
            <View style={styles.container}>
                <Filter changeFilter={this.changeFilter} selected={this.state.filter}/>

                <FlatList
                    data={this.state.issues}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderListItem}
                    onRefresh={this.loadIssues}
                    refreshing={this.state.refreshing}
                />
            </View>
        )
    }
}