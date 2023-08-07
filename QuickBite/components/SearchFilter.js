import { View, Text, FlatList } from 'react-native'
import React from 'react'
import restdata from "../data.json"
import RestrauntCard from './RestrauntCard'
import SearchCard from './SearchCard'

const SearchFilter = ({input}) => {
  return (
    <>
      <FlatList className="pb-96" data={restdata} renderItem={({item})=>{
        if(input === "")
        {
            return(
                <View>
    
                </View>
           )
        }
        if(item.title.toLowerCase().includes(input.toLowerCase()))
        {
            return(
                <SearchCard
                key={item.id}
                id={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                rating={item.rating}
                genre={item.genre}
                address={item.address}
                short_description={item.short_description}
                deshes={item.deshes}
                />
            )
        }



      }}/>
    </>
  )
}

export default SearchFilter