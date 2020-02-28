import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MIcon, Constant, MButton } from 'miao-ui'
import { classNames } from "miao-ui/utils"
import "../index.scss";
export default class Layout extends Component {

    config: Config = {
        navigationBarTitleText: "Layout"
    };

    render() {
        const headerView = <View className="shadow bg-red" style={{ height: "100px" }}>headerView</View>
        const footerView = <View className="shadow bg-green" style={{ height: "200px" }}>footerView</View>
        return (
            <MLayout
                disable
                header={headerView}
                footer={footerView}
                contentClassName="bg-black"
            >
                contentView
            </MLayout>
        )
    }
}
