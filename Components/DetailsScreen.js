import React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'THÔNG TIN SINH VIÊN', // to add letter spacing on Android
    headerStyle: {
      backgroundColor: '#a3a8bc',
    },
    headerTintColor: '#fb1717c7',
    headerTitleStyle: {
      //fontWeight: 'bold',
      marginLeft: 40
    },
  };
  onPressAdd() {
    alert('This is the button');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
            source={require('../icons/iconsv.png')}
          >
          </Image>
          <Text style={{ color: '#c0b01d', margin: 5 }}>Information Students</Text>

        </View>
        <View style={styles.infocontainer}>
          <TextInput style={styles.masv}
            placeholder='Mã sinh viên'
            placeholderTextColor='rgba(255,255,255,0.8)'
            autoFocus={true}
            returnKeyType='next'
            autoCorrect={false}//không hiện ra gợi ý khi nhập
            onSubmitEditing={() => this.refs.edhoten.focus()}
          />
          <TextInput style={styles.hoten}
            placeholder='Họ tên sinh viên'
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType='next'
            autoCorrect={false}
            ref={"edhoten"}
            onSubmitEditing={() => this.refs.edlop.focus()}
          />
          <TextInput style={styles.lop}
            placeholder='Lớp'
            placeholderTextColor='rgba(255,255,255,0.8)'
            returnKeyType='next'
            autoCorrect={false}
            ref={"edlop"}
            onSubmitEditing={() => this.refs.edgioitinh.focus()}
          />
          <View style={styles.button}>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.btnthem}>
                <TouchableOpacity
                  onPress={this.onPressAdd}
                >
                  <Text style={styles.plus}>Add</Text>
                </TouchableOpacity>

              </View>
              <View style={styles.btnxoa}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Monhoc')}
                >
                  <Text style={styles.plus}>Delete</Text>
                </TouchableOpacity>

              </View>

            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.btnchitiet}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DanhSach')}
                >
                  <Text style={styles.plus1}>Chi tiết</Text>

                </TouchableOpacity>
              </View>
              <View style={styles.btnsua}>
                <TouchableOpacity
                   onPress={this.onPressAdd}
                >
                  <Text style={styles.plus1}>Edit</Text>

                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,// co giản màn hình
    backgroundColor: '#1a1e2c',
  },
  infocontainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,

  },
  logocontainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 20
  },
  logo: {
    width: 140,
    height: 140

  },
  masv: {
    borderColor: '#ff1d1d',
    margin: 10,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 5,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',

  },
  hoten: {
    borderColor: '#ff1d1d',
    margin: 10,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 5,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',

  },
  lop: {
    borderColor: '#ff1d1d',
    margin: 10,
    marginTop: 5,
    borderWidth: 1,
    marginBottom: 5,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',

  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  btnthem: {
    borderColor: 'gray',
    width: 150,
    height: 50,
    backgroundColor: 'green',
    margin: 10
  },
  btnxoa: {
    borderColor: 'gray',
    width: 150,
    height: 50,
    backgroundColor: 'tomato',
    margin: 10
  },
  btnchitiet: {
    borderColor: 'gray',
    width: 150,
    height: 50,
    backgroundColor: '#1f44db',
    margin: 10
  },
  btnsua: {
    borderColor: 'gray',
    width: 150,
    height: 50,
    backgroundColor: '#879815',
    margin: 10
  },
  plus: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10

  },
  plus1: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10

  }
});