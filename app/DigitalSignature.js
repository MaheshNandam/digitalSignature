import React,{ Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

let { height, width } = Dimensions.get('window');

import SignatureCapture from 'react-native-signature-capture';


export default class DigitalSignature extends Component{

    saveSign=()=>{
        this.refs["sign"].saveImage();
    }

    resetSign=()=>{
        this.refs["sign"].resetImage();
    }


    render(){
        return(
            <View style={styles.body}>
                <View style={styles.block}>
                    <SignatureCapture
                        style={[{ flex: 1 }, styles.signature]}
                        ref="sign"
                        onSaveEvent={this._onSaveEvent}
                        onDragEvent={this._onDragEvent}
                        saveImageFileInExtStorage={false}
                        showNativeButtons={false}
                        showTitleLabel={false}
                        viewMode={"portrait"} />
                </View>
                <View style={styles.footerBlock}>
                    <TouchableHighlight
                        onPress={() => { this.saveSign() }} >
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>Save</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { this.resetSign() }} >
                        <View style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>Reset</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    block:{
        width: width,
        height: 300
    },
    signature:{
        width: width,
        height: 300
    },
    footerBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    buttonStyle:{
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: "#000",

    },
    textStyle:{
        color: '#fff',
        fontSize: 20
    }
    

});