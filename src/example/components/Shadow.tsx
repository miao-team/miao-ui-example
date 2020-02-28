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
                    title='Shadow Color'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

                >
                    <MGrid className="text-center" col="3" gap="10">

                    {Constant.Color.normalColor.map((item) => {
                        return <View className={classNames(
                            `shadow-${item.title}`,
                             "padding-x-5 padding-y-20 solid shadow")}>
                            <MText size="sm">{item.title}</MText>
                        </View>
                    })}



                    </MGrid>
                </MPanel>


            </MLayout>
        )
    }
}
