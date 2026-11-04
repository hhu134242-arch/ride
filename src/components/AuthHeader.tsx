import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
export function AuthHeader({onClose}:{onClose:()=>void}) { return <Pressable onPress={onClose} style={styles.button}><Text style={styles.icon}>×</Text></Pressable>; }
const styles=StyleSheet.create({button:{width:44,height:44,borderRadius:24,backgroundColor:'#fff',alignItems:'center',justifyContent:'center',marginTop:14,elevation:2},icon:{fontSize:28,lineHeight:31,color:'#041023'}});
