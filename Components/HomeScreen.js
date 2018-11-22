
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'LOGIN', // to add letter spacing on Android
        headerStyle: {
            backgroundColor: '#686305',
        },
        headerTintColor: '#3d0606',
        headerTitleStyle: {
            fontWeight: 'bold',
        marginLeft: 150
    },
};
render() {
    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <Image style={styles.logo}
                    source={require('../icons/logo.png')}
                >
                </Image>
                <Text style={{ color: '#c0b01d', margin: 5 }}>Account Information</Text>
            </View>
            <View style={styles.infocontainer}>
                <TextInput style={styles.username}
                    placeholder='Username'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    autoFocus={true}
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                    onSubmitEditing={() => this.refs.edpassword.focus()}
                />
                <TextInput style={styles.passwrod}
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    //autoFocus={true}
                    returnKeyType='next'
                    autoCorrect={false}//không hiện ra gợi ý khi nhập
                // onSubmitEditing={() => this.refs.edhoten.focus()}
                />
                <View style={styles.button}>
                    <View style={styles.btndangnhap}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Details')}
                        >
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.btndoimatkhau}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('DoiMatKhau')}
                        >
                            <Text style={{ fontSize: 15, color: '#704608', textAlign: 'center' }}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btndangky}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AddCountNew')}
                        >
                            <Text style={{ fontSize: 15, color: '#704608', textAlign: 'center' }}>Registration>></Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View >
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,// co giản màn hình
        backgroundColor: '#1a1e2c',
    },
    logocontainer: {
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 100,
        flex: 1

    },
    infocontainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        // backgroundColor:'red'
    },
    logo: {
        width: 128,
        height: 56

    },
    username: {
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 5,
        margin: 20,
        //marginLeft: 70,
        //marginRight: 10,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        //paddingHorizontal: 10,

    },
    passwrod: {
        //paddingHorizontal: 10,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        margin: 20,
        //marginLeft: 70,
        height: 40,
        //marginRight: 10,
        marginBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.2)',

    },
    button: {
        //paddingHorizontal: 10,
        flexDirection: 'column',
    },
    btndangnhap: {
        //paddingHorizontal: 10,
        borderColor: 'gray',
        marginTop: 5,
        borderWidth: 1,
        margin: 20,
        //marginLeft: 70,
        height: 40,
        //marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#c0b01d',
    },
    btndoimatkhau: {
        marginTop: 5,
        margin: 20,
        marginBottom: 5,
    },
    btndangky: {
        marginTop: 5,
        marginRight: 20,
        marginBottom: 5,
    }
});