import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation , useTheme} from '@react-navigation/native';
import { COLORS, FONTS, IMAGES, SIZES } from '../../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListStyle1 from '../../components/list/ListStyle1';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from 'react-native-gesture-handler';

const LoanDetail = [
    {
        id : "1",
        Name : 'Lokendra Singh',
        LoanId : "55454512214454545",
        LoanType : 'Personal Loan',
        LoanAmount : "50000",
        Duration : "10 Months",
        Paid : "40000",
        Remaining : "20000",
        EMI : "10000",
        PayBy : "5th of month",
        PaymentMode : "Online",
        Bank : 'State Bank Of India',
        Address : "4th floor krishna complex, manji ka hatha , Jodhpur, Rajasthan,342006",
        Account : "XXXXXXX698"
    }
]

const LoanDetails = () => {
    const theme = useTheme();
    const {colors} = theme;
    const navigation = useNavigation();

    return (
        <>
           <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
    <View
        style={{
            marginRight: 5,
            marginLeft:5,
            backgroundColor: '#E7ECF2',
            padding: 8,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: colors.borderColor,
        }}
    >
        <View style={{ paddingHorizontal: 12, paddingTop: 15, paddingBottom: 12 }}>
            {LoanDetail && LoanDetail[0] && (
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Name :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Loan ID :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].LoanId}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Loan Amount :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].LoanAmount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Duration :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Duration}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Paid :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Paid}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>EMI :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].EMI}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Pay by :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].PayBy}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Payment Mode :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].PaymentMode}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Bank :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Bank}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Address :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Address}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: colors.title, flex: 1 }}>Account :</Text>
                        <Text style={{ color: colors.title, flex: 1 }}>{LoanDetail[0].Account}</Text>
                    </View>
                </>
            )}
        </View>
    </View>

    <View style={[styles.card, {
    backgroundColor: colors.cardBg,
    marginTop: 5,
    flex: 1,  // Ensures the container takes up all available space
}]}>
    <View style={{
        borderBottomWidth: 1,
        borderColor: colors.borderColor,
        paddingBottom: 2,
        marginBottom: 5
    }}>
        <Text style={{ ...FONTS.h5, color: colors.title }}>Transactions</Text>
    </View>
    <ScrollView style={{ flex: 1 }}>
        <ListStyle1
            icon={<FontAwesome name={'check-circle'} size={18} color={'green'} />}
            title={'1 Month - EMI'}
            date={'Paid on 01 Jul,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'check-circle'} size={18} color={'green'} />}
            title={'2 Month - EMI'}
            date={'Paid on 01 Aug,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'times-circle'} size={18} color={'red'} />}
            title={'3 Month - EMI'}
            date={'Due on 05 Sep,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'times-circle'} size={18} color={'red'} />}
            title={'4 Month - EMI'}
            date={'Due on 05 Oct,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'times-circle'} size={18} color={'red'} />}
            title={'4 Month - EMI'}
            date={'Due on 05 Oct,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'times-circle'} size={18} color={'red'} />}
            title={'4 Month - EMI'}
            date={'Due on 05 Oct,2024'}
            Amount={'5000'}
        />
        <ListStyle1
            icon={<FontAwesome name={'times-circle'} size={18} color={'red'} />}
            title={'4 Month - EMI'}
            date={'Due on 05 Oct,2024'}
            Amount={'5000'}
        />
    </ScrollView>
</View>

</SafeAreaView>

        </>
    );
};

const styles = StyleSheet.create({
    card : {
        padding:15,
        borderRadius:SIZES.radius,
        marginBottom:15,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
})

export default LoanDetails;