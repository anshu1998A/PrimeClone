import React from 'react'
import {
    Image,
    FlatList,
    Text,
    View,
} from 'react-native';
import HomeStyle from '../styles/homePageStyle';
import RecommedData from '../DataDetails/RecommedData';

export default function RecommendedMovies() {
    return (
        <>
            <View >
                <Text style={HomeStyle.textStyle}>Recommended Movies</Text>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={RecommedData}
                    renderItem={(element) => {
                        return (
                            <View style= {HomeStyle.viewStyle}>
                            <Image style={HomeStyle.WatchStyle} source={element.item.uri}>
                            </Image> 
                       </View>
                        )
                    }} />
            </View>
        </>

    )
}
