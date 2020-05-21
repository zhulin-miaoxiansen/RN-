import React, { Component } from 'react'
import { Text, View ,FlatList, Button} from 'react-native'


export default class FlatDemo extends Component {

    constructor(props){
        super(props)
        this.max=4
        this.state={data:[1,2,3,4]}
    }
    _remove=(id)=>{
        let {fileList} = this.state.data;
        this.state.data.splice(id, 1);
        this.setState({
            data: fileList
          })
    }
    _renderItem=({item})=>{
        return (
            <View style={{height:120,justifyContent:"space-between"}}>
                <Text>{item}</Text>
                <Button title="xxx" onPress={this._remove(item.id)}/>
            </View>
        )
    }
    _ItemSeparatorComponent=()=>{
        return <View style={{height:1,backgroundColor:"red"}}></View>
    }

    _refresh=()=>{
        let d=Math.floor(Math.random()*100+100)
        let data=this.state.data.splice(0)
        data.unshift(d)//arr0.unshift('new1','new2');//插入到数组前面，所有的元素自动后移
        this.setState({data:data})
    }
    _reachEnd=()=>{
        let data=this.state.data.splice(0)//清空原data并赋值
        data.push(++this.max)
        this.setState({data:data})
    }


    render() {
        return (
            <View>
                <FlatList
                    keyExtractor={({item,index})=>index}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}//行与行之间的分隔线组件。不会出现在第一行之前和最后一行之后。
                    data={this.state.data} 
                    renderItem={this._renderItem}//从data中挨个取出数据并渲染到列表中。
                    refreshing={false}//在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号。
                    onRefresh={this._refresh}//如果设置了此选项，则会在列表头部添加一个标准的RefreshControl控件，以便实现“下拉刷新”的功能。同时你需要正确设置refreshing属性。
                    onEndReached={this._reachEnd}//当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    onEndReachedThreshold={0.2}//决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5 表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                />
            </View>
        )
    }
}
