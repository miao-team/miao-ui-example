import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MPanel,MGrid } from 'miao-ui'
import { classNames } from "miao-ui/utils"



import "../index.scss";
export default class Panel extends Component {

    config: Config = {
        navigationBarTitleText: "Layout"
    };

    render() {
        const headerView = <View className="shadow bg-red" style={{ height: "100px" }}>headerView</View>
        const footerView = <View className="shadow bg-green" style={{ height: "200px" }}>footerView</View>
        return (
            <MPanel
                disable
                header={{
                    componentType:'text',
                    text: 'adsfasdfsadf',

                    className:'padding-lr padding-tb-sm solid-bottom bg-red'

                }}
                className="bg-gray"
                //footer={footerView}
                contentClassName="bg-black"
            >


                <MGrid col="4">
                    <View className="padding solid">1</View>
                    <View className="padding solid">2</View>
                    <View className="padding solid">3</View>
                    <View className="padding solid" >4</View>
                </MGrid>
            </MPanel>
        )
    }
}
