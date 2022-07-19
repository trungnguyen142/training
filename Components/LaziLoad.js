import React,{useState,useEffect} from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

const LaziLoad = () => {
    const [page, setPage] = useState(1)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getList()
    }, [page])

    const getList = () => {
        getListOrder(1,page)
        .then(data => console.log(data))
        setLoading(false)
    }

    const ListFooterComponent = () => {
        return (
            loading ?
            <View style={{ marginTop:10, alignItems:'center' }}>
                <ActivityIndicator size="large" color="grey" />
            </View> 
            :
            null
        )
    }

    const handleLoadMore = () => {
        setPage( page + 1 )
        setLoading(true)
    }
    return (
        <>
            <FlatList 
            ListFooterComponent={ListFooterComponent}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0}
            />
        </>
    )
}

export default LaziLoad
