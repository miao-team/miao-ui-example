
import { View, Text } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";


import "./index.scss";
//MNavbar, ETitleBar, EGrid, EIcon, , EDivider, ETabBar, Constant
import { MGrid, MFlex, MTitleBar, MIcon, MCard, MPanel, MRefresh, MLoading, MSkeleton } from 'miao-ui'
import classNames from 'classnames'

const EComponent = [



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

console.log('AAA')
        return (
            <View id="adminAAA" style={{
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
