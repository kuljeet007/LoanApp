import React from 'react';
import { FlatList } from 'react-native';
import Loans from '../../../components/card/Loans';
import { IMAGES } from '../../../constants/theme';

const PopularCourses = () => {

    const CourseData = [
        {
            "Id" : 1,
          "Loan No": "0020071006024229",
          "Loan Amount": 60000,
          "EMI": 204,
          "Interest Rate": 24,
          "Tenure": "365 Days",
          color : "#cee7e6"
        },
        {
            "Id" : 2,
          "Loan No": "0020071006022865",
          "Loan Amount": 200000,
          "EMI": 679,
          "Interest Rate": 24,
          "Tenure": "365 Days",
          color : "#eae3ef",
        },
        {
            "Id" : 3,
          "Loan No": "0020071006023394",
          "Loan Amount": 60000,
          "EMI": 204,
          "Interest Rate": 24,
          "Tenure": "365 Days",
          color : "#f2eee9"
        }
      ]

    const renderItem = ({item}) => {
        return(
            <Loans
                image={item.image}
                LoanNo={item["Loan No"]}
                LoanAmount =  {item["Loan Amount"]}
                EMI={item.EMI}
                InterestRate= {item["Interest Rate"]}
                Tenure = {item.Tenure}
                navigate={'CourseDetails'}
                color={item.color}
                Id = {item.Id}
            />
        )
    }

    return (
        <>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingLeft:15,paddingBottom:20,paddingTop:10}}
                data={CourseData}
                keyExtractor={item => item.Id}
                renderItem={renderItem}
            />
        </>
    );
};


export default PopularCourses;