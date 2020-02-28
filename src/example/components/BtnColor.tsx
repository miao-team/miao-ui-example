import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MButton, Constant } from 'miao-ui'
import classNames from "classnames"
import "../index.scss";
export default class Color extends Component {
    config: Config = {
        navigationBarTitleText: "Color"
    };

    render() {



        const headerView = <MNavbar shadow>Color 按钮配色方案 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='标准背景配色方案'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

                >
                    <MGrid className="text-center" col="3">
                        {Constant.Color.normalColor.map((item) => {
                            return <View className={classNames("padding-x-5 padding-y-10")}>
                                <MButton bgColor={item.title} size="md">{item.title}</MButton>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
                <MPanel
                    title='浅色'
                    className="bg-white padding-5"
                    description="className='bg-[colorName] light'"
                    headerBorder
                >
                    <MGrid className="text-center" col="3">
                        {Constant.Color.normalColor.map((item) => {
                            return <View className={classNames(" padding-x-5 padding-y-10")}>
                                <MButton bgColor={'light-' + item.title} size="md">{item.title}</MButton>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
            </MLayout>
        )
    }
}
