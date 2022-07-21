import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';





const DetailMovie = (props) => {
    const data = props.route.params.items


    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{ flex: 1 }} >
                <ImageBackground source={{ uri: 'https://image.tmdb.org/t/p/w500/' + data.poster_path }} style={{ width: '100%', height: 250, resizeMode: 'stretch' }} blurRadius={5}>

                    <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + data.poster_path }} style={{ width: '100%', height: 250, resizeMode: 'contain' }} />
                </ImageBackground>

                <View style={{ ...styles.containerDesc, ...styles.shadow }}>
                    <View style={{ flexDirection: 'column', }}>
                        <Text>Title</Text>
                        <Text>Country</Text>
                        <Text>Release Date</Text>
                        <Text>Popularity</Text>
                        <Text>Vote Rating</Text>
                        <Text>Overview</Text>
                        {
                            data.adult === true ?
                                <Image source={require('../asset/adult.jpg')} style={{ width: 50, height: 50 }} /> :
                                <View style={{ padding: 15, justifyContent: 'center', alignContent: 'center', borderBottomWidth: 1 }}>
                                    <Icon name="users" size={30} />
                                </View>
                        }
                    </View>
                    <View style={{ flexDirection: 'column', width: '70%', paddingLeft: 15, }}>
                        <Text>: {data.title}</Text>
                        <Text>: {data.original_language}</Text>
                        <Text>: {data.release_date}</Text>
                        <Text>: {data.popularity}</Text>
                        <Text>: {data.vote_average}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text >: </Text>
                            <Text style={{ width: 250, textAlign: 'justify' }}>{data.overview}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ padding: 24 }}>
                <TouchableOpacity style={{ ...styles.btn }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to List</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#DAA520',
        borderRadius: 12
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: '#fff'
    },
    containerDesc: {
        flexDirection: 'row', padding: 20,


    }
})

export default DetailMovie;