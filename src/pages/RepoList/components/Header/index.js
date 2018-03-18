import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import api from '../../../../services/api';

export default class Header extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            dispatch: PropTypes.func,
        }).isRequired,
    };

    state = {
        repoTxt: "",
        inputStyle: "textInput",
        inputPlaceholder: "Adicionar repositório",
    };

    getRepos = async () => {

        if(this.state.repoTxt.split('/').length < 2) {
            this.setState({ 
                repoTxt: "",
                inputStyle: "textInputError",
                inputPlaceholder: "Formato esperado: org ou usuario/repositorio",
            })
            return
        } 

        try {
            const repo = await api.get(`/repos/${this.state.repoTxt}`)

            let newRepo = {
                id: repo.data.id,
                org: this.state.repoTxt.split('/')[1],
                name: this.state.repoTxt.split('/')[0],
                avatar: repo.data.owner.avatar_url,
            }

            let repos = await AsyncStorage.getItem('@githuber:repos')

            if( !repos){
                await AsyncStorage.setItem('@githuber:repos', JSON.stringify([newRepo]))
            }else {
                let parsedRepos = [...JSON.parse(repos), ...[newRepo]]
                await AsyncStorage.setItem('@githuber:repos', JSON.stringify(parsedRepos))
            }

            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'List' })
                ]
            })
          
            this.props.navigation.dispatch(resetAction)

        }catch(err){
            this.setState({ 
                inputStyle: "textInputError",
                inputPlaceholder: "Repositório não encontrado",
            })
            console.tron.log(`error from header  ${err}`)
        }finally{
            this.setState({
                repoTxt: ""
            });
        };

    };

    render(){
        return(
            <View style={styles.container}>
            <TextInput
                style={styles[this.state.inputStyle]}
                placeholder={this.state.inputPlaceholder}
                onChangeText={repoTxt => this.setState({ 
                    repoTxt, 
                    inputStyle: "textInput",
                    inputPlaceholder: "Adicionar repositório",
                })}
                autoCapitalize='none'
                value={this.state.repoTxt}
                
            />
            <TouchableOpacity onPress={this.getRepos} >
                <Icon name="plus" size={16} />
            </TouchableOpacity>
        </View>
        )
    }
}

   

