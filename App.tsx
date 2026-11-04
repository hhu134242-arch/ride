import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthHeader } from './src/components/AuthHeader';
import { AuthButton } from './src/components/AuthButton';
import { PhoneField } from './src/components/PhoneField';
import { NumericKeypad } from './src/components/NumericKeypad';
import { colors } from './src/theme/colors';

export default function App() {
  const [phone, setPhone] = useState('01480434005');
  const [step, setStep] = useState<'phone' | 'email' | 'verify'>('phone');
  const addDigit = (digit: string) => setPhone(value => `${value}${digit}`.slice(0, 15));
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <View style={styles.screen}>
        <View style={styles.glow} />
        <AuthHeader onClose={() => setStep('phone')} />
        <Text style={styles.title}>{step === 'verify' ? 'Verification' : step === 'email' ? 'Sign up with Email' : 'Enter your phone number'}</Text>
        {step === 'email' ? <View style={styles.form}><TextInput placeholder="Email address" keyboardType="email-address" style={styles.input} /><TextInput placeholder="Password" secureTextEntry style={styles.input} /></View> : <PhoneField value={phone} onChangeText={setPhone} />}
        <AuthButton title={step === 'phone' ? 'Sign in' : step === 'email' ? 'Sign Up' : 'Verify'} onPress={() => setStep(step === 'phone' ? 'verify' : 'phone')} />
        <Text style={styles.switch} onPress={() => setStep(step === 'email' ? 'phone' : 'email')}>{step === 'email' ? 'Sign in here' : 'Sign up here'}</Text>
        <NumericKeypad onPress={addDigit} onDelete={() => setPhone(value => value.slice(0, -1))} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ safe:{flex:1,backgroundColor:colors.white}, screen:{flex:1,overflow:'hidden',paddingHorizontal:24}, glow:{position:'absolute',width:218,height:183,borderRadius:100,backgroundColor:'#e8f8ed',top:-64,left:50,transform:[{rotate:'12deg'}]}, title:{marginTop:30,width:290,fontSize:32,lineHeight:44,fontWeight:'600',color:colors.ink}, form:{marginTop:28,gap:12}, input:{height:55,borderRadius:12,paddingHorizontal:18,backgroundColor:'#f5f5f4',fontSize:16}, switch:{alignSelf:'center',marginTop:16,fontSize:14,color:'#120e2d'}, });
