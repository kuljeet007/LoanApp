
import React, { useState } from 'react';
import { 
    ActivityIndicator,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from '../../constants/theme';
import Auth from "../../Service/Auth";
import { setUser } from '../../Redux/reducer/user';
import { API_WEB_URLS } from '../../../ConstAPI';
import { API_HELPER } from '../../../ApiHelper';

const SignIn = (props) => {

    const dispatch = useDispatch();

    const [passwordShow , setPasswordShow ] = useState(true);
    const [loading , setLoading ] = useState(false);
    
    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }

    const [email , setemail] = useState('');
    const [pass , setpass] = useState('');
    const loginUser = async () => {
        try{

          
            if(email == "" || pass == ""){
                setLoading(false);
                Toast.show('Fill in all the fields!');
                return false;
            }
            setLoading(true);
                    let vformData = new FormData();
        
                    vformData.append("UserName", email);
                    vformData.append("UserPassword", pass);
                    let AuthUser = function() {
                        return API_HELPER.apiPOST_Multipart(API_WEB_URLS.BASE+API_WEB_URLS.Login , vformData).then(token => { return token } )
                      }
                      let userToken = AuthUser()
                      
                return new Promise  ((resolve, reject)  => {
                setTimeout(() => {
                userToken.then( async(result)=> {
   
      if (result.data.response[0].Id > 0) {
        let users = [
            {
              Id: result.data.response[0].Id,
              Name: result.data.response[0].Name,
              username: email ,// Include email property
              email: result.data.response[0].Email,
              mobileno: result.data.response[0].MobileNo,
              img : result.data.response[0].img,
            },
          ];
          
          // Filtering the users array based on email and password
          const validUser = users.filter(
            usr => usr.email === email && usr.password === pass
          );
          
          // Dispatching the setUser action
          dispatch(setUser(users));
          
          // Storing the users array in AsyncStorage
          await Auth.setAccount(users);
                props.navigation.navigate('DrawerNavigation')
                Toast.show('Login Successfully!');
                
                setLoading(false);
        resolve([200, validUser[0]]);
        
      } else {
        Toast.show('Username and password are invalid!');
        setLoading(false);
        // reject([
        //   "Username and password are invalid. Please enter correct username and password",
        // ])
      }
    })
  
  })
   })
           
            //     console.log('User data: ', userData);
               
                
            

           
        }
        catch(e){
            console.log(e);
        }


    }


    return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        {loading ?
            <View
                style={{
                    position:'absolute',
                    zIndex:1,
                    height:'100%',
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'rgba(0,0,0,.3)',
                }}
            >
                <ActivityIndicator size={'large'} color={COLORS.white}/>
            </View>
            :
            null
        }

        <KeyboardAvoidingView
            style={{
                flex:1
            }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <ImageBackground style={{ flex:1, maxHeight:500}} source={IMAGES.background}>

                <View style={{
                    
                    // alignItems:'center',
                    // justifyContent:'center',
                    
                }}>
                    {/* <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            top:20,
                            right:-50,
                            transform:[{rotate:'-120deg'}]
                        }}
                    ></LinearGradient>
                    <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            bottom:0,
                            left:-50,
                            transform:[{rotate:'120deg'}]
                        }}
                    ></LinearGradient> */}
                     <Image
                        style={{
                            width:130,
                            height:130,
                            marginBottom:50,
                            resizeMode:'contain',
                            marginLeft:200
                        }}
                        source={IMAGES.light}
                    />
                    {/* <Image
                        style={{
                            width:90,
                            height:90,
                            marginBottom:50,
                            resizeMode:'contain',
                        }}
                        source={IMAGES.appLogo}
                    /> */}
                    {/* <Image 
                        style={{
                            position:'absolute',
                            bottom:0,
                            width:'100%',
                            resizeMode:'stretch',
                            height:65,
                        }}
                        source={IMAGES.loginShape}
                    /> */}
                </View>

                <View
                 //style={{backgroundColor:'#fff'}}
                 >
                    <View style={[GlobalStyleSheet.container,{marginTop:100}]}>
                        <View style={{marginBottom:0}}>
                            <Text style={[FONTS.h2,{textAlign:'center',color:COLORS.black}]}>Sign in</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:COLORS.black , opacity:.7}]}></Text>
                        </View>

                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.user}
                                />
                                
                            </View>
                            <TextInput
                                style={[styles.inputStyle]}
                                defaultValue=""
                                placeholder='Mobile No.'
                                onChangeText={(value)=> setemail(value)}
                                value={email}
                                placeholderTextColor={'#707170'}
                                keyboardType='number-pad'
                            />
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.lock}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={passwordShow}
                                style={[styles.inputStyle]}
                                onChangeText={(value)=> setpass(value)}
                                value={pass}
                                placeholder='Password'
                                placeholderTextColor={'#707170'}
                            />
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Password"
                                accessibilityHint="Password show and hidden"
                                onPress={() => handndleShowPassword()}
                                style={styles.eyeIcon}>
                                <SvgXml
                                    xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'flex-end',marginBottom:15}}>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                                onPress={() => props.navigation.navigate('ForgotPassword')}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom:10}}>
                            <CustomButton 
                                onPress={loginUser}
                                title="SIGN IN"/>
                        </View>
                       
                        <View
                            style={{
                                flexDirection:'row',
                                paddingBottom:20,
                            }}
                        >
                           
                           
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15}}>
                            <Text style={[FONTS.font,{color:COLORS.black,opacity:.7}]}>Don’t have an account?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                                onPress={() => props.navigation.navigate('CreateAccount')}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Signup here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ImageBackground>
            
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({

    inputStyle:{
        ...FONTS.fontLg,
        height:50,
        paddingLeft:60,
        borderWidth : 1,
        borderRadius: SIZES.radius,
      //  color:COLORS.black,
        backgroundColor:'#E5E4E4',
        borderColor: COLORS.primary,
        zIndex: 1
    },
    inputIcon:{
        //backgroundColor:COLORS.yellow,
        height:40,
        width:40,
        borderRadius:10,
        position : 'absolute',
        
        left:10,
        top : 5,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 2
    },
    eyeIcon:{
        position:'absolute',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        right:0,
        zIndex:1,
        top:0,
    }
  
})


export default SignIn;
