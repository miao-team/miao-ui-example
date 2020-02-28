
import { View, Text } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";


import "./index.scss";
//MNavbar, ETitleBar, EGrid, EIcon, , EDivider, ETabBar, Constant
import { MGrid, MFlex, MTitleBar, MIcon, MCard, MPanel, MRefresh, MLoading, MSkeleton } from 'miao-ui'
import classNames from 'classnames'

const EComponent = [


    {
        title: 'Style 方案',
        subTitle: '统一管理组件的配色方案 极具色彩表现力',
        rightLink: {
            url: '',
        },
        isParent: true,
        children: [
            { title: 'Color', iconName: 'colorlens', tag: 'Color', version: 10 },
            { title: 'TextColor', iconName: 'skinfill', tag: 'TextColor', version: 10 },
            { title: 'ButtonColor', iconName: 'btn', tag: 'BtnColor', version: 10 },
            { title: 'Border', iconName: 'discoverfill', tag: 'Border', version: 10 },
            { title: 'Radius', iconName: 'icloading', tag: 'Radius', version: 10 },
            { title: 'Shadow', iconName: 'info', tag: 'Shadow', version: 10 },
            { title: 'Size', iconName: 'title', tag: 'Size', version: 10 },
            { title: 'Margin', iconName: 'roundaddfill', tag: 'Margin', version: 10 },
            { title: 'Padding', iconName: 'roundadd', tag: 'Padding', version: 10 },
            { title: 'Transition', iconName: 'ticket', tag: 'Transition', version: 10 },
            { title: 'Animation', iconName: 'icloading', tag: 'Animation', version: 4 },

        ]
    },

]
export default class ExampleItems extends Component {

    constructor(porps) {
        super(porps)
    }

    config: Config = {
        navigationBarTitleText: "渺子工作室-MiaoUI",
    }


    private toPage(page) {
        Taro.navigateTo({
            url: `/example/components/${page}`
        })
    }

    render() {

        const versionClassName = [
            'bg-red',
            'bg-pink',
            'bg-orange',
            'bg-mauve',
            'bg-purple',
            'bg-bule',
            'bg-brown',
            'bg-cyan',
            'bg-olive',
            'bg-green',
            'bg-white',
        ]

console.log('BBBB')
        return (
            <View className="adminBBB" style={{
                marginTop:'200px'
            }}>





                <MSkeleton
                    type="row"
                    title
                    avatar
                    row={3}
                    action

                    loading={false}
                >
                    {EComponent.map((item, key) => {
                        return (
                            <View>

                                <MTitleBar
                                    className={classNames({
                                        'margin-t-10': key > 0
                                    }, "padding-5 solid-bottom")}
                                    title={item.title}
                                    subTitle={item.subTitle}
                                    rightLink={item.rightLink}
                                />
                                <MGrid col="4" className="text-center">
                                    {item.children && item.children.map((child, ckey) => {
                                        return (
                                            <View key={key} className={classNames({
                                                [`${versionClassName[child.version]}`]: child.version,
                                                'bg-red': !child.version,
                                            }, 'padding-5 solid')} onClick={this.toPage.bind(this, child.tag)}>
                                                <MIcon icon={child.iconName} size='40' />
                                                <View style="font-size:14px">{child.title}</View>
                                            </View>
                                        )
                                    })}
                                </MGrid>
                            </View>
                        )
                    })}
                </MSkeleton>
            </View>
        );
    }
}



//            <MLoading type="image" bgColor="black" />
