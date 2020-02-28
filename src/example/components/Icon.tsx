import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MPanel, MGrid MIcon, Constant } from 'miao-ui'
import { classNames } from "miao-ui/utils"
import "../index.scss";
export default class Icon extends Component {

    config: Config = {
        navigationBarTitleText: "Icon 组件"
    };

    render() {
        const headerView = <MNavbar shadow>Icon 演示</MNavbar>
        console.log(Constant)
        return (
            <MLayout
                disable
                renderHeader={headerView}
            >

                <MPanel
                    title='Color'
                    className="bg-white padding-5"
                    description="图标配色"
                    headerBorder
                    rightLink={{
                        text: '更多图标配色',
                        url: '###'
                    }}
                    clearFixBottom
                >

                    <MGrid className="text-center" col={3} gap={1}>
                        {Constant.Color.normalColor.map((item) => {
                            return <View>
                                <MIcon icon="title" color={item.title} size="xl" />
                                <View style="font-size:14px">{item.title}</View>
                            </View>
                        })}
                    </MGrid>


                </MPanel>
                <MPanel
                    title='Size'
                    className="bg-white padding-5"
                    description="图标Size"

                    rightLink={{
                        text: '更多图标Size',
                        url: '###'
                    }}
                    headerBorder
                    clearFixBottom
                >
                    <MGrid className="text-center" col={3} gap={1}>
                        {Constant.Size.fontSize.map((item) => {
                            return <View>
                                <MIcon icon="title" size={item} color="red" />
                                <View style="font-size:14px">{item}</View>
                            </View>
                        })}
                    </MGrid>
                </MPanel>
                <MPanel
                    title='所有图标'
                    className="bg-white padding-5"

                    rightLink={{
                        url: '###'
                    }}
                    headerBorder
                    clearFixBottom
                >



                    <MGrid className="text-center" col={3} gap={1}>
                        {Constant.Icon.map((item) => {
                            return <View>
                                <MIcon icon={item.name} size='30' />
                                <View style="font-size:14px">{item.name}</View>
                            </View>
                        })}
                    </MGrid>
                </MPanel>


            </MLayout>
        );
    }
}
