import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MText, Constant } from 'miao-ui'
import classNames from "classnames"
import "../index.scss";
export default class Color extends Component {
    config: Config = {
        navigationBarTitleText: "Color"
    };

    render() {



        const headerView = <MNavbar shadow>Color 配色方案 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='Border 实边'
                    className="bg-white padding-5"
                    headerBorder
                    clearFixBottom
                >
                    <MGrid className="text-center padding-10" col="3" gap="10">
                        <View className="padding-x-5 padding-y-20 solids"><MText size="md">四边</MText></View>
                        <View className="padding-x-5 padding-y-20 solid-top"><MText size="md">上</MText></View>
                        <View className="padding-x-5 padding-y-20 solid-right"><MText size="md">右</MText></View>
                        <View className="padding-x-5 padding-y-20 solid-bottom"><MText size="md">下</MText></View>
                        <View className="padding-x-5 padding-y-20 solid-left"><MText size="md">左</MText></View>
                    </MGrid>
                </MPanel>

                <MPanel
                    title='Border 虚线边'
                    className="bg-white padding-5"
                    headerBorder
                    clearFixBottom
                >
                    <MGrid className="text-center padding-10" col="3" gap="10">
                        <View className="padding-x-5 padding-y-20 dashed"><MText size="md">四边</MText></View>
                        <View className="padding-x-5 padding-y-20 dashed-top"><MText size="md">上</MText></View>
                        <View className="padding-x-5 padding-y-20 dashed-right"><MText size="md">右</MText></View>
                        <View className="padding-x-5 padding-y-20 dashed-bottom"><MText size="md">下</MText></View>
                        <View className="padding-x-5 padding-y-20 dashed-left"><MText size="md">左</MText></View>
                    </MGrid>
                </MPanel>

            </MLayout>
        )
    }
}
