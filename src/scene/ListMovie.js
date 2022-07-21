import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from 'react-native'
import CardMovie from "../components/CardMovie";
import { connect } from 'react-redux';
import { getData } from "../state/actions/Actions";




const ListMovie = (props) => {

    useEffect(() => {
        props.dispatch(getData())

    }, [])

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        await setRefreshing(true)
        await props.dispatch(getData())
        await setRefreshing(false)
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            {
                props.loading === true ?
                    <>
                        <ActivityIndicator size={20}
                            style={{
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        />
                    </>
                    :
                    <CardMovie data={props.getData} title={'List Movie'} numColumns={2}
                        onRefresh={() => {
                            onRefresh()
                        }
                        }
                        refreshing={refreshing}
                    />
            }
        </View>
    )
}

const mapStateToProps = state => {
    return {
        getData: state.data,
        loading: state.loading
    }
}


export default connect(mapStateToProps)(ListMovie)
