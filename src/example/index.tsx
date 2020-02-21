
import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";


import "./index.scss";
//MNavbar, ETitleBar, EGrid, EIcon, , EDivider, ETabBar, Constant
import { MLayout, MTabBar, MGrid, MTitleBar, Constant, MIcon, MButton, MDivider } from 'miao-ui'
import { classNames } from 'miao-ui/utils'

import ExampleItems from "./items"
export default class Example extends Component {

    private header = {
        title: '渺子工作室-MiaoUI',
    };
    private footer = {
        active: 0,
        bgColor: "black",
        activeColor: 'red',
        fix: true,
        tabs: [
            { badge: true, icon: "colorlens", title: "示例" },
            { badge: false, icon: "taoxiaopu", title: "组件" },
            { badge: 99, icon: "brandfill", title: "关于渺子", action: true },
            { badge: false, icon: "questionfill", title: "文档" },
            { badge: false, icon: "infofill", title: "Api" },
        ],
        onClick: (item, index) => {
            this.setState({
                tabIndex: index
            })
        }
    };

    constructor(porps) {
        super(porps)

        this.state = { tabIndex: 0 }



    }
    config: Config = {
        navigationBarTitleText: "渺子工作室-MiaoUI",
    }


    private toPage(page) {
        Taro.navigateTo({
            url: `/example/components/${page}`
        })
    }
    private changeTabIndex = (item, index) => {

    }

    render() {

        const footerView = <MTabBar {...this.footer} />

        // /**
        //  *
        //  */
        const ViewComponetns = [

            //配置色方案
            [
                <MTitleBar
                    className="solid-bottom padding-5"
                    title="常规字体配色方案"
                    subTitle="text-[colorName]"
                    rightLink={{
                        text: '更多配色方案',
                        url: '/example/components/Color'
                    }} />,
                <MGrid col={5} gap={1} className="text-center bg-gary">
                    {Constant.Color.normalColor.map((item, key) => {
                        return (
                            <View key={key}
                                className={classNames(`${key == Constant.Color.normalColor.length - 1 ? "bg-black" : "bg-white"}`, "padding-b-5")}>
                                <MIcon icon='hot' size='md' color={item.title} />
                                <View className="text-md">{item.title}</View>
                            </View>
                        )
                    })}
                </MGrid>,
                <MTitleBar
                    className="solid-bottom padding-5  margin-t-10"
                    title="常规背景配色方案"
                    subTitle="bg-[colorName]"
                    rightLink={{
                        text: '更多背景配色方案',
                        url: '/example/components/BackgroundColor'
                    }} />,
                <MGrid col={5} gap={1} className="text-center bg-gary">
                    {Constant.Color.normalColor.map((item, key) => {
                        return (
                            <View key={key}
                                className={classNames(`bg-${item.title}`, "padding-10 text-md")}>
                                {item.title}
                            </View>
                        )
                    })}
                </MGrid>,
                <MTitleBar className="solid-bottom padding-5  margin-t-10" title="常规按钮配色方案"
                    rightLink={{
                        text: '更多按钮配色方案',
                        url: '/example/components/BackgroundColor'
                    }}
                    subTitle="bg-[colorName]" />,
                <MGrid col={4} gap={1} className="text-center bg-white">
                    {Constant.Color.normalColor.map((item, key) => {
                        return (
                            <View key={key}
                                className={classNames("text-md")}>
                                <MButton className="padding-10" plainSize={'default'} shape='round' bgColor={item.title}>{item.title}</MButton>
                            </View>
                        )
                    })}


                </MGrid>,
                <MTitleBar className="solid-bottom padding-5  margin-t-10" title="渐变效果配色方案"
                    rightLink={{
                        text: '更多渐变效果配色方案',
                        url: '/example/components/BackgroundColor'
                    }}
                    subTitle="bg-[colorName]" />,
                <MGrid col={3} gap={1} className="text-center bg-white">
                    {Constant.Color.gradualColor.map((item, key) => {
                        return (
                            <View key={key}
                                className={classNames("text-md padding-10", `bg-${item.title}`)}>
                                {item.title}
                            </View>
                        )
                    })}
                </MGrid>


            ],

            //组件页面
            <ExampleItems />,
            // 关于渺子科技
            [
                <View className="">关于</View>
            ],
            //文档  api
            [
                <View className="">文档</View>
            ],
            [
                <View className="">api</View>
            ],
        ]





        return (
            <MLayout
                headerConfig={this.header}
                footerConfig={this.footer}
            >
                {ViewComponetns[this.state.tabIndex]}
            </MLayout>
        );
    }
}
