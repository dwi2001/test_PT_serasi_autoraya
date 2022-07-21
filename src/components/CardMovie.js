import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';




const CardMovie = (props) => {

    const navigation = useNavigation();

    const renderMovie = (item) => {
        const items = item.item
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailMovie', { items })} style={{ flex: 1 }}>
                <View style={{ padding: 10, justifyContent: 'center', flexDirection: 'column' }}>
                    <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + items.backdrop_path }} style={{ ...styles.image }} />
                    <View style={{ ...styles.rating }} >
                        <Icon name="star" color={'#fcbb23'} />
                        <Text style={{ color: 'white' }}> {items.vote_average}</Text>
                    </View>
                    <View style={{ ...styles.label }}>
                        <Text style={{ ...styles.Text }} >{items.title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <>
            <View style={{}}>
                <View style={{
                    ...styles.shadow
                }}>

                    <FlatList
                        data={props?.data}
                        renderItem={renderMovie}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        numColumns={2}
                        ListHeaderComponent={() =>
                            <>
                                <Text style={{ padding: 10, fontSize: 16, fontWeight: 'bold' }}>
                                    {props.title}
                                </Text>
                            </>
                        }
                        onRefresh={() => props.onRefresh()}
                        refreshing={props.refreshing}
                    />
                </View>
            </View>
        </>
    )
}
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    wrap: {
        padding: 10,
        justifyContent: 'center'
    },
    title: {
        position: 'absolute',
        top: 0,
        left: 40,
        right: 0,
        bottom: 10,
        justifyContent: 'center',
    },
    label: {
        position: 'absolute',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 0
    },
    Text: {
        color: 'yellow',
        position: 'absolute',
        bottom: 20,
        width: 100,
        textAlign: 'center',
        fontSize: 12
    },
    rating: {
        flexDirection: 'row',
        position: 'absolute',
        top: 25,
        left: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 3,
        alignItems: 'center',
        borderRadius: 5
    },
    image: {
        width: (width - 40) / 2,
        height: 200,
        borderRadius: 10
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        backgroundColor: '#fff'
    },
    title: {

    }
})

export default CardMovie