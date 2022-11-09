import React from "react";
import { Image, Text, View } from "react-native";
import "./App.css";
import { vegetableData } from "./data";
import { fruitData } from "./data";
import { dairy } from "./data";

import { meat } from "./data";


export const Stocks = () => {
  return (
    <>
    <View style={{
            padding: 10,
          }}>
     <Text
          style={{
            paddingTop: 30,
            color:'#30384d',
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 20,
            
          }}
        >
          Vegetables
        </Text>
      <div style={{display:"flex"}}>
       
        {vegetableData.map((data, key) => {
          return (
            
              <span key={{ key }}>
                <Image
                  style={{ width: 100, height: 100, margin: 5, borderRadius:5}}
                  source={{ uri: data.imageUrl }}
                />
                <div style={{ padding : 5, color: '#7e8a9a', fontFamily:'Montserrat', fontSize:13 }}>{data.Ingredient}</div>
              </span>
            
          );
        })}
      </div>
      <Text
          style={{
            paddingTop: 30,
            
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Fruits
        </Text>
      <div style={{display:"flex"}}>
       
        {fruitData.map((data, key) => {
          return (
            
              <span key={{ key }}>
                <Image
                  style={{ width: 100, height: 100, margin: 5, borderRadius:5 }}
                  source={{ uri: data.imageUrl }}
                />
                <div style={{ padding : 5, color: '#7e8a9a', fontFamily:'Montserrat', fontSize:13 }}>{data.Ingredient}</div>
              </span>
            
          );
        })}
      </div>

      <Text
          style={{
            paddingTop: 30,
            
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Dairy
        </Text>
      <div style={{display:"flex"}}>
       
        {dairy.map((data, key) => {
          return (
            
              <span key={{ key }}>
                <Image
                  style={{ width: 100, height: 100, margin: 5, borderRadius:5 }}
                  source={{ uri: data.imageUrl }}
                />
                <div style={{ padding : 5, color: '#7e8a9a', fontFamily:'Montserrat', fontSize:13 }}>{data.Ingredient}</div>
              </span>
            
          );
        })}
      </div>
      <Text
          style={{
            paddingTop: 30,
            
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Meat      </Text>
      <div style={{display:"flex"}}>
       
        {meat.map((data, key) => {
          return (
            
              <span key={{ key }}>
                <Image
                  style={{ width: 100, height: 100, margin: 5, borderRadius:5 }}
                  source={{ uri: data.imageUrl }}
                />
                <div style={{ padding : 5, color: '#7e8a9a', fontFamily:'Montserrat', fontSize:13 }}>{data.Ingredient}</div>
              </span>
            
          );
        })}
      </div>
      
      </View>
      

    </>
  );
};
