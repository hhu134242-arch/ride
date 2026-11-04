import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
export function AuthButton({title,onPress}:{title:string;onPress:()=>void}) { return <Pressable onPress={onPress} style={styles.button}><Text style={styles.text}>{title}</Text></Pressable>; }
const styles=StyleSheet.create({button:{height:60,borderRadius:14,backgroundColor:colors.green,alignItems:'center',justifyContent:'center',marginTop:30},text:{fontSize:16,fontWeight:'600',color:'#fff',textTransform:'capitalize'}});
