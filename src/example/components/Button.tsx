import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import { MLayout, MNavbar, MTitleBar, MGrid MCard, MText, Constant, MNav, MButton } from 'miao-ui'
import "../index.scss";

import { MTextExample } from '../initParams'
export default class Button extends Component {
    config: Config = {
        navigationBarTitleText: "Text"
    };



    constructor() {
        super()
        this.state = {
            text: 'text 测试文字',
        }
    }


    private onClickText(item, items, index) {
        console.log(item)
        item && this.setState({
            [`${item}`]: items.text
        })
        console.log(this.state);
    }

    render() {

        const tabsNav = [
            { text: 'A', icon: "home", id: 1 },
            { text: 'B', icon: "home", id: 1 },
            { text: 'C', icon: "home", id: 1 },
        ];


        const initParamsView = Object.keys(MTextExample).map((item) => {


            if (typeof MTextExample[item] == "object") {

                const navItems = MTextExample[item].map(it => {
                    return {
                        text: (typeof it === "boolean") ? (it ? 'Y' : 'N') : it,
                    }
                })
                return <MNav
                    title={item}
                    titleClassName="text-red text-right"
                    titleStyle={{ width: "100px" }}
                    className="solid-bottom text-md"
                    items={navItems}
                    onClick={(items, index) => this.onClickText(item, items, index)}
                />
            }
        })



        const headerView = <MNavbar shadow>Text 演示</MNavbar>




        const navItems = [
            { text: 'A' },
            { text: 'B' }
        ]
        return (
            <MLayout
                disable
                header={headerView}
            >

                <MButton className="margin-20"
                    size="xsl"
                    color="black"
                    bgColor="red"
                    plain
                    plainSize="bold"
                    loading
                    long
                >测试按钮</MButton>
                <MTitleBar
                    type="border-title"
                    className="padding-5 solid-bottom" title="参数" subTitle="选择不同参数 来查看字体效果"></MTitleBar>


                <MNav
                    title='Title'
                    titleClassName="text-red text-right"
                    titleStyle={{ width: "100px" }}
                    className="solid-bottom text-md"
                    items={navItems}
                // onClick={(items, index) => this.onClickText(item, items, index)}
                />

            </MLayout>
        )
    }
}
