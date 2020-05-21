import React, { Component } from 'react'
import { Text, View , Button , TextInput} from 'react-native'
import RNFS from 'react-native-fs'
const path = RNFS.DocumentDirectoryPath;
export default class fs extends Component {
    constructor(){
        super()
        this.state = {
            filenamr:''
        }
    }
    _exist=()=>{
        // alert(1111)
        RNFS.exists(path+'/'+this.state.filenamr).then(rs=>alert(rs))
    }
    _create=()=>{
        // alert(2222)
        RNFS.writeFile(path+'/test1.txt','中国人','utf8').then(()=>alert('ok'))
    }
    _append=()=>{
        RNFS.appendFile(path+'/test1.txt','中国人','utf8').then(()=>alert('ok'))
    }
    _read=()=>{
        RNFS.readFile(path+'/test1.txt','utf8').then((result)=>alert(result))
    }
    fileNameChange=()=>{

    }
    render() {
        return (
            <View>
                <TextInput placeholder="输入文件名" value={this.state.filenamr} onChangeText={this.fileNameChange}></TextInput>
                <Button onPress={this._exist} title="验证文件存在"></Button>
                <Button onPress={this._create} title="创建文件"></Button>
                <Button onPress={this._append} title="追加文件"></Button>
                <Button onPress={this._read} title="读取文件"></Button>
            </View>
        )
    }
}
