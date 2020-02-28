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
                    title='标准背景配色方案'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

                >
                    <MGrid className="text-center" col="3">
                        {Constant.Color.normalColor.map((item) => {
                            return <View className={classNames(`bg-${item.title}`, "padding-x-5 padding-y-20")}>
                                <MText size="sm">{item.title}</MText>
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
                            return <View className={classNames(`bg-${item.title}`, "light padding-x-5 padding-y-20")}>
                                <MText size="sm">{item.title}</MText>
                            </View>
                        })}
                    </MGrid>
                </MPanel>

                <MPanel
                    title="渐变色"
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder
                    clearFixBottom
                >
                    <MGrid className="text-center" col="3">
                        {Constant.Color.gradualColor.map((item) => {
                            return <View className={classNames(`bg-${item.title}`, " padding-x-5 padding-y-20")}>
                                <MText size="sm">{item.title}</MText>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
            </MLayout>
        )
    }
}
