
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
export default class AddCountNew extends React.Component {
    static navigationOptions = {
        title: 'REGISTRATION', // to add letter spacing on Android
        headerStyle: {
            backgroundColor: '#0b2e05',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 70
        },
};
onPressAdd() {
    alert('This is the button');
  }
render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.hoten}
                placeholder='Họ tên'
                placeholderTextColor='rgba(255,255,255,0.8)'
                autoFocus={true}
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edemail.focus()}
            />
            <TextInput style={styles.email}
                placeholder='Email'
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edphone.focus()}
            />
            <TextInput style={styles.sodienthoai}
                placeholder='Số điện thoại'
                placeholderTextColor='rgba(255,255,255,0.8)'
                //autoFocus={true}
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edmatkhau.focus()}
            />
              <TextInput style={styles.matkhau}
                placeholder='Mật khẩu'
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.ednhaplai.focus()}
            />
              <TextInput style={styles.nhaplai}
                placeholder='Nhập lại mật khẩu'
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
            />
            <View style={{flexDirection:'column' }}>
            <View style={styles.btnxacnhan}>
                <TouchableOpacity
                onPress={this.onPressAdd}
                >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Đăng Ký</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnhuy}
            onPress={this.onPressAdd}
            >
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Hủy</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1e2c',
    },
    hoten: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    email: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    sodienthoai: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    matkhau: {
        margin: 20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    nhaplai: {
        borderColor: 'gray',
        margin: 20,
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    btnxacnhan: {
        borderColor: 'gray',
        marginTop: 5,
        borderWidth:1,
        alignItems: 'center',
        margin: 20,
        height: 40,
        marginBottom: 5,
        backgroundColor: '#1be11b',
    },
    btnhuy: {
         borderColor: 'gray',
         alignItems: 'center',
         borderWidth:1,
         marginTop: 5,
         margin: 20,
         height: 40,
         marginBottom: 5,
         backgroundColor: '#be0d0d',
    },
});