import React, { Component } from 'react'
import { Text, View , Button , Image ,RCTImageView} from 'react-native'
import ImagePicker from 'react-native-image-picker';

export default class RN_image_picker extends Component {
    constructor(){
        super()
        this.state={source:{uri:''}}
    }
    _takePhoto=()=>{
        ImagePicker.launchCamera({},resp=>{
            // this.setState({source:{uri:resp.uri}})
            this.setState({source:{uri:'data:image/png;base64,'+resp.data}})//base64
        })
    }
    _liber=()=>{
        ImagePicker.launchImageLibrary({},resp=>{

        })
    }
    render() {
        return (
            <View>
                <Button title="拍照" onPress={this._takePhoto}></Button>

                <View>
                     <Image resizeMode="stretch" style={{width:500,height:500}} source={this.state.source}/>
                </View>
            </View>
            
            
        )
    }
}
