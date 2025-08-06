import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      

      <View style={{ backgroundColor: '#E94D3C', height: 150, alignItems: 'center', justifyContent: 'center', marginBottom:10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>RÖD</Text>
      </View>

      <View style={{ flexDirection: "row", height: 150, marginBottom: 10 }}>

        <View style={{ backgroundColor: "#63C465", flex: 1, marginRight:10 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>GRÖN</Text>
        </View>

        <View style={{ backgroundColor: "#F7CD47", flex: 1 }}>       
        </View>

      </View>

      <View style= {{flexDirection: "row", height: 80 }}>
        <View style={{backgroundColor:'#E94D3C', flex:2, marginRight:10 }}></View>
        <View style={{backgroundColor:'#000000', flex:0.6}}></View>
      </View>

      <View style={{flexGrow:1}}/>
            
      <View style={{ backgroundColor: '#FFA500', flexDirection:"row", height: 100, alignItems: 'center', justifyContent: 'flex-end', marginTop:10 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>ORANGE</Text>
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77B7EB',
    padding:10,
    paddingBottom:50
  },
 
});
