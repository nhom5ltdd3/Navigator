import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
export default class DanhSach extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Danh Sách',
        headerStyle: {
            backgroundColor: '#9c906e',
            fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={{ padding: 15 }}
            >

                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Home</Text>
            </TouchableOpacity>
    });

    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            refresh: false,
            trang: 1,
        }
    }
    onPressAdd() {
        alert('This is the button');
    }
    render() {
    return (
            <View style={styles.cotainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ marginRight: 20, marginBottom: 3 }}
                        onPress={() => {
                            this.refs.danhsach.scrollToEnd()

                        }}>
                        <Image
                            source={require('../icons/trang.png')}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    ref="danhsach"
                    refreshing={this.state.refresh}// load xoay dữ liệu trên sv vê true xoay, false dừng
                    onRefresh={() => { this.refresh() }}
                    onEndReached={this.myFunction}
                    onEndThreshold={0.5}
                    // onRefresh={() => { this.myFunction() }}
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { alert(item.HOTEN) }}>
                            <View style={styles.title}>
                                <View style={styles.trai}>
                                    <Image style={{ width: 100, height: 100, borderRadius: 50 }}
                                        source={{ uri: item.HINH }} />
                                </View>
                                <View style={styles.phai}>
                                    <Text>{item.HOTEN}</Text>
                                    <Text>{item.LOP}</Text>
                                    <Text style={{ color: 'red', margin: 10 }}>{item.key}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
    refresh() {
        this.setState({
            refresh: true
        });
        fetch('http://192.168.0.129/database/demo2.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson,
                    refresh: false
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    myFunction = () => {
        //this.setState({
        // refresh: false
        //});
        this.setState({ trang: this.state.trang++ });
        fetch('http://192.168.0.129/database/demo3.php?trang=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson,
                    refresh: false
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    componentDidMount() {
        fetch('http://192.168.0.129/database/demo3.php?trang=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    mang: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
const styles = StyleSheet.create({
    cotainer: {
        flex: 1,// co giản màn hình
        justifyContent: 'flex-start',// xuất phát từ điêm đầu tiên, flex-end cố định ỏ dưới
        // space-between khoảng cách đều nhau giữa các cột, space-around cách trên dưới 1 khoảng, center nằm giữa
        flexDirection: 'column',//chia cột dọc, row chia cột ngang
        //alignItems: 'center',flex-end, stretch tự động kéo căng full màn hình
        backgroundColor: 'white',
        borderColor: '#1d1b1b',
    },
    header: {
        //alignItems: 'flex-end',
        justifyContent: 'flex-end',
        // marginTop: 5,
        backgroundColor: '#9c906e',
        flexDirection: 'row'

    },

    title: {
        //alignItems: 'center',
        borderBottomWidth: 1,
        padding: 5,
        borderColor: 'gray',
        borderRightWidth: 1,
        flexDirection: 'row'
    },
    trai: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    phai: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});