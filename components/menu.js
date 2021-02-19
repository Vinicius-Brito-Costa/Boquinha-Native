import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icone from './../assets/hamburger-menu.png';

const Menu = (props) => {
    const black = props.black ? 'black' : 'white';
  return (
    <View style={{alignSelf: 'flex-end', padding: 20, position: 'absolute', top: 0, left: 0, zIndex: 2}}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        
        <Image source={Icone} style={{width: 40, height: 40, tintColor: black}} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;