import React, { Component } from 'react';
import { View, Text, AsyncStorage, FlatList } from 'react-native';

import Header from './components/Header';
import styles from './styles';
import ListItem from './components/ListItems';


export default class RepoList extends Component {
    static navigationOptions = ({navigation}) => ({
        header: <Header navigation={navigation}/>,
    });

    state = {
        repos: null,
        refreshing: false,
    }

    componentDidMount = () => {
        this.loadRepositories()
    }
    
    loadRepositories = async () => {
        this.setState({ refreshing: true });
        const repos = await AsyncStorage.getItem('@githuber:repos')
        
        this.setState({ 
          repos: JSON.parse(repos),
          refreshing: false,
        })
    }

    renderListItem = ({ item }) => <ListItem repository={item} navigation={this.props.navigation}/>

    render(){
        return(
            <View style={styles.container}>

                <FlatList
                    data={this.state.repos}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderListItem}
                    onRefresh={this.loadRepositories}
                    refreshing={this.state.refreshing}
                />
               
            </View>


        )
    }
}