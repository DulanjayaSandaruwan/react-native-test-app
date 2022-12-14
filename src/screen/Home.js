import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView>
        <View style={styles.imageHome}>
          <Image source={require('../assets/images/home_bg.png')} resizeMode='contain' style={{height:200}}/>
        </View>
        <View style={styles.container}>
          <Text style={styles.myTitle}>
            Welcome To My First App
          </Text>
          <Text style={styles.title}>
            Designed by Dulanjaya Sandaruwan
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
  },
  myTitle:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },
  imageHome:{
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:15,
    textAlign:'center',
    marginTop:450,
  },
});

export default Home;