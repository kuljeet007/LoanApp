import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS , IMAGES } from '../../../constants/theme';

const CategoryData = [
    {
        id : "1",
        icon : IMAGES.pl,
        title : "Personal Loan",
        color : "#cee7e6",
    },
    {
        id : "2",
        icon : IMAGES.EL,
        title : "Electronic Loan",
        color : "#eae3ef",
    },
    {
        id : "3",
        icon : IMAGES.HL,
        title : "Home Loan",
        color : "#f2eee9",
    },
    {
        id : "4",
        icon : IMAGES.VL,
        title : "Vehicle Loan",
        color : "#B8E2F6",
    },
    {
        id : "5",
        icon : IMAGES.GL,
        title : "Gold Loan",
        color : "#E7D4A4",
    }
]

const Categories = () => {

    const navigation = useNavigation();

    const handleNavigation = (item) => {
        // Navigate based on the item's ID
        switch (item.id) {
            case "1":
                navigation.navigate('LoanDocumentGenerator', { title: item.title, bgColor: item.color, catIcon: item.icon });
                break;
            case "2":
                navigation.navigate('AnotherComponent', { title: item.title, bgColor: item.color, catIcon: item.icon });
                break;
            
            default:
                navigation.navigate('DefaultComponent', { title: item.title, bgColor: item.color, catIcon: item.icon });
        }
    }

    const renderItem = ({item}) => {
        return(
            <View
                style={{
                    marginRight:10,
                    width:120,
                }}    
            >
                <TouchableOpacity
                    onPress={() => handleNavigation(item)}
                    style={{
                        paddingHorizontal:15,
                        paddingVertical:15,
                        backgroundColor:item.color,
                        borderRadius:15,
                        marginBottom:10,
                        flex:1,
                    }}
                >
                    
                    <Image
                        style={{
                            height:50,
                            width:50,
                            marginBottom:12,
                            marginTop:5,
                            //tintColor:COLORS.title,
                        }}
                        source={item.icon}
                    />
                    <Text style={{...FONTS.font,...FONTS.fontBold}}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft:15,paddingBottom:10,paddingTop:12}}
                data={CategoryData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </>
    );
};


export default Categories;