
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
    {
        title: '页面构成框架组件',
        subTitle: '核心组件-构成页面的核心元素 高耦合',
        isParent: true,
        children: [
            { title: 'Layout', iconName: 'mobilefill', tag: 'Layout', version: 10 },
            { title: 'Header', iconName: 'more', tag: 'Header', version: 10 },
            { title: 'Content', iconName: 'edit', tag: 'Content', version: 10 },
            { title: 'Footer', iconName: 'more', tag: 'Footer', version: 10 },
            { title: 'Grid', iconName: 'btn', tag: 'Grid', version: 10 },
            { title: 'Flex', iconName: 'btn', tag: 'Flex', version: 10 },
            { title: 'Skeleton', iconName: 'list', tag: 'Skeleton', version: 10 },

        ]
    },

    {
        title: '基础组件',
        subTitle: '基础组件-构成页面的基本元素',
        rightLink: {
            url: '',
        },
        isParent: true,
        children: [
            { title: 'Text', iconName: 'text', tag: 'Text', version: 10 },
            { title: 'Button', iconName: 'btn', tag: 'Button', version: 10 },
            { title: 'Icon', iconName: 'icon', tag: 'Icon', version: 10 },
            { title: 'Tag', iconName: 'tag', tag: 'Tag', version: 10 },
            { title: 'Avatar', iconName: 'emoji', tag: 'Avatar', version: 10 },
            { title: 'Divider', iconName: 'move', tag: 'Divider', version: 10 },
        ]
    },

    {
        title: 'UI布局组件',
        subTitle: 'UI布局组件',
        rightLink: {
            url: '',
        },
        isParent: true,
        children: [
            { title: 'Nav', iconName: 'taoxiaopu', tag: 'Nav', version: 10 },
            { title: 'Navbar', iconName: 'taoxiaopu', tag: 'NavBar', version: 10 },
            { title: 'TabBar', iconName: 'newshot', tag: 'TabBar', version: 10 },
            { title: 'Panel', iconName: 'btn', tag: 'Panel', version: 10 },
            { title: 'Card', iconName: 'tag', tag: 'Card', version: 10 },
            { title: 'TitleBar', iconName: 'tag', tag: 'TitleBar', version: 10 },
            { title: 'List', iconName: 'tag', tag: 'List' },
            { title: 'Swiper', iconName: 'exit', tag: 'Swiper', version: 10 },
            { title: 'Step', iconName: 'exit', tag: 'Step' },
            { title: 'SearchBar', iconName: 'exit', tag: 'SearchBar' },
            { title: 'ShoppingBar', iconName: 'exit', tag: 'ShoppingBar' },
            { title: 'NoticeBar', iconName: 'exit', tag: 'NoticeBar', version: 4 },
            { title: 'Calendar', iconName: 'exit', tag: 'Calendar' },
            { title: 'MenuList', iconName: 'mobilefill', tag: 'MenuList', version: 6 },
        ]
    },
    {
        title: '操作反馈',
        isParent: true,
        children: [
            { title: 'Loading', iconName: 'loading', tag: 'Loading', version: 10 },
            { title: 'Message', iconName: 'emoji', tag: 'Message', version: 10 },



            // { title: '滑动操作', iconName: 'emoji', tag: 'SwiperAction' },
            // { title: '动作面板', iconName: 'emoji', tag: 'ActionSheet' },
        ]
    },
    {
        title: '用户交互',
        isParent: true,
        children: [
            { title: 'Input', iconName: 'emoji', tag: 'Input' },
            { title: 'Radio', iconName: 'emoji', tag: 'Radio' },
            { title: 'Checkbox', iconName: 'emoji', tag: 'Checkbox' },
            { title: 'Switch', iconName: 'emoji', tag: 'Switch' },
            { title: 'Select', iconName: 'emoji', tag: 'Select' },
            { title: 'Picker', iconName: 'emoji', tag: 'Picker' },
            { title: 'Textarea', iconName: 'emoji', tag: 'Textarea' },

        ]
    },
    {
        title: '硬件能力',
        isParent: true,
        subTitle: '硬件能力为 Pro 版本功能',
        children: [
            { title: '加速度计', iconName: 'icloading', tag: 'Animation', version: 0 },
            { title: '蓝牙', iconName: 'icloading', tag: 'Animation', version: 0 },
            { title: '低功耗蓝牙', iconName: 'icloading', tag: 'Animation', version: 0 },



        ]
    }
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

        return (
            <View>

                {EComponent.map((item, key) => {
                    return (

                        <MPanel
                            bgColor='white'
                            title={item.title}
                            subTitle={item.subTitle}
                            headerClassName="padding-lr padding-tb-sm"
                            clearFixBottom
                        >

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

                        </MPanel>

                    )
                })}
            </View>
        );
    }
}



//            <MLoading type="image" bgColor="black" />
