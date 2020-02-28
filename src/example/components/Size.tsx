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


        const headerView = <MNavbar shadow>Size 演示</MNavbar>
        return (
            <MLayout
                disable
                header={headerView}
            >
                <MPanel
                    title='Size'
                    className="bg-white padding-5"
                    description="className='bg-[colorName]'"
                    headerBorder

                >
                    <MGrid className="text-center" col="3">
                        {Constant.Size.fontSize.map((item) => {
                            return <View className={classNames( "padding-x-5 padding-y-20")}>
                                <MText size={item}>{item}</MText>
                            </View>
                        })}
                    </MGrid>
                </MPanel>

            </MLayout>
        )
    }
}
