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



        const headerView = <MNavbar shadow>Color 字体配色方案 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='标准配色方案'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

                >
                    <MGrid className="text-center" col="3">
                        {Constant.Color.normalColor.map((item,key) => {
                            return <View className={classNames("padding-x-5 padding-y-20",{
                                'bg-black':key == Constant.Color.normalColor.length -1
                            })}>
                                <MText size="xl" className={`text-${item.title}`}>{item.title}</MText>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
            </MLayout>
        )
    }
}
