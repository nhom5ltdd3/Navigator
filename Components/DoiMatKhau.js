
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity } from 'react-native';
export default class DoiMatKhau extends React.Component {
    static navigationOptions = {
        title: 'FORGOT YOUR PASSWORDS', // to add letter spacing on Android
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft: 20
        },
};
onPressAdd() {
    alert('This is the button');
  }
render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.matkhaucu}
                placeholder='Nhập mật khẩu'
                placeholderTextColor='rgba(255,255,255,0.8)'
                autoFocus={true}
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edhoten.focus()}
            />
            <TextInput style={styles.matkhaumoi}
                placeholder='Mật khẩu mới'
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edhoten.focus()}
            />
            <TextInput style={styles.xacnhan}
                placeholder='Xác nhận mật khẩu mới'
                placeholderTextColor='rgba(255,255,255,0.8)'
                returnKeyType='next'
                autoCorrect={false}//không hiện ra gợi ý khi nhập
                onSubmitEditing={() => this.refs.edhoten.focus()}
            />
            <View style={{flexDirection:'column' }}>
            <View style={styles.btnxacnhan}>
                <TouchableOpacity
                onPress={this.onPressAdd}
                >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>Xác nhận</Text>
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
    matkhaucu: {
        borderColor: 'gray',
        margin:20,
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    matkhaumoi: {
        margin:20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    xacnhan: {
        margin:20,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    btnxacnhan: {
        borderColor: 'gray',
        alignItems: 'center',
        borderWidth:1,
        marginTop: 5,
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