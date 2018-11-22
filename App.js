import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Components/HomeScreen';
import DetailsScreen from './Components/DetailsScreen';
import DoiMatKhau from './Components/DoiMatKhau';
import AddCountNew from './Components/AddCountNew';
import DanhSach from './Components/DanhSach';
import Monhoc from './Components/Monhoc';
//import MuaHang from './Components/MuaHang';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    DoiMatKhau:DoiMatKhau,
    AddCountNew:AddCountNew,
    DanhSach:DanhSach,
    Monhoc:Monhoc,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
