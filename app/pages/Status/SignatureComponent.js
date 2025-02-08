import SignatureScreen from "react-native-signature-canvas";
import { View } from "react-native";

const SignatureComponent = () => {
    const onOK = (signature)=>{
        console.log('-------------------------------------------------------------------------------');
        console.log(signature);
    }
  return (
    <View style={{ flex: 1 }}>
      <SignatureScreen
        onOK={(signature) => onOK(signature)} 
        descriptionText="Sign here"
        clearText="Clear"
        confirmText="Save"
        webStyle={`.m-signature-pad { border: 2px solid #000; }`}
      />
    </View>
  );
};

export default SignatureComponent;
