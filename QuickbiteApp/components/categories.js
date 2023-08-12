import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoryCard imgUrl="https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg" title="  Japanese"/>
        <CategoryCard imgUrl="https://www.eatthis.com/wp-content/uploads/sites/4/2023/01/healthy-foods.jpg?quality=82&strip=all&w=1200" title="     Healthy"/>
        <CategoryCard imgUrl="https://etimg.etb2bimg.com/thumb/msid-94574753,width-1200,height-900,resizemode-4/.jpg" title="       Coffee"/>
        <CategoryCard imgUrl="https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900" title="       Burger"/>
        <CategoryCard imgUrl="https://food-images.files.bbci.co.uk/food/recipes/hawaiian_pizza_48114_16x9.jpg" title="           Pizza"/>
    
    </ScrollView>
  )
}

export default categories;